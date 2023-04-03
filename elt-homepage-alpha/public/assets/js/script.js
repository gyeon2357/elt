// LocomotiveScroll

// var scroller = new LocomotiveScroll({
//   el: document.querySelector('[data-scroll-container]'),
//   smooth: true,
//   getSpeed: true,
//   getDirection: true
// })

// gsap.registerPlugin(ScrollTrigger)

// scroller.on('scroll', ScrollTrigger.update)

// ScrollTrigger.scrollerProxy('.container', {
//   scrollTop(value) {
//     return arguments.length ? scroller.scrollTo(value, 0, 0) : scroller.scroll.instance.scroll.y
//   },
//   getBoundingClientRect() {
//     return {
//       left: 0,
//       top: 0,
//       width: window.innerWidth,
//       height: window.innerHeight
//     }
//   }
// })

// ScrollTrigger.create({
//   trigger: '.media-wrapper',
//   scroller: '.container',
//   start: 'top+=30% 50%',
//   end: 'bottom-=40% 50%',
//   animation: gsap.to('.media-wrapper', { backgroundSize: '120%' }),
//   scrub: 2
//   // markers: true
// })

// ScrollTrigger.addEventListener('refresh', () => scroller.update())
// ScrollTrigger.refresh()

//threejs

// @https://tympanus.net/codrops/2019/10/21/how-to-create-motion-hover-effects-with-image-distortions-using-three-js/

class moveShowImgEffect {
  constructor({ img1, img2, noise, parent, strength, amount = 1, duration = 0.5 }) {
    this.parent = parent
    this.img1 = img1
    // this.noise = noise;
    this.strength = strength
    this.amount = amount
    this.easing = Power4.easeOut
    this.vertext = `
      varying vec2 vUv;
      
      uniform vec2 u_offset;

      #define PI 3.1415926535897932384626433832795


      vec3 deformationCurve (vec3 position, vec2 uv, vec2 offset) {
        position.x +=  (sin(uv.y * PI) * offset.x);
        position.y += (sin(uv.x * PI) * offset.y);

        return position;
      }

      void main () {
        vUv = uv;

        vec3 newPosition = deformationCurve(position, uv, u_offset);

        gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
      }
    `

    this.fragment = `
      varying vec2 vUv;

      uniform sampler2D u_texture1;

      uniform float u_alpha;
      uniform vec2 u_offset;


      vec3 rgbShift (sampler2D texture, vec2 uv, vec2 offset) {
        vec3 texture1 = texture2D(texture, uv).rgb;
        float r = texture2D(texture, uv + offset).r;
        return vec3(r, texture1.gb);
      }

      void main () {

        vec2 uv = vUv;
        // vec4 color = vec4(0.1255, 0.6588, 0.3922, 1.0);
        // vec3 color = texture2D(u_texture1, uv).rgb;
        vec3 color = rgbShift(u_texture1, uv, u_offset);
        gl_FragColor = vec4(color, u_alpha);
      }
    `
    this.duration = duration
    this.isMouseOver = false
    this.mouse = {}

    this.init()
  }

  init() {
    let offsetWidth = this.parent.offsetWidth
    let offsetHeight = this.parent.offsetHeight

    this.scene = new THREE.Scene()

    this.camera = new THREE.PerspectiveCamera(45, offsetWidth / offsetHeight, 1, 1000)
    this.camera.position.z = 2

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true
    })

    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.renderer.setClearColor(0xffffff, 0)
    this.renderer.setSize(offsetWidth, offsetHeight)
    this.parent.appendChild(this.renderer.domElement)

    this.uniforms = {
      u_texture1: {
        type: 't',
        value: null
      },

      u_alpha: {
        type: 'f',
        value: 0
      },

      u_offset: new THREE.Uniform(new THREE.Vector2(0, 0))
    }

    this.position = new THREE.Vector3(0, 0, 0)

    this.createObject().then(() => {
      this.addEvent()
      this.render()
    })
  }

  async createObject() {
    let texture = await this.createTexture({ src: this.img1 })
    this.uniforms.u_texture1.value = texture

    let imageRatio = texture.image.naturalWidth / texture.image.naturalHeight
    this.mesh = await this.createMesh()
    let scale = new THREE.Vector3(imageRatio, 1, 1.6)
    this.mesh.scale.copy(scale)

    this.trails = []
    for (let i = 0; i < this.amount; i++) {
      let mesh = this.mesh.clone()
      this.trails.push(mesh)
      this.scene.add(mesh)
    }
  }

  createTexture({ src }) {
    return new Promise((resolve, reject) => {
      let loader = new THREE.TextureLoader()
      loader.load(
        src,
        (texture) => {
          resolve(texture)
        },
        (progress) => {
          // ..
        },
        (error) => {
          reject(error)
        }
      )
    })
  }
  createTexture1({ src, wrap, filter }) {
    let loader = new THREE.TextureLoader()
    loader.crossOrigin = '*'

    let texture = loader.load(src)
    if (wrap) {
      texture.wrapS = texture.wrapT = wrap
    }

    return texture
  }

  createGeometry() {
    let geometry = new THREE.PlaneBufferGeometry(1, 1, 30, 30)

    return geometry
  }

  createMaterial() {
    let material = new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      vertexShader: this.vertext,
      fragmentShader: this.fragment,
      transparent: true
    })

    return material
  }

  createMesh() {
    let geometry = this.createGeometry()
    let material = this.createMaterial()

    let mesh = new THREE.Mesh(geometry, material)

    return mesh
  }

  addEvent() {
    this.parent.addEventListener('mousemove', this.moveHandler.bind(this), false)
    this.parent.children[0].addEventListener('mouseleave', this.leaveHandler.bind(this), false)
    this.parent.children[0].addEventListener('mouseover', this.overHandler.bind(this), false)
  }

  moveHandler(ev) {
    const { clientX, clientY } = ev
    this.bounding = this.parent.getBoundingClientRect()

    this.mouse.x = ((clientX - this.bounding.x) / this.parent.offsetWidth) * 2 - 1
    this.mouse.y = -((clientY - this.bounding.y) / this.parent.offsetHeight) * 2 + 1

    let x = this.mouse.x
    let y = this.mouse.y

    TweenLite.to(this.position, 1, {
      x: x,
      y: y,
      ease: this.easing,
      onUpdate: this.positionUpdateHandler.bind(this, x, y)
    })

    this.trails.forEach((trail, index) => {
      let duration = this.duration * this.amount - this.duration * index
      TweenLite.to(trail.position, duration, {
        x: x,
        y: y,
        ease: this.easing
      })
    })
  }

  positionUpdateHandler(x, y) {
    let offset = this.position
      .clone()
      .sub(new THREE.Vector3(x, y, 0))
      .multiplyScalar(-this.strength)
    this.uniforms.u_offset.value = offset
  }

  overHandler() {
    this.isMouseOver = true
    TweenLite.to(this.uniforms.u_alpha, 0.5, {
      value: 1,
      ease: this.easing
    })
  }

  leaveHandler() {
    this.isMouseOver = false
    TweenLite.to(this.uniforms.u_alpha, 0.5, {
      value: 0,
      ease: this.easing
    })
  }

  render() {
    requestAnimationFrame(this.render.bind(this))
    this.renderer.render(this.scene, this.camera)
  }
}

let moveEffect1 = new moveShowImgEffect({
  img1: 'assets/img/elt-bg-bk.jpg',
  strength: 0.35,
  parent: document.querySelector('.title-effect-1')
})

let moveEffect2 = new moveShowImgEffect({
  img1: 'assets/img/elt-bg-bk.jpg',
  strength: 0.25,
  duration: 0.5,
  amount: 5,
  parent: document.querySelector('.title-effect-2')
})
