"use client"

import { useEffect,useState } from "react"

export default function BirthdayPage() {
  const [showEnvelope, setShowEnvelope] = useState(true)
  const [envelopeOpening, setEnvelopeOpening] = useState(false)
  const [candlesBlown, setCandlesBlown] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const [selectedFrame, setSelectedFrame] = useState<number | null>(null)
  const [showBalloonPop, setShowBalloonPop] = useState(false)
  const [showMemoryGallery, setShowMemoryGallery] = useState(false)
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
    }, 2000)

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


  // const photoFrames = [
  //   { id: 1, name: "Teman Terbaik", placeholder: "/happy-friend-portrait.png" },
  //   { id: 2, name: "Keluarga", placeholder: "/diverse-family-portrait.png" },
  //   { id: 3, name: "Sahabat", placeholder: "/best-friend-portrait.png" },
  //   { id: 4, name: "Orang Spesial", placeholder: "/special-person-portrait.png" },
  //   { id: 5, name: "Kenangan", placeholder: "/memorable-moment-portrait.png" },
  // ]

  const memoryImages = [
    { id: 1, src: "/happy-childhood-memory.png" },
    { id: 2, src: "/joyful-celebration-moment.png" },
    { id: 3, src: "/fun-adventure-with-friends.png" },
    { id: 4, src: "/loving-family-gathering.png" },
    { id: 5, src: "/achievement-celebration.png" },
    { id: 6, src: "/beautiful-vacation-memory.png" },
    { id: 7, src: "/true-friendship-moment.png" },
    { id: 8, src: "/romantic-special-moment.png" },
    { id: 9, src: "/togetherness-and-unity.png" },
    { id: 10, src: "/sweetest-smile-portrait.png" },
    { id: 11, src: "/festive-party-celebration.png" },
    { id: 12, src: "/dream-come-true-moment.png" },
    { id: 13, src: "/laughter-and-joy.png" },
    { id: 14, src: "/warm-loving-embrace.png" },
    { id: 15, src: "/beautiful-sunset-together.png" },
    { id: 16, src: "/favorite-food-enjoyment.png" },
    { id: 17, src: "/placeholder.svg?height=200&width=200" },
    { id: 18, src: "/placeholder.svg?height=200&width=200" },
    { id: 19, src: "/placeholder.svg?height=200&width=200" },
    { id: 20, src: "/placeholder.svg?height=200&width=200" },
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
          <p className="text-xl text-muted-foreground">Semoga hari spesialmu penuh dengan kebahagiaan dan cinta</p>
        </div>

        {showMemoryGallery ? (
          <div className="memory-gallery animate-fade-in">
            <div className="text-center mb-8">
              <h2 className="text-5xl font-bold text-primary mb-4">📷 Galeri Kenangan Indah 📷</h2>
              <p className="text-xl text-muted-foreground">20 momen berharga yang tak terlupakan</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">
              {memoryImages.map((image, index) => (
                <div
                  key={image.id}
                  className="memory-card group cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-card border-2 border-primary rounded-lg p-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <div className="aspect-square bg-muted rounded overflow-hidden mb-2">
                      <img
                        src={image.src || "/placeholder.svg"}
                        // alt={image.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    {/* <h3 className="text-xs font-semibold text-center text-card-foreground">{image.title}</h3> */}
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

                  {/* GAMBAR KUE */}
                  {/* <div className="cake-layer-2 w-40 h-14 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg mb-2 mx-auto shadow-lg"></div> */}
                  {/* <div className="cake-layer-2 w-32 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg mb-2 mx-auto shadow-lg"></div>
                  <div className="cake-layer-3 w-48 h-16 bg-gradient-to-r from-amber-600 to-yellow-600 rounded-lg mb-2 shadow-lg"></div>
                  <div className="cake-layer-1 w-32 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg mx-auto shadow-lg"></div> */}

                  {/* GAMBAR KUE */}
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

            {/* Photo Frames Gallery */}
            {/* <div className="mb-16">
              <h2 className="text-4xl font-bold text-center text-primary mb-8">📸 Galeri Kenangan Spesial</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {photoFrames.map((frame) => (
                  <div
                    key={frame.id}
                    className="photo-frame group cursor-pointer"
                    onClick={() => setSelectedFrame(selectedFrame === frame.id ? null : frame.id)}
                  >
                    <div className="bg-card border-4 border-primary rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                      <div className="aspect-square bg-muted rounded-lg mb-3 overflow-hidden">
                        <img
                          src={frame.placeholder || "/placeholder.svg"}
                          alt={frame.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="text-center font-semibold text-card-foreground">{frame.name}</h3>
                      {selectedFrame === frame.id && (
                        <div className="mt-2 text-center">
                          <span className="text-sm text-accent animate-pulse">✨ Frame Terpilih ✨</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div> */}

            {/* Birthday Wishes */}
            <div className="text-center bg-card rounded-2xl p-8 shadow-lg">
              <h3 className="text-3xl font-bold text-primary mb-4">🎈 Ucapan Spesial Untukmu 🎈</h3>
              <div className="space-y-4 text-lg text-card-foreground">
                <p className="animate-fade-in">
                  "Semoga di hari ulang tahunmu ini, semua impian dan harapanmu menjadi kenyataan."
                </p>
                <p className="animate-fade-in" style={{ animationDelay: "0.5s" }}>
                  "Setiap tahun yang berlalu membuatmu semakin bersinar dan menginspirasi."
                </p>
                <p className="animate-fade-in" style={{ animationDelay: "1s" }}>
                  "Terima kasih telah menjadi bagian istimewa dalam hidup kami."
                </p>
                <div className="text-2xl font-bold text-accent mt-6 animate-bounce">🎂 Selamat Ulang Tahun! 🎂</div>
              </div>
            </div>
          </>
        )}

        {/* Footer */}
        <div className="text-center mt-12 text-muted-foreground">
          <p>Dibuat dengan ❤️ untuk hari spesialmu</p>
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
