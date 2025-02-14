import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  const [page, setPage] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio("/assets/real_love_bgm.mp3");
    return () => {
      audioRef.current.pause();
      audioRef.current = null;
    };
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <motion.div
      className="container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {page === 1 && (
        <motion.div
          className="card"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="title">Hey Madam Ji, Will You Be My Valentine?</h1>
          <p className="subtitle">Let's go to Japan or Ladakh maybe?</p>
          <div className="buttons">
            <button className="btn btn-primary" onClick={() => setPage(2)}>
              Yes, I'm Curious! 💖
            </button>
            <button className="btn btn-secondary" onClick={toggleMusic}>
              {isPlaying ? "⏸ Pause Music" : "🎵 Play Music"}
            </button>
          </div>
        </motion.div>
      )}

      {page === 2 && (
        <div className="card second-page">
          <h2 className="title">Why Only You?</h2>
          <div className="reasons">
            {[
              {
                icon: "🌞",
                title: "Your Sunday Smile",
                desc: "Makes my day shine",
              },
              {
                icon: "😂",
                title: "Your Humor",
                desc: "Laughs at my bad jokes",
              },
              {
                icon: "🎵",
                title: "Your Sweet Voice",
                desc: "Perfect singing buddy",
              },
              {
                icon: "🥺",
                title: "Your Goodness",
                desc: "Your kind heart melts mine",
              },
              { icon: "✨", title: "Your Eyes", desc: "They speak volumes" },
              {
                icon: "🌟",
                title: "Everything About You",
                desc: "Just perfect as you are",
              },
            ].map((item, index) => (
              <div className="reason" key={index}>
                <span>{item.icon}</span> <strong>{item.title}</strong>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
          <button className="btn btn-secondary" onClick={() => setPage(3)}>
            But Why Me? 🤔
          </button>
        </div>
      )}

      {page === 3 && (
        <div className="card third-page">
          <h2 className="title">Why Me?</h2>
          <div className="grid">
            {[
              {
                icon: "💙",
                title: "I'm your kuchupuchu",
                desc: "Best partner you could have!",
              },
              {
                icon: "🎵",
                title: "My music taste is best",
                desc: "I can sing all your favorite songs",
              },
              {
                icon: "😜",
                title: "I'm never gonna stop irritating you",
                desc: "aja bhidle",
              },
              {
                icon: "💖",
                title: "I Will Take Care of You",
                desc: "Like always",
              },
            ].map((item, index) => (
              <div className="card-item" key={index}>
                <span>{item.icon}</span> <strong>{item.title}</strong>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
          <button className="btn btn-primary" onClick={() => setPage(4)}>
            Let's Make Memories! ✨
          </button>
        </div>
      )}

      {page === 4 && (
        <div className="card fourth-page">
          <h2 className="title">📖 Our Story</h2>
          <div className="story-grid">
            <div className="story-column">
              {[
                {
                  icon: "fas fa-envelope",
                  title: "We Talked",
                  desc: "We started talking and the connection was instant.",
                },
                {
                  icon: "fas fa-star",
                  title: "To be continued...",
                  desc: "Our story is just beginning.",
                },
              ].map((item, index) => (
                <div className="story-box" key={index}>
                  <h3>
                    <i className={item.icon}></i> {item.title}
                  </h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="story-column">
              {[
                {
                  icon: "fas fa-sun",
                  title: "Starting From Here",
                  desc: "You know very well, you texted me.",
                },
                {
                  icon: "fas fa-music",
                  title: "I Enjoyed Talking to You",
                  desc: "You have an amazing music taste, by the way.",
                },
              ].map((item, index) => (
                <div className="story-box" key={index}>
                  <h3>
                    <i className={item.icon}></i> {item.title}
                  </h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <button className="btn btn-secondary" onClick={() => setPage(5)}>
            🎵 I have dedicated some songs for you!
          </button>
        </div>
      )}

      {page === 5 && (
        <motion.div
          className="card fifth-page"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="songs-title">🎵 Songs</h2>
          <div className="songs-grid">
            {[
              {
                title: "Main Koi Aisa Geet Gaon",
                artist: "Shah Rukh Khan",
                link: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/474997362",
              },
              {
                title: "Tum Se Hi",
                artist: "Mohit Chauhan",
                link: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/91492230",
              },
            ].map((song, index) => (
              <div className="song-card" key={index}>
                <h3>{song.title}</h3>
                <p>by {song.artist}</p>
                <iframe
                  title={song.title}
                  width="100%"
                  height="300"
                  scrolling="no"
                  frameBorder="no"
                  allow="autoplay"
                  src={song.link}
                ></iframe>
              </div>
            ))}
          </div>
          <button className="btn btn-secondary">Made with ❤️ For You!</button>
        </motion.div>
      )}
    </motion.div>
  );
}

export default App;
