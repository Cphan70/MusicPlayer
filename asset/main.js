 const $ = document.querySelector.bind(document);
 const $$ = document.querySelectorAll.bind(document);
 
const playlist = $('.playlist');
const heading = $("header h2");
const cdThumb = $(".cd-thumb");
const audio = $("#audio");
const btnPlay = $(".btn-toggle-play");
const btnNext = $(".btn-next");
const btnPrev = $(".btn-prev");
const btnRandom = $(".btn-random");
const btnRepeat = $(".btn-repeat");
const player = $(".player");
const progress = $("#progress");
  const app = {
      currentIndex: 0,
      isPlaying: false,
      isRandom: false,
      isRepeat: false,
      song: [
        {
          name: "Click Pow Get Down",
          singer: "Raftaar x Fortnite",
          path: "https://mp3-s1-m-zmp3.zmdcdn.me/60d2eddd789c91c2c88d/5422260786445610124?authen=exp=1654757881~acl=/60d2eddd789c91c2c88d/*~hmac=7647500b0c513df8aceaf3e7e1f177c7&fs=MTY1NDU4NTA4MTM0Mnx3ZWJWNHwxNC4xNzmUsICdUngMTI3LjU1",
          image: "https://i.ytimg.com/vi/jTLhQf5KJSc/maxresdefault.jpg"
        },
        {
          name: "Tu Phir Se Aana",
          singer: "Raftaar x Salim Merchant x Karma",
          path: "https://mp3-s1-m-zmp3.zmdcdn.me/3bd3a4570816e148b807/2353244868757319482?authen=exp=1654758059~acl=/3bd3a4570816e148b807/*~hmac=447774f4c4aa10953aa04b3ed68f5035&fs=MTY1NDU4NTI1OTmUsIC0Nnx3ZWJWNHwxNC4xOTAdUngOTEdUngOTg",
          image:
            "https://1.bp.blogspot.com/-kX21dGUuTdM/X85ij1SBeEI/AAAAAAAAKK4/feboCtDKkls19cZw3glZWRdJ6J8alCm-gCNcBGAsYHQ/s16000/Tu%2BAana%2BPhir%2BSe%2BRap%2BSong%2BLyrics%2BBy%2BRaftaar.jpg"
        },
        {
          name: "Naachne Ka Shaunq",
          singer: "Raftaar x Brobha V",
          path:
            "https://mp3-s1-m-zmp3.zmdcdn.me/3bd3a4570816e148b807/2353244868757319482?authen=exp=1654758059~acl=/3bd3a4570816e148b807/*~hmac=447774f4c4aa10953aa04b3ed68f5035&fs=MTY1NDU4NTI1OTmUsIC0Nnx3ZWJWNHwxNC4xOTAdUngOTEdUngOTg",
          image: "https://i.ytimg.com/vi/QvswgfLDuPg/maxresdefault.jpg"
        },
        {
          name: "Mantoiyat",
          singer: "Raftaar x Nawazuddin Siddiqui",
          path: "https://mp3-s1-m-zmp3.zmdcdn.me/3bd3a4570816e148b807/2353244868757319482?authen=exp=1654758059~acl=/3bd3a4570816e148b807/*~hmac=447774f4c4aa10953aa04b3ed68f5035&fs=MTY1NDU4NTI1OTmUsIC0Nnx3ZWJWNHwxNC4xOTAdUngOTEdUngOTg",
          image:
            "https://a10.gaanacdn.com/images/song/39/24225939/crop_480x480_1536749130.jpg"
        },
        {
          name: "Aage Chal",
          singer: "Raftaar",
          path: "https://mp3-s1-m-zmp3.zmdcdn.me/3bd3a4570816e148b807/2353244868757319482?authen=exp=1654758059~acl=/3bd3a4570816e148b807/*~hmac=447774f4c4aa10953aa04b3ed68f5035&fs=MTY1NDU4NTI1OTmUsIC0Nnx3ZWJWNHwxNC4xOTAdUngOTEdUngOTg",
          image:
            "https://a10.gaanacdn.com/images/albums/72/3019572/crop_480x480_3019572.jpg"
        },
        {
          name: "Damn",
          singer: "Raftaar x kr$na",
          path:
            "https://mp3-s1-m-zmp3.zmdcdn.me/3bd3a4570816e148b807/2353244868757319482?authen=exp=1654758059~acl=/3bd3a4570816e148b807/*~hmac=447774f4c4aa10953aa04b3ed68f5035&fs=MTY1NDU4NTI1OTmUsIC0Nnx3ZWJWNHwxNC4xOTAdUngOTEdUngOTg",
          image:
            "https://a10.gaanacdn.com/gn_img/albums/YoEWlabzXB/oEWlj5gYKz/size_xxl_1586752323.webp"
        },
        {
          name: "Feeling You",
          singer: "Raftaar x Harjas",
          path: "https://mp3-s1-m-zmp3.zmdcdn.me/3bd3a4570816e148b807/2353244868757319482?authen=exp=1654758059~acl=/3bd3a4570816e148b807/*~hmac=447774f4c4aa10953aa04b3ed68f5035&fs=MTY1NDU4NTI1OTmUsIC0Nnx3ZWJWNHwxNC4xOTAdUngOTEdUngOTg",
          image:
            "https://a10.gaanacdn.com/gn_img/albums/YoEWlabzXB/oEWlj5gYKz/size_xxl_1586752323.webp"
        }
      ],
      render: function() {
          const htmls = this.song.map((song, index) =>{
                return `
                <div class="song ${index === this.currentIndex ? "active" : ""}" data-index="${index}">
                    <div class="thumb" style="background-image: url('${song.image}')">
                    </div>
                    <div class="body">
                        <h3 class="title">${song.name}</h3>
                        <p class="author">${song.singer}</p>
                    </div>
                    <div class="option">
                        <i class="fas fa-ellipsis-h"></i>
                    </div>
                </div>
                `
          })
          playlist.innerHTML = htmls.join("");
      },
      defineProperty: function() {
        Object.defineProperty(this, "currentSong", {
            get: function() {
                return this.song[this.currentIndex];
            }
        })
      },
      handleEvent: function() {
          const _this = this;   
        //   xử lý cd quay dừng

        const cdThumbAnimate = cdThumb.animate([
            {transform: "rotate(360deg)"}
        ],{
            duration: 10000, //  10 seconds
            iterations: Infinity, //chạy bao nhieu lần
        })

        cdThumbAnimate.pause();
        
        //xử lý khi scrollTop  
        document.onscroll = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const cd = $(".cd");
            const cdWidth = cd.offsetWidth;
            const newCdWidth = cdWidth - scrollTop;

            cd.style.width = newCdWidth > 0 ? newCdWidth + "px" : 0; // nếu cdWidth > 0 thì set newCdWidth ngược lại thì set 0
            cd.style.opacity = newCdWidth / cdWidth;
        }

        // xử lý khi play

        btnPlay.onclick = () => {
            if(this.isPlaying){
                audio.pause();
            }else{
                audio.play();
            }
            
        }
        //lắng nghe audio play
        audio.onplay = () => {
            _this.isPlaying = true;
           player.classList .add('playing');
           cdThumbAnimate.play();
        }
        //lắng nghe audio bị pause
        audio.onpause = () => {
           _this.isPlaying = false;
          player.classList .remove('playing');
          cdThumbAnimate.pause();
       }
        // tiến độ bài hát
        audio.ontimeupdate = () => {
            if(audio.duration){
                const progressPercent = Math.floor(audio.currentTime / audio.duration * 100);
                progress.value = progressPercent;
            }
        }
        // xử lý khi tua bài hát
        progress.onchange = (e) => {
            const seekTime = audio.duration / 100 * e.target.value;
            audio.currentTime = seekTime;
        }
        // next song 
        btnNext.onclick = () => {
            if(this.isRandom){
                this.playRandomSong();
            }else{
                _this.nextSong();
            }
            audio.play();
            _this.render();
            _this.scrollActiveSong();
        }

        // prev song 
        btnPrev.onclick = () => {
            if(this.isRandom){
                this.playRandomSong();
            }else{
                _this.prevSong();
            }
            audio.play();
            _this.render();
            _this.scrollActiveSong();
        }
        // click random audio
        btnRandom.onclick = () => {
            _this.isRandom = !_this.isRandom;
            btnRandom.classList.toggle('active');
        }
        // xử lý lặp lại song
        btnRepeat.onclick = () => {
            _this.isRepeat = !_this.isRepeat;
            btnRepeat.classList.toggle('active');
        }
        // next song audio ended

        audio.onended = () => {
            if(_this.isRepeat){
                audio.play();
            }else{
                btnNext.click();
            }
        }  
        // lắng nghe click vào playlist
        playlist.onclick = (e) => {

            const songNode = e.target.closest('.song:not(.active)');
            if(songNode || e.target.closest('.option')){
                // click chuyển bài hát 
                if(songNode) {
                    _this.currentIndex = Number(songNode.dataset.index);
                    _this.loadCurrentSong();
                    _this.render();
                    audio.play();
                 }

                //  xử lý click option
                if(e.target.closest('.option')){

                }
            }
        }
      },
      scrollActiveSong: function (){
        setTimeout(()=> {
            $('.song.active').scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
        },300)
      },
      loadCurrentSong: function() {
        
        heading.textContent = this.currentSong.name;
        cdThumb.style.backgroundImage = `url(${this.currentSong.image})`;
        audio.src = this.currentSong.path;
      },
      nextSong : function() {
        this.currentIndex++;
        if(this.currentIndex >= this.song.length){
            this.currentIndex = 0;
        }

        this.loadCurrentSong();
      },
      prevSong : function() {
        this.currentIndex--;
        if(this.currentIndex < 0){
            this.currentIndex = this.song.length - 1;
        }

        this.loadCurrentSong();
      },
      playRandomSong : function() {
        let newIndex ;
        do {
            newIndex  = Math.floor(Math.random() * this.song.length)
        }while(newIndex === this.currentIndex)
        
        this.currentIndex = newIndex;
        this.loadCurrentSong();
      },
      start: function() {
        // định nghĩa cho các thuộc tính của object
        this.defineProperty();
        //xử lý các sự kiện của Dom event
        this.handleEvent();

        // load bài hát đàu tiên khi ứng dụng chạy 
        this.loadCurrentSong();

        // this.nextSong();

        //tải danh sách bài hát
        this.render();
      }
  }

  app.start();