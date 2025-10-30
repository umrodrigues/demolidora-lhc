'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showFixedHeader, setShowFixedHeader] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [showVideoFallback, setShowVideoFallback] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowFixedHeader(scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;
    videoElement.muted = true;
    videoElement.setAttribute('muted', '');
    videoElement.playsInline = true;
    videoElement.setAttribute('playsinline', '');
    videoElement.setAttribute('webkit-playsinline', '');
    videoElement.setAttribute('autoplay', '');
    try {
      // @ts-ignore defaultMuted existe em runtime em HTMLMediaElement
      videoElement.defaultMuted = true;
    } catch {}
    videoElement.volume = 0;
    videoElement.removeAttribute('controls');
    videoElement.playbackRate = 0.9;

    const tryPlay = () => {
      const playPromise = videoElement.play();
      if (playPromise && typeof playPromise.then === 'function') {
        playPromise.catch(() => {
        });
      }
    };

    // Tentar tocar imediatamente após o mount
    if (typeof window !== 'undefined') {
      if ('requestAnimationFrame' in window) {
        window.requestAnimationFrame(() => {
          tryPlay();
        });
      } else {
        setTimeout(() => tryPlay(), 0);
      }
    }

    const onCanPlay = () => tryPlay();
    const onLoadedData = () => tryPlay();
    const onLoadedMetadata = () => {
      tryPlay();
    };
    const onCanPlayThrough = () => tryPlay();
    const onPlaying = () => {
      setIsVideoPlaying(true);
      setShowVideoFallback(false);
    };

    videoElement.addEventListener('canplay', onCanPlay);
    videoElement.addEventListener('loadeddata', onLoadedData);
    videoElement.addEventListener('loadedmetadata', onLoadedMetadata);
    videoElement.addEventListener('canplaythrough', onCanPlayThrough);
    videoElement.addEventListener('playing', onPlaying);

    const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        if (entry.isIntersecting && entry.intersectionRatio > 0.25) {
          tryPlay();
        } else {
          if (!isMobile) {
            videoElement.pause();
          }
        }
      },
      { threshold: [0, 0.01, 0.25, 0.5, 1] }
    );

    observer.observe(videoElement);

    // Fallback: em alguns Safaris o autoplay só inicia após o primeiro gesto do usuário
    let interactionHandled = false;
    const handleFirstInteraction = () => {
      if (interactionHandled) return;
      interactionHandled = true;
      tryPlay();
      window.removeEventListener('touchstart', handleFirstInteraction);
      window.removeEventListener('pointerdown', handleFirstInteraction);
      window.removeEventListener('click', handleFirstInteraction, true);
    };
    window.addEventListener('touchstart', handleFirstInteraction, { passive: true });
    window.addEventListener('pointerdown', handleFirstInteraction, { passive: true });
    window.addEventListener('click', handleFirstInteraction, true);

    // Reforço agressivo no mobile: tentar tocar repetidamente nos primeiros 10s
    let retryCount = 0;
    const maxRetries = 20; // 20 * 500ms = 10s
    const retryTimer = setInterval(() => {
      tryPlay();
      retryCount += 1;
      if (retryCount >= maxRetries) {
        clearInterval(retryTimer);
      }
    }, 500);

    // Tocar em mais eventos comuns no mobile
    const onPageShow = () => tryPlay();
    const onFocus = () => tryPlay();
    const onOrientationChange = () => tryPlay();
    const onScroll = () => tryPlay();
    window.addEventListener('pageshow', onPageShow);
    window.addEventListener('focus', onFocus);
    window.addEventListener('orientationchange', onOrientationChange);
    window.addEventListener('scroll', onScroll, { passive: true });

    const onVisibilityChange = () => {
      if (!document.hidden) {
        tryPlay();
      }
    };
    document.addEventListener('visibilitychange', onVisibilityChange);
    // Timeout: se após 4s não estiver tocando, mostra fallback animado
    const fallbackTimeout = window.setTimeout(() => {
      if (!isVideoPlaying) {
        setShowVideoFallback(true);
      }
    }, 4000);

    return () => {
      videoElement.removeEventListener('canplay', onCanPlay);
      videoElement.removeEventListener('loadeddata', onLoadedData);
      videoElement.removeEventListener('loadedmetadata', onLoadedMetadata);
      videoElement.removeEventListener('canplaythrough', onCanPlayThrough);
      observer.disconnect();
      window.removeEventListener('touchstart', handleFirstInteraction);
      window.removeEventListener('pointerdown', handleFirstInteraction);
      window.removeEventListener('click', handleFirstInteraction, true);
      clearInterval(retryTimer);
      window.removeEventListener('pageshow', onPageShow);
      window.removeEventListener('focus', onFocus);
      window.removeEventListener('orientationchange', onOrientationChange);
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      window.clearTimeout(fallbackTimeout);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <motion.div
        className={`lg:hidden fixed top-0 left-0 right-0 z-[100] bg-gray-800 shadow-lg ${
          showFixedHeader ? 'block' : 'hidden'
        }`}
        initial={{ opacity: 0, y: -50 }}
        animate={{ 
          opacity: showFixedHeader ? 1 : 0, 
          y: showFixedHeader ? 0 : -50 
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center justify-between px-2 py-2">
          <motion.button
            onClick={toggleMenu}
            className="text-white hover:text-gold-400 transition-colors duration-300 p-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.button>
          
          <div className="flex-1"></div>
          
          {/* Espaçador para equilibrar o layout */}
          <div className="w-10"></div>
        </div>
      </motion.div>

      <div className="relative w-full h-[95vh] lg:h-[100vh] overflow-hidden" data-header-section>
      <div className="absolute inset-0 z-0">
        {/* Fallback animado caso autoplay seja bloqueado (use um .webp/.gif animado) */}
        {showVideoFallback && (
          <img
            src="/videolhc_fallback.webp"
            alt="Fundo animado"
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        <video
          ref={videoRef}
          autoPlay={true}
          muted={true}
          loop
          playsInline={true}
          className="absolute inset-0 w-full h-full object-cover"
          preload="auto"
          crossOrigin="anonymous"
          disableRemotePlayback
          controls={false}
          controlsList="nodownload noplaybackrate noremoteplayback nofullscreen"
          aria-hidden="true"
          x-webkit-airplay="allow"
        >
          <source src="/videolhc.mp4" type="video/mp4" />
          <source src="/videolhc.webm" type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      <motion.div
        className="hidden lg:block absolute bottom-8 right-4 lg:top-4 lg:left-16 lg:bottom-auto lg:right-auto z-50"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <Image
          src="/selo10anos.png"
          alt="10 anos de experiência"
          width={80}
          height={80}
          className="drop-shadow-lg w-24 h-24 lg:w-20 lg:h-20"
        />
      </motion.div>

      <motion.header 
        className="relative z-50 flex items-center justify-center px-6 h-[300px]"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Desktop Navigation - mantém layout original */}
        <motion.nav 
          className="hidden lg:flex space-x-4 mr-2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.a 
            href="/" 
            className="text-white hover:text-gold-400 transition-colors duration-300 font-semibold text-xl px-3 py-2 rounded-lg hover:bg-white hover:bg-opacity-10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Início
          </motion.a>
          <motion.a 
            href="#servicos" 
            className="text-white hover:text-gold-400 transition-colors duration-300 font-semibold text-xl px-3 py-2 rounded-lg hover:bg-white hover:bg-opacity-10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Serviços
          </motion.a>
          <motion.a 
            href="/quem-somos" 
            className="text-white hover:text-gold-400 transition-colors duration-300 font-semibold text-xl px-3 py-2 rounded-lg hover:bg-white hover:bg-opacity-10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Quem Somos
          </motion.a>
          <motion.a 
            href="/parceiros" 
            className="text-white hover:text-gold-400 transition-colors duration-300 font-semibold text-xl px-3 py-2 rounded-lg hover:bg-white hover:bg-opacity-10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Parceiros
          </motion.a>
        </motion.nav>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex-shrink-0 flex items-center justify-center"
        >
          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer"
          >
            <Image
              src="/logo.png"
              alt="Demolidora LHC"
              width={600}
              height={150}
              className="drop-shadow-2xl w-[400px] sm:w-[450px] md:w-[500px] lg:w-[500px] h-auto"
            />
          </motion.a>
        </motion.div>

        <motion.nav 
          className="hidden lg:flex space-x-4 ml-2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.a 
            href="/obras-realizadas" 
            className="text-white hover:text-gold-400 transition-colors duration-300 font-semibold text-xl px-3 py-2 rounded-lg hover:bg-white hover:bg-opacity-10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Obras Realizadas
          </motion.a>
          <motion.a 
            href="/contato" 
            className="text-white hover:text-gold-400 transition-colors duration-300 font-semibold text-xl px-3 py-2 rounded-lg hover:bg-white hover:bg-opacity-10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contato
          </motion.a>
          <motion.a 
            href="#contato" 
            className="text-white hover:text-gold-400 transition-colors duration-300 font-semibold text-xl px-3 py-2 rounded-lg hover:bg-white hover:bg-opacity-10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Orçamento
          </motion.a>
        </motion.nav>

        {/* Mobile Menu Button */}
        <motion.button
          className="lg:hidden absolute top-8 left-4 text-white hover:text-gold-400 transition-colors duration-300 p-2 z-[100]"
          onClick={toggleMenu}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </motion.button>
      </motion.header>

      {/* Mobile Menu - Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="lg:hidden fixed top-0 left-0 right-0 z-[90] bg-white shadow-xl"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Header do menu com botão de fechar */}
            <div className="flex items-center justify-between px-4 py-4 bg-gray-800">
              <span className="text-white font-bold text-lg">Menu</span>
              <motion.button
                onClick={() => setIsMenuOpen(false)}
                className="text-white hover:text-gold-400 transition-colors duration-300 p-2"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>
            </div>
            
            {/* Menu items */}
            <div className="bg-white">
              <nav className="flex flex-col">
                <motion.a 
                  href="/" 
                  className="text-gray-800 hover:text-white hover:bg-gold-400 transition-all duration-300 font-semibold text-lg py-4 px-6 border-b border-gray-100 flex items-center"
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <svg className="w-5 h-5 mr-3 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Início
                </motion.a>
                <motion.a 
                  href="#servicos" 
                  className="text-gray-800 hover:text-white hover:bg-gold-400 transition-all duration-300 font-semibold text-lg py-4 px-6 border-b border-gray-100 flex items-center"
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <svg className="w-5 h-5 mr-3 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                  Serviços
                </motion.a>
                <motion.a 
                  href="/quem-somos" 
                  className="text-gray-800 hover:text-white hover:bg-gold-400 transition-all duration-300 font-semibold text-lg py-4 px-6 border-b border-gray-100 flex items-center"
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <svg className="w-5 h-5 mr-3 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Quem Somos
                </motion.a>
                <motion.a 
                  href="/parceiros" 
                  className="text-gray-800 hover:text-white hover:bg-gold-400 transition-all duration-300 font-semibold text-lg py-4 px-6 border-b border-gray-100 flex items-center"
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35 }}
                >
                  <svg className="w-5 h-5 mr-3 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  Parceiros
                </motion.a>
                <motion.a 
                  href="/obras-realizadas" 
                  className="text-gray-800 hover:text-white hover:bg-gold-400 transition-all duration-300 font-semibold text-lg py-4 px-6 border-b border-gray-100 flex items-center"
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <svg className="w-5 h-5 mr-3 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  Obras Realizadas
                </motion.a>
                <motion.a 
                  href="/contato" 
                  className="text-gray-800 hover:text-white hover:bg-gold-400 transition-all duration-300 font-semibold text-lg py-4 px-6 border-b border-gray-100 flex items-center"
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.55 }}
                >
                  <svg className="w-5 h-5 mr-3 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contato
                </motion.a>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div 
        className="relative z-10 flex flex-col items-center justify-center h-full px-8 text-center pointer-events-none"
        style={{ marginTop: '-180px' }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >

        <motion.div
          className="mt-60 lg:mt-60"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          {/* Selo 10 anos acima do botão, apenas no mobile */}
          <div className="lg:hidden flex justify-center">
            <Image
              src="/selo10anos.png"
              alt="10 anos de experiência"
              width={80}
              height={80}
              className="drop-shadow-lg w-24 h-24"
            />
          </div>
          <motion.a 
            href="#contato"
            className="btn-primary text-xl inline-block pointer-events-auto"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(241, 196, 15, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            SOLICITAR ORÇAMENTO
          </motion.a>
        </motion.div>
      </motion.div>
      </div>
    </>
  );
}