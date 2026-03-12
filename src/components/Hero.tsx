"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // ─── Scene ────────────────────────────────────────────────
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x04040f, 0.015);

    // ─── Camera ───────────────────────────────────────────────
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(0, 1.5, 10);

    // ─── Renderer ────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x04040f);

    // Track for cleanup
    const geos: THREE.BufferGeometry[] = [];
    const mats: THREE.Material[] = [];

    // ─────────────────────────────────────────────────────────
    // CODE PARTICLE MÖBIUS STRIP
    // Snippets from Jacob's C++/C#/Python/TS projects orbit a
    // Möbius strip and scatter when the mouse gets close.
    // ─────────────────────────────────────────────────────────

    // Real tokens from Jacob's C#/C++/JS/TS projects
    const CODE_TOKENS = [
      // Unity C# — PlayerController
      'Rigidbody', 'Vector3', 'Quaternion', '[Header]', 'moveSpeed',
      'Slerp', 'FixedUpdate', 'Physics.Raycast', 'transform',
      'GetComponent', 'MonoBehaviour', '[SerializeField]', 'rb.AddForce',
      'InputValue', 'OnMove()', 'jumpForce', 'isGrounded', 'Start()', 'Update()',
      'transform.position', 'transform.rotation', 'Vector3.zero', 'Vector3.up',
      'Mathf.Lerp', 'Mathf.Clamp', 'Time.deltaTime', 'Time.time',
      'gameObject', 'SetActive()', 'Destroy()', 'Instantiate()',
      'Camera.main', 'LayerMask', 'CompareTag()', 'OnCollisionEnter',
      // Unity C# — AIController
      'NavMeshAgent', 'NavMesh', 'animator.Play', 'CrossFade',
      'AIPhase', 'IShootable', 'OverlapSphere', 'SetDestination',
      'agent.isStopped', 'RaycastHit', 'Random.Range', 'StartCoroutine',
      'animator.SetBool', 'animator.SetFloat', 'animator.SetTrigger',
      'WaitForSeconds', 'yield return', 'Coroutine', 'Physics.OverlapSphere',
      'NavMesh.SamplePosition', 'agent.speed', 'agent.stoppingDistance',
      // C++ — general + LeetCode
      'ListNode*', 'new ListNode', 'carry/10', 'while(l1||l2)',
      'nullptr', 'result->next', 'int carry', 'l1->next',
      '#include', 'template', 'auto', 'struct', '->',
      'std::vector', 'std::string', 'std::map', 'std::shared_ptr',
      'std::unique_ptr', 'std::make_shared', 'std::sort', 'std::cout',
      'std::unordered_map', 'std::pair', 'size_t', 'const&',
      'int main()', 'return 0;', 'namespace', 'using namespace std',
      'stack<int>', 'queue<int>', 'int nums[]', 'for(auto&',
      // C# — zigzag + general
      'StringBuilder', 'List<>', 'foreach', 'numRows',
      'direction *= -1', 'sb.Append', 'new List',
      'Dictionary<>', 'HashSet<>', 'LINQ', '.Where()', '.Select()',
      'string[]', 'int[]', 'var ', 'private', 'protected', 'static',
      'readonly', '[RequireComponent]', 'ScriptableObject',
      // JS — CS:GO app + site
      'async function', 'await fetch', 'classList', 'querySelectorAll',
      'JSON.stringify', 'renderResults', 'catch (e)', 'const API',
      'document.getElementById', 'addEventListener', 'removeEventListener',
      'Promise<>', '.then()', '.catch()', 'Array.from()', 'map()',
      'filter()', 'reduce()', 'Object.keys()', 'localStorage',
      // TypeScript / React
      'useState', 'useEffect', 'useRef', 'useCallback', 'useMemo',
      'React.FC', 'interface', 'export default', 'import type',
      'type Props', 'onClick', 'onChange', 'className', 'children',
      // General keywords + operators
      'void', 'class', '::', 'override', 'virtual', 'public',
      'const', '=>', 'export', 'async', 'await', 'null',
      '{ }', '&&', '||', '!=', '++', '--', '//', '===',
      'return', 'switch', 'case', 'break', 'continue', 'throw',
      'try { }', 'catch', 'finally', 'new', 'this', 'super',
    ];

    // One canvas texture per unique token — reused across particles
    const tokenTexMap = new Map<string, THREE.Texture>();
    const tokenTexList: THREE.Texture[] = [];

    CODE_TOKENS.forEach((tok) => {
      if (tokenTexMap.has(tok)) return;
      const cv = document.createElement('canvas');
      cv.width = 256; cv.height = 64;
      const ctx2 = cv.getContext('2d')!;
      ctx2.clearRect(0, 0, 256, 64);
      // Vary between bright cyan and softer blue-purple
      const col = Math.random() > 0.55 ? '#00d4ff' : Math.random() > 0.5 ? '#4499ff' : '#aa88ff';
      // Subtle dark bg so text is legible against bright scene
      ctx2.fillStyle = 'rgba(0,0,0,0.18)';
      ctx2.roundRect(4, 8, 248, 48, 6);
      ctx2.fill();
      ctx2.font = 'bold 26px monospace';
      ctx2.fillStyle = col;
      ctx2.shadowColor = col;
      ctx2.shadowBlur = 10;
      ctx2.textAlign = 'center';
      ctx2.textBaseline = 'middle';
      ctx2.fillText(tok, 128, 32);
      const tex = new THREE.CanvasTexture(cv);
      tokenTexMap.set(tok, tex);
      tokenTexList.push(tex);
    });

    // Möbius strip in XY plane, centered in scene — responsive sizing
    const isMobile = window.innerWidth < 768;
    const MB_CX = 0.0, MB_CY = 0.0;
    const MB_R = isMobile ? 1.9 : 3.6;
    const MB_W = isMobile ? 0.6 : 1.2;

    function mobiusHome(t: number, s: number): THREE.Vector3 {
      // Ring lies in XY plane — faces the camera nicely
      const x = (MB_R + s * Math.cos(t / 2)) * Math.cos(t) + MB_CX;
      const y = (MB_R + s * Math.cos(t / 2)) * Math.sin(t) + MB_CY;
      const z = s * Math.sin(t / 2);
      return new THREE.Vector3(x, y, z);
    }

    // Group so we can spin the whole strip
    const mobiusGroup = new THREE.Group();
    scene.add(mobiusGroup);

    // Particle arrays
    const cpSprites: THREE.Sprite[] = [];
    const cpSpriteMats: THREE.SpriteMaterial[] = [];
    const cpVelX: number[] = [], cpVelY: number[] = [], cpVelZ: number[] = [];
    const cpT: number[] = [], cpS: number[] = [], cpTSpeed: number[] = [];
    const CP_COUNT = isMobile ? 200 : 500;

    for (let i = 0; i < CP_COUNT; i++) {
      const tParam = (i / CP_COUNT) * Math.PI * 2;
      const sParam = (Math.random() - 0.5) * MB_W * 2;
      const tok = CODE_TOKENS[i % CODE_TOKENS.length];
      const tex = tokenTexMap.get(tok)!;

      const spMat = new THREE.SpriteMaterial({
        map: tex,
        transparent: true,
        opacity: 0.72 + Math.random() * 0.28,
        depthWrite: false,
      });
      cpSpriteMats.push(spMat);

      const sp = new THREE.Sprite(spMat);
      sp.scale.set(isMobile ? 0.9 : 1.5, isMobile ? 0.24 : 0.40, 1);
      sp.position.copy(mobiusHome(tParam, sParam));
      mobiusGroup.add(sp);

      cpSprites.push(sp);
      cpVelX.push(0); cpVelY.push(0); cpVelZ.push(0);
      cpT.push(tParam);
      cpS.push(sParam);
      cpTSpeed.push(0.7 + Math.random() * 0.6);
    }

    // ─── Ground grid ─────────────────────────────────────────
    const grid = new THREE.GridHelper(60, 60, 0x0a1a30, 0x05101e);
    grid.position.y = -2.8;
    scene.add(grid);

    // ─── Particles ───────────────────────────────────────────
    const count = 1600;
    const pPositions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 8 + Math.random() * 18;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pPositions[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
      pPositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pPositions[i * 3 + 2] = r * Math.cos(phi);
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute("position", new THREE.BufferAttribute(pPositions, 3));
    geos.push(particleGeo);
    const particleMat = new THREE.PointsMaterial({
      color: 0x00aaff,
      size: 0.035,
      transparent: true,
      opacity: 0.4,
    });
    mats.push(particleMat);
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // ─── Mouse / Touch tracking ───────────────────────────────
    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseRef.current.y = -(e.clientY / window.innerHeight - 0.5) * 1.5;
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    const onTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      mouseRef.current.x = (touch.clientX / window.innerWidth - 0.5) * 2;
      mouseRef.current.y = -(touch.clientY / window.innerHeight - 0.5) * 1.5;
    };
    window.addEventListener("touchmove", onTouchMove, { passive: true });

    // ─── Resize ──────────────────────────────────────────────
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };
    window.addEventListener("resize", onResize, { passive: true });

    // ─── Animation loop ───────────────────────────────────────
    let raf: number;
    const camTarget = { x: 0, y: 0 };
    const clock = new THREE.Clock();

    const animate = () => {
      raf = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      particles.rotation.y = t * 0.012;

      // Code particles — orbit Möbius strip, scatter on mouse hover
      // Approximate mouse position in world space at z≈0
      const mwx = mouseRef.current.x * 6.5;
      const mwy = mouseRef.current.y * 3.5;
      const REPEL_RADIUS = 2.2;
      const SPRING = 0.032;
      const DAMPING = 0.87;
      const ORBIT_SPEED = 0.0018;

      for (let i = 0; i < CP_COUNT; i++) {
        // Advance t along the strip (continuous orbit)
        cpT[i] += ORBIT_SPEED * cpTSpeed[i];

        // Compute current home target on the moving strip
        const home = mobiusHome(cpT[i], cpS[i]);
        const sp = cpSprites[i];

        // Spring toward home
        cpVelX[i] += (home.x - sp.position.x) * SPRING;
        cpVelY[i] += (home.y - sp.position.y) * SPRING;
        cpVelZ[i] += (home.z - sp.position.z) * SPRING;

        // Mouse repulsion
        const dx = sp.position.x - mwx;
        const dy = sp.position.y - mwy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < REPEL_RADIUS && dist > 0.01) {
          const strength = ((REPEL_RADIUS - dist) / REPEL_RADIUS) * 0.45;
          cpVelX[i] += (dx / dist) * strength;
          cpVelY[i] += (dy / dist) * strength;
        }

        // Damping + apply
        cpVelX[i] *= DAMPING;
        cpVelY[i] *= DAMPING;
        cpVelZ[i] *= DAMPING;
        sp.position.x += cpVelX[i];
        sp.position.y += cpVelY[i];
        sp.position.z += cpVelZ[i];
      }

      // Smooth camera parallax
      camTarget.x += (mouseRef.current.x * 0.8 - camTarget.x) * 0.05;
      camTarget.y += (mouseRef.current.y * 0.35 - camTarget.y) * 0.05;
      camera.position.x = camTarget.x;
      camera.position.y = 1.5 + camTarget.y;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };
    animate();

    // ─── Cleanup ─────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      geos.forEach((g) => g.dispose());
      mats.forEach((m) => m.dispose());
      scene.remove(mobiusGroup);
      cpSpriteMats.forEach((m) => m.dispose());
      tokenTexList.forEach((t) => t.dispose());
    };
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Three.js canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-[#04040f] to-transparent pointer-events-none" />

      {/* Dark backdrop behind text */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 75% 65% at 50% 45%, rgba(4,4,15,0.72) 0%, rgba(4,4,15,0.35) 50%, transparent 75%)",
        }}
      />

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-[#00d4ff] text-[11px] font-mono tracking-[0.45em] uppercase mb-6"
        >
          Game Programmer · Software Engineer
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="font-space font-bold leading-[0.9] tracking-tight mb-6 gradient-text"
          style={{
            fontSize: "clamp(3.2rem, 10vw, 8.5rem)",
            filter: "drop-shadow(0 2px 24px rgba(0,0,0,0.95))",
          }}
        >
          Jacob Fernandez
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="text-[#b8c4d0] text-lg md:text-xl max-w-lg mx-auto mb-10 leading-relaxed"
          style={{ textShadow: "0 2px 16px rgba(0,0,0,0.9)" }}
        >
          Game programmer and software engineer specializing in{" "}
          <span className="text-white font-medium">C++</span>,{" "}
          <span className="text-white font-medium">C#</span>,{" "}
          <span className="text-white font-medium">Python</span>,{" "}
          <span className="text-white font-medium">Unreal Engine 5</span>, and{" "}
          <span className="text-white font-medium">Unity</span>
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://linkedin.com/in/JacobFernandezProgrammer"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold tracking-wide text-white border border-white/20 hover:border-[#0a66c2] hover:text-[#0a66c2] transition-all duration-300"
              style={{ backdropFilter: "blur(8px)" }}
            >
              <FaLinkedin />
              LinkedIn
            </a>
            <a
              href="https://github.com/JakeeUp"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold tracking-wide text-white border border-white/20 hover:border-white/60 hover:text-white transition-all duration-300"
              style={{ backdropFilter: "blur(8px)" }}
            >
              <FaGithub />
              GitHub
            </a>
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold tracking-wide text-white border border-white/20 hover:border-[#00d4ff]/60 hover:text-[#00d4ff] transition-all duration-300"
              style={{ backdropFilter: "blur(8px)" }}
            >
              <FiDownload />
              Download Resume
            </a>
          </div>

          <a
            href="#projects"
            className="px-10 py-3.5 rounded-full text-sm font-semibold tracking-wide text-black transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg"
            style={{
              background: "linear-gradient(135deg, #00d4ff 0%, #0066ff 100%)",
              boxShadow: "0 0 30px rgba(0,212,255,0.3)",
            }}
          >
            View Projects
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.9 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[#8892a4] text-[10px] font-mono tracking-[0.35em] uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ scaleY: [1, 0.4, 1], opacity: [0.8, 0.2, 0.8] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-10 origin-top"
            style={{ background: "linear-gradient(to bottom, #00d4ff, transparent)" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
