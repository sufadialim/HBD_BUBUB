"use client"

import { useEffect,useState } from "react"

export default function BirthdayPage() {
  const [showEnvelope, setShowEnvelope] = useState(true)
  const [envelopeOpening, setEnvelopeOpening] = useState(false)
  const [candlesBlown, setCandlesBlown] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const [showBalloonPop, setShowBalloonPop] = useState(false)
  const [showMemoryGallery, setShowMemoryGallery] = useState(false)
  const [unmutedVideo, setUnmutedVideo] = useState<number | null>(null);
  const [hearts, setHearts] = useState<{left:string, top:string, size:string, delay:string}[]>([]);
  const [sparkles, setSparkles] = useState<{ left: string; top: string; delay: string }[]>([]);

    const openEnvelope = () => {
    setEnvelopeOpening(true)
    setTimeout(() => {
      setShowEnvelope(false)
    }, 1500)
  }

  const blowCandles = () => {
    setCandlesBlown(true)
    setShowConfetti(true)
    setTimeout(() => {
      setShowConfetti(false)
      setShowBalloonPop(true)
    },3000)

    setTimeout(() => {
      setShowBalloonPop(false)
      setShowMemoryGallery(true)
    }, 4000)
  }

  const resetCandles = () => {
    setCandlesBlown(false)
    setShowMemoryGallery(false)
    setShowBalloonPop(false)
  }

    useEffect(() => {
    const generated = Array.from({ length: 20 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${15 + Math.random() * 20}px`,
      delay: `${Math.random() * 3}s`,
    }));
    const generatedSparkle = Array.from({length: 15}).map(()=>({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 10}s`,
    }));
    setHearts(generated);
    setSparkles(generatedSparkle);
  }, []);

  const memoryImages = [
    { id: 1, type: "video", src: "/video1.mp4", thumbnail: "/placeholder-logo.png" },
    { id: 2, type: "image", src: "1.jpg" },
    { id: 3, type: "image", src: "/2.jpg" },
    { id: 4, type: "image", src: "/3.jpg" },
    { id: 5, type: "image", src: "/4.jpg" },
    { id: 6, type: "video", src: "/video2.mp4", thumbnail: "/placeholder-logo.png" },
    { id: 7, type: "image", src: "/5.jpg" },
    { id: 8, type: "image", src: "/6.jpg" },
    { id: 9, type: "image", src: "/7.jpg" },
    { id: 10, type: "image", src: "/8.jpg" },
    { id: 11, type: "video", src: "/video3.mp4", thumbnail: "/placeholder-logo.png" },
    { id: 12, type: "image", src: "/9.jpg" },
    { id: 13, type: "image", src: "/10.jpg" },
    { id: 14, type: "image", src: "/11.jpg" },
    { id: 15, type: "image", src: "/12.jpg" },
    { id: 16, type: "video", src: "/video7.mp4", thumbnail: "/placeholder-logo.png" }, 
    { id: 17, type: "image", src: "/13.webp" },
    { id: 18, type: "image", src: "/14.jpg" },
    { id: 19, type: "image", src: "/15.jpg" },
    { id: 20, type: "image", src: "/16.jpg" },
    { id: 21, type: "video", src: "/video5.mp4", thumbnail: "/placeholder-logo.png" }, 
    { id: 22, type: "image", src: "/17.jpg" },
    { id: 23, type: "image", src: "/18.jpg" },
    { id: 24, type: "image", src: "/19.jpeg" },
    { id: 25, type: "image", src: "/20.jpg" },
    { id: 26, type: "video", src: "/video6.mp4", thumbnail: "/placeholder-logo.png" }, 
    { id: 27, type: "image", src: "/21.jpg" },
    { id: 28, type: "image", src: "/22.jpg" },
    { id: 29, type: "image", src: "/23.jpg" },
    { id: 30, type: "image", src: "/24.jpg" },   

  ]

    if (showEnvelope) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-red-50 to-rose-100 flex items-center justify-center relative overflow-hidden">
        {/* Floating Hearts Background */}
        <div className="absolute inset-0 pointer-events-none">
      {hearts.map((h, i) => (
        <div
          key={i}
          className="absolute text-pink-300 animate-pulse"
          style={{
            left: h.left,
            top: h.top,
            fontSize: h.size,
            animationDelay: h.delay,
              }}
            >
              💕
            </div>
          ))}
        </div>

        {/* Love Envelope */}
        <div className="envelope-container relative cursor-pointer" onClick={openEnvelope}>
          <div className={`envelope ${envelopeOpening ? "opening" : ""} relative`}>
            {/* Envelope Body */}
            <div className="envelope-body w-80 h-56 bg-gradient-to-br from-red-400 to-pink-500 rounded-lg shadow-2xl relative overflow-hidden">
              {/* Envelope Pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-4 left-4 text-white text-2xl">💌</div>
                <div className="absolute top-4 right-4 text-white text-2xl">💝</div>
                <div className="absolute bottom-4 left-4 text-white text-2xl">💖</div>
                <div className="absolute bottom-4 right-4 text-white text-2xl">💕</div>
              </div>

              {/* Envelope Seal */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-2xl shadow-lg">
                💝
              </div>

              {/* Letter Inside (visible when opening) */}
              <div
                className={`letter absolute inset-4 bg-cream rounded transform transition-all duration-1500 ${envelopeOpening ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}
              >
                <div className="p-6 text-center">
                  <div className="text-2xl mb-2">💌</div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Untuk Calon istri Tersayang</h3>
                  <p className="text-sm text-gray-600">Ada kejutan spesial menunggumu...</p>
                </div>
              </div>
            </div>

            {/* Envelope Flap */}
            <div
              className={`envelope-flap absolute top-0 left-0 w-80 h-32 bg-gradient-to-br from-red-500 to-pink-600 transform-gpu transition-all duration-1500 ${envelopeOpening ? "rotate-180 -translate-y-8" : ""}`}
              style={{
                clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                transformOrigin: "50% 0%",
              }}
            ></div>
          </div>

          {/* Instruction Text */}
          <div className="text-center mt-8">
            <p className="text-xl font-semibold text-gray-700 mb-2">💕 Amplop Cinta Spesial 💕</p>
            <p className="text-gray-600 animate-bounce">Klik untuk membuka kejutan!</p>
          </div>
        </div>

        {/* Sparkle Effects */}
        <div className="absolute inset-0 pointer-events-none">
      {sparkles.map((s, i) => (
        <div
          key={i}
          className="absolute text-yellow-400 animate-ping"
          style={{
            left: s.left,
            top: s.top,
            animationDelay: s.delay,
            fontSize: "12px",
          }}
        >
              ✨
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 relative overflow-hidden">
      {/* Floating Balloons */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`balloon balloon-1 absolute top-10 left-10 w-8 h-12 bg-red-400 rounded-full animate-bounce ${showBalloonPop ? "balloon-pop" : ""}`}
        ></div>
        <div
          className={`balloon balloon-2 absolute top-20 right-20 w-6 h-10 bg-blue-400 rounded-full animate-bounce ${showBalloonPop ? "balloon-pop" : ""}`}
          style={{ animationDelay: showBalloonPop ? "0.2s" : "0.5s" }}
        ></div>
        <div
          className={`balloon balloon-3 absolute top-32 left-1/4 w-7 h-11 bg-green-400 rounded-full animate-bounce ${showBalloonPop ? "balloon-pop" : ""}`}
          style={{ animationDelay: showBalloonPop ? "0.4s" : "1s" }}
        ></div>
        <div
          className={`balloon balloon-4 absolute top-16 right-1/3 w-5 h-9 bg-purple-400 rounded-full animate-bounce ${showBalloonPop ? "balloon-pop" : ""}`}
          style={{ animationDelay: showBalloonPop ? "0.6s" : "1.5s" }}
        ></div>
      </div>

      {/* Floating Love */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Heart 1 */}
        <div
          className={`heart absolute bottom-10 left-10 text-red-500 text-3xl animate-floatLove`}
        >
          ❤️
        </div>
        {/* Heart 2 */}
        <div
          className={`heart absolute bottom-20 right-20 text-pink-500 text-2xl animate-floatLove`}
          style={{ animationDelay: "0.5s" }}
        >
          💖
        </div>
        {/* Heart 3 */}
        <div
          className={`heart absolute bottom-16 left-1/3 text-rose-400 text-4xl animate-floatLove`}
          style={{ animationDelay: "1s" }}
        >
          💕
        </div>
        {/* Heart 4 */}
        <div
          className={`heart absolute bottom-24 right-1/4 text-red-400 text-3xl animate-floatLove`}
          style={{ animationDelay: "1.5s" }}
        >
          💓
        </div>
      </div>


      {/* Confetti */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-yellow-400 to-red-500 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            />
          ))}
        </div>
      )}

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-primary mb-4 animate-pulse">🎉 Selamat Ulang Tahun! 🎉</h1>
          <p className="text-xl text-muted-foreground">Semoga hari spesialmu penuh dengan kebahagiaan dan cinta ❤️</p>
        </div>

        {showMemoryGallery ? (
          <div className="memory-gallery animate-fade-in">
            <div className="text-center mb-8">
              <h2 className="text-5xl font-bold text-primary mb-4">📷 Galeri Kenangan Indah 📷</h2>
              <p className="text-xl text-muted-foreground">30 momen berharga yang tak terlupakan</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">
        {memoryImages.map((item, index) => (
          <div
            key={item.id}
            className="memory-card group cursor-pointer animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="bg-card border-2 border-primary rounded-lg p-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="aspect-square bg-muted rounded overflow-hidden mb-2 relative">
                {item.type === "video" ? (
                  <div className="relative w-full h-full">
                    <video
                      src={item.src}
                      poster={item.thumbnail || "/placeholder-video.png"}
                      autoPlay
                      loop
                      playsInline
                      muted={unmutedVideo !== item.id} // default muted, kecuali id ini yang dipilih
                      className="w-full h-full object-cover"
                    />
                    <button
                      className="absolute bottom-2 right-2 bg-black/60 text-white rounded-full p-2 text-sm hover:bg-black/80 transition"
                      onClick={() =>
                        setUnmutedVideo(unmutedVideo === item.id ? null : item.id)
                }
              >
                {unmutedVideo === item.id ? "🔇" : "🔊"}
              </button>
                    {/* )} */}
                  </div>
                ) : (
                  <img
                    src={item.src || "/placeholder.svg"}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    alt="gallery"
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

            <div className="text-center">
              <button
                onClick={resetCandles}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                🎂 Kembali ke Kue Ulang Tahun
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* Birthday Cake Section */}
            <div className="flex justify-center mb-16">
              <div className="relative">
                {/* Cake */}
                <div className="cake-container relative">
                  {/* Cake Base */}
                  <div className="cake-layer-2 w-24 h-10 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg mb-2 mx-auto shadow-lg"></div>  {/* Paling kecil (atas) */}
                  <div className="cake-layer-3 w-36 h-14 bg-gradient-to-r from-amber-600 to-yellow-600 rounded-lg mb-2 mx-auto shadow-lg"></div> {/* Sedang (tengah) */}
                  <div className="cake-layer-1 w-48 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg mx-auto shadow-lg"></div>    {/* Paling besar (bawah) */}


                  {/* Candles */}
                  <div className="candles absolute -top-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="candle relative">
                        <div className="w-2 h-8 bg-yellow-200 rounded-sm"></div>
                        {!candlesBlown && (
                          <div className="flame absolute -top-2 left-1/2 transform -translate-x-1/2 w-2 h-3 bg-gradient-to-t from-orange-500 to-yellow-300 rounded-full animate-pulse"></div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Cake Buttons */}
                <div className="text-center mt-8 space-x-4">
                  <button
                    onClick={blowCandles}
                    disabled={candlesBlown}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold transition-all duration-300 disabled:opacity-50"
                  >
                    {candlesBlown ? "🎊 Lilin Padam!" : "💨 Tiup Lilin"}
                  </button>
                  {candlesBlown && (
                    <button
                      onClick={resetCandles}
                      className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                    >
                      🔥 Nyalakan Lagi
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Birthday Wishes */}
            <div className="text-center bg-card rounded-2xl p-8 shadow-lg">
              <h3 className="text-3xl font-bold text-primary mb-4">🎈 Celamat Ulang Tahun Cintacuu 🎈</h3>
              <div className="space-y-4 text-lg text-card-foreground">
                <p className="animate-fade-in">
                  "Semoga di hari ulang tahunmu ini, semua impian dan harapanmu menjadi kenyataan."
                </p>
                <p className="animate-fade-in" style={{ animationDelay: "0.5s" }}>
                  "Teyimakasih banyak udah maw ama aa teyus cayang cintacuu, aa slalu usahain buat cayang cintacu manis"
                </p>
                <p className="animate-fade-in" style={{ animationDelay: "1s" }}>
                  "Selalu berusaha jadi pribadi yang lebih baik nggeh ayang, dan semoga slalu ama aa teyus😊"
                </p>
                <div className="text-2xl font-bold text-accent mt-6 animate-bounce">🎂 Selamat Ulang Tahun Calon Istri Acu! 🎂</div>
              </div>
            </div>
          </>
        )}

        {/* Footer */}
        <div className="text-center mt-12 text-muted-foreground">
          <p>Dibuat dengan penuh ❤️ untuk hari spesial cayangcu manis</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes balloon-pop {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.3); opacity: 0.8; }
          100% { transform: scale(0); opacity: 0; }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
          opacity: 0;
        }
        
        .balloon-pop {
          animation: balloon-pop 0.8s ease-out forwards !important;
        }
        
        .balloon::after {
          content: '';
          position: absolute;
          bottom: -20px;
          left: 50%;
          transform: translateX(-50%);
          width: 1px;
          height: 20px;
          background: #666;
        }
        
        .cake-container:hover {
          transform: scale(1.05);
          transition: transform 0.3s ease;
        }
        
        .photo-frame:hover .bg-card {
          background: var(--accent);
          color: var(--accent-foreground);
        }
        
        .memory-card:hover {
          transform: translateY(-5px);
        }
      `}</style>
    </div>
  )
}
