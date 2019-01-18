const fakeSpan       = document.createElement('span'),
      fakeInput      = document.createElement('div');
let   timer          = null,
      closeEyesTimer = null;

const InputWithLabel = ({...rest}) => (
 <div>
  <input {...rest}/>
 </div>
);

const LoginButton = ({children, onClick}) => (
 <div>
  <button className='login-btn' onClick={onClick}>
   {children}
  </button>
 </div>
);

class SvgContent extends React.Component{
 constructor(props){
  super(props);
 }  
 render(){
  return(
 <section className='svg-wrap'>
  <svg id='buzzLightyear' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg' ref={(ref) => { this.buzz = ref; }}>
   <g className='helmet-wrap'>
    <circle cx='100' cy='98' r='60.5' fill='#000' fillOpacity='0.15' stroke='#363636' strokeWidth='2' />
    <circle cx='100' cy='98' r='64.5' fill='none' stroke='#666666' strokeWidth='2' />
   </g>
   <g className='arm-wrap'>
    <path d='M 10.7,132 L 5,152 L 5,165 L 20,165 L 10.7,132' fill='#666666' />
    <path d='M 189,132 L 195,152 L 195,165 L 175,165 L 189,132' fill='#666666' />
   </g>          
   <g className='body-top-green-wrap'>
    <polygon points='70,84, 130,84, 145,95 145,155 130,166 70,166 55,154 55,94' fill='#67ea4b' stroke='#000' strokeWidth='2' />
    <path d='M 71,88 L 71,100.5 L 60,100.5 L 71,88' fill='#000' fillOpacity='0.5' />
    <path d='M 128,88 L 128,100.5 L 141,100.5 L 128,88' fill='#000' fillOpacity='0.5' />
   </g>
   <g className='body-back-purple-wrap'>
    <rect x='28' y='107' rx='4' width='20' height='50' fill='#783ea0' stroke='#000' strokeWidth='2' />
    <rect x='151' y='107' rx='4' width='20' height='50' fill='#783ea0' stroke='#000' strokeWidth='2' />
   </g>
   <g className='body-mid-green-wrap'>
    <polygon points='32,112 168,112 190,130 168,210 32,210 10,130' fill='#67ea4b' stroke='#000' strokeWidth='2' />
    <path d='M 30,123 C 55,210 28,123 30,123' fill='#fff' />
    <path d='M 175,143 C 140,210 184,123 175,143' fill='#fff' />
   </g>
   <g className='body-darkgray-wrap'>
    <rect x='45' y='100.2' width='110' height='20' rx='2' fill='#666666' />
    <rect x='45' y='105' width='110' height='2' fill='#000' fillOpacity='0.3' />
   </g>
   <g className='body-gray-wrap'>
    <path d='M 75,152 L 80,160 L 120,160 L 125,152 L 75,152' fill='#fff' />
    <ellipse cx='100' cy='130' rx='60' ry='25' fill='#999999' />
    <path d='M 47.5,125 L 47.5,102 C 44.1,99 40.1,102 40.1,102 L 40.1,130' fill='#999999' />
    <path d='M 152.5,125 L 152.5,102 C 156.1,99 160.1,102 160.1,102 L 160.1,130' fill='#999999' />
    <path d='M 40.6,123 L 40.6,105 C 37.4,101 33.4,105 33.4,105 L 33.4,123 C 37.4,127 40.6,123 40.6,123' fill='#666666' />
    <path d='M 159.4,123 L 159.4,105 C 162,101 167.1,105 166.1,105 L 166.1,123 C 162,127 159.4,123 159.4,123' fill='#666666' />
    <path d='M 49,142 C 50,142 50,148 75,150 C 65,152 55,147 49,142' fill='#000' fillOpacity='0.6' />
    <path d='M 153,140 C 150,142 150,143 140,147 C 150,142 150,141 153,140' fill='#000' fillOpacity='0.7' />
   </g>
   <g className='neck-wrap'>
    <ellipse cx='100' cy='126' rx='53' ry='22' fill='#67ea4b' />
    <ellipse cx='100' cy='124' rx='48' ry='17' fill='#783ea0' />
    <path d='M 70,138 L 77,136 L 81,141' fill='#67ea4b' />
    <path d='M 125,140 L 135,137 L 127,135.5' fill='#67ea4b' />
    <ellipse cx='100' cy='122' rx='45' ry='14' fill='#000' fillOpacity='0.8' />
    <path d='M 75,120 V 75,133.8 C 80,134 95,141 124,133.8 V 75,120' fill='#673265' />
    <path d='M 49,130 C 50,130 50,137 70,143 C 65,140 55,137 49,130' fill='#000' fillOpacity='0.4' />
    <path d='M 150,132 C 150,132 150,138 120,145 C 130,145 150,137 150,132' fill='#000' fillOpacity='0.4' />
   </g>
   <circle cx='100' cy='70' r='29.1' fill='#783ea0' />
   <g className='earlt-wrap'>
    <path d='M 72,69 C 68,65 58,80 72,87' fill='#783ea0' />
   </g>
   <g className='earrt-wrap'>
    <path d='M 128,69 C 133,65 141,80 128,87' fill='#783ea0' />
   </g>          
   <g className='skin-wrap'>
    <circle cx='100' cy='70' r='25.5' fill='#eacca8' />
    <path d='M 70.8,70 L 70,115 q -1 10 8 8 l 46,0.3' fill='#783ea0' />
    <path d='M 129,70 L 130,115 q -1 10 -8 8 l -46,0.3' fill='#783ea0' />          
    <path d='M 74.7,65 L 73,104 q -1 10 4 9 l 38,0' fill='#eacca8' />
    <path d='M 125.5,65 L 127,104 q 1 10 -4 9 l -38,0' fill='#eacca8' />
   </g>
   <g className='eyeslt-base'>
    <circle cx='87' cy='70' r='8' fill='#fff' />
   </g>
   <g className='eyesrt-base'>
    <circle cx='113' cy='71' r='8' fill='#fff' />
   </g>
   <g className='eyes-lt'>
    <circle cx='87' cy='71' r='3' fill='#000' />
    <circle cx='87' cy='71' r='2.4' fill='skyblue' fillOpacity='0.8' />
    <circle cx='87' cy='71' r='1.8' fill='#000' />
    <circle cx='87.5' cy='70.7' r='0.3' fill='#fff' fillOpacity='0.6' />
   </g>
   <g className='eyes-rt'>
    <circle cx='113' cy='71' r='3' fill='#000' />
    <circle cx='113' cy='71' r='2.4' fill='skyblue' fillOpacity='0.8' />
    <circle cx='113' cy='71' r='1.8' fill='#000' />
    <circle cx='113.5' cy='70.7' r='0.3' fill='#fff' fillOpacity='0.6' />
   </g>
   <g className='eyes-skin' id='eyesSkin' ref={(ref) => { this.eyesSkin = ref; }}>
    <path d='M 75,67 C 75,53 83,64 99,60 C 80,60 72,50 75,67' fill='#493326' data-index='0' />
    <path d='M 124,67 C 125,53 120,55 103,60 C 104,60 133,40 124,67' fill='#493326' data-index='1' />
    <path d='M 78.8,69 C 79,59.5 94,59.5 95.2,69 C 87,67.2 87,67.2 78.8,69' fill='#e2c198' data-index='2' />
    <path d='M 78.8,69 C 82,66.5 92,66.5 95.2,69 C 87,67.2 87,67.2 78.8,69' fill='#000' fillOpacity='0.3' data-index='3' />
    <path d='M 104.8,69 C 107,59.5 119,59.5 121.2,69 C 113,67.2 113,67.2 104.8,69' fill='#e2c198' data-index='4' />
    <path d='M 104.8,69 C 110,66.5 117,66.5 121.2,69 C 113,67.2 113,67.2 104.8,69' fill='#000' fillOpacity='0.3' data-index='5' />
   </g>    
   <g className='nose-wrap' fillOpacity='1' >
    <path d='M 95,80 L 105,80 C 103,86 97,86 95,80' fill='#493326' />
   </g>
   <g className='lip-wrap'>
    <path d='M 85,90 C 104,93 97,93 115,90 C 110,103 90,103 85,90' fill='#493326' />
    <path d='M 86,91 C 104,94 97,94 114,91 C 110,101 90,101 86,91' fill='#fff' />
    <path d='M 83.5,91.5 C 88,89 87,89 87,89 C 85,90.3 82.7,90 83.5,91.5' fill='#493326' />
    <path d='M 117.5,92.5 C 112,89 113,89 113,89 C 115,90.3 117.9,90 117.5,92.5' fill='#493326' />
   </g>
   <g className='lip-btm-wrap'>
    <path d='M 100,108 C 102,108 102,104.5 100,104 C 96.9,104 98,108.5 100,107 C 101,103 98,108.5 99,105' fill='none' stroke='#493326' 
      strokeWidth='0.4' strokeLinejoin='round' />
   </g>
   <g className='body-btn-wrap'>
    <ellipse cx='55' cy='180' rx='7' ry='3.5' fill='#000' fillOpacity='0.8' transform='rotate(70, 55, 180)' />
    <ellipse cx='55' cy='180' rx='5' ry='2.5' fill='#1d74b7' transform='rotate(70, 55, 180)' />
    <circle cx='54.5' cy='177' r='0.7' fill='#fff' />
    <ellipse cx='65' cy='181' rx='6' ry='3.5' fill='#000' fillOpacity='0.8' transform='rotate(70, 65, 181 )' />
    <ellipse cx='65' cy='181' rx='4.5' ry='2.5' fill='#006c35' transform='rotate(70, 65, 181)' />
    <circle cx='64.5' cy='178' r='0.7' fill='#fff' />
    <ellipse cx='75' cy='182' rx='5.5' ry='3.5' fill='#000' fillOpacity='0.8' transform='rotate(70, 75, 182)' />
    <ellipse cx='75' cy='182' rx='4' ry='2.5' fill='#dd2324' transform='rotate(70, 75, 182)' />
    <circle cx='74.5' cy='179.5' r='0.7' fill='#fff' />
    <circle cx='135' cy='180' r='7' fill='#000' fillOpacity='0.8' />
    <circle cx='135' cy='180' r='6.2' fill='#dd2324' />
    <circle cx='137' cy='176' r='0.7' fill='#fff' />
   </g>
   <g className='body-text-wrap'>
    <rect x='80' y='160' width='40' height='6' fill='#34a7dd' />
    <text className='body-text' x='85' y='164.5' fill='#000'>SPACE RANGER</text>          
    <rect x='116' y='172' width='28' height='5' rx='2' fill='#ffe80b' transform='rotate(-20, 116, 172)' />
    <text className='body-text' x="120" y="174.5" fill="#000" transform='rotate(-20, 120, 174.5)'>LIGHTYEAR</text>
   </g>
  </svg>
 </section>
    );
  }
}

class Login extends React.Component{
 constructor(props){
  super(props);
  this.state = { flag : false }
 }
  
 componentDidMount(){
  fakeInput.appendChild(fakeSpan);
 }
 
 handleChange = (e) => {
  
 }
  
 handleKeyDownLook = (e) => {
  const buzzLightyear = 
        ReactDOM.findDOMNode(this.refs.buzz),
        inputType     = e.target.name,
        el            = e.target,
        text          = el.value.substr(0, el.selectionStart);
    
  this.setState({ flag:true });
  fakeSpan.innerText = text || '.';

  const buzzLightyearRect = 
        buzzLightyear.getBoundingClientRect(),
        inputRect         = 
        el.getBoundingClientRect(),
        caretRect         = 
        fakeSpan.getBoundingClientRect(),
        caretPos          = 
        caretRect.left + 
        Math.min(caretRect.width, 
                 inputRect.width) * !!text,
        distCaret         = 
        buzzLightyearRect.left + 
        buzzLightyearRect.width/2 - 
        inputRect.left - 
        caretPos,
        distInput         = 
        buzzLightyearRect.top + 
        buzzLightyearRect.height/2 - 
        inputRect.top,
        y                 = 
        Math.atan2(-distCaret, 
                   Math.abs(distInput) * 7),
        x                 = 
        Math.atan2(distInput, 
                   Math.abs(distInput) * 7 / 
                   Math.cos(y)),
        angle             = 
        Math.max(Math.abs(x), Math.abs(y));

  this.handleBuzzRotate(el, 
                  x/angle, 
                  y/angle, 
                  y/angle/2, 
                  angle);
  this.eyesAni(this.state.flag, inputType);
 }

 handleFocus = (e) => {
  e.target.classList.add('focused');
  this.inputHiddenStyles(e.target);
  e.target.type == 'password' ? 
    this.closeEyes(e) : this.handleKeyDownLook(e);
 }

 handleKeyUpReset = (e) => {
  const buzzLightyear = 
        ReactDOM.findDOMNode(this.refs.buzz),
        el            = e.target,
        inputType     = e.target.name;
    
   el.classList.remove('focused');

   clearTimeout(timer);
   timer = setTimeout(() => {
    this.setState({ flag:false });
    this.handleBuzzRotate(e, 0, 0, 0, 0);
    this.eyesAni(this.state.flag, inputType);
   }, 1);
 }
  
 handleBuzzRotate = (el, x, y, z, rad) => {
  let   elName = el.name,
        value  = 
      `rotate3d(${x}, ${y}, ${z}, ${rad}rad)`;
  const helmet = 
        document.querySelector('.helmet-wrap'); 
  const face   = 
        document.querySelectorAll(
          '.eyes-lt, .eyes-rt');

  for(let i=0; i < face.length; i++){ 
    face[i].style.transform = value; }
  }

 inputHiddenStyles = (e) => {
  const loginForm = 
        document.querySelector('.login-form');

  if(fakeInput.parentNode === document.body){
   document.body.removeChild(fakeInput);
  }

  fakeInput.style.visibility = 'hidden';
  fakeInput.style.position   = 'absolute';
  fakeInput.style.top        = 
    Math.min(e.offsetHeight * -2, -999) + 'px';

  document.body.appendChild(fakeInput);
 }

 closeEyes = (e) => {
  const el            = e.target,
        buzzLightyear = 
        ReactDOM.findDOMNode(this.refs.buzz),
        inputType     = e.target.name;

   clearTimeout(closeEyesTimer);
   closeEyesTimer = setTimeout(() => {
    this.setState({ flag:true });
    this.eyesAni(this.state.flag, inputType);
   }, 1);
 }
 eyesAni = (flag, type) => {
  let   eyesSkinBase     = null,
        eyesDoubleEyelid = null,
        num              = null;
  const eyesSkin         = ReactDOM.findDOMNode(this.refs.eyesSkin),
        eyesSkinChildren = eyesSkin.childNodes;

  if(flag){
   if(eyesSkin.hasChildNodes()){
    for(var i = 0; 
        i < eyesSkinChildren.length; 
        i++){
     num = 
      parseInt(eyesSkinChildren[i].dataset.index);

     switch(num){
      case 0 :
       eyesSkinChildren[i].classList.add(
         'eyebrow-lt');
       eyesSkinBase = 
         document.querySelector('.eyebrow-lt');
       break;
      case 1 :
       eyesSkinChildren[i].classList.add(
         'eyebrow-rt');
       eyesDoubleEyelid = 
         document.querySelector('.eyebrow-rt');
       break;
      case 2 :
       type === 'email' ? eyesSkinChildren[i].classList.add('eyes-skin-base-open-lt') : 
       eyesSkinChildren[i].classList.add('eyes-skin-base-close-lt');
       break;
      case 3 :
       type === 'email' ? eyesSkinChildren[i].classList.add('eyes-double-eyelid-open-lt') : 
       eyesSkinChildren[i].classList.add('eyes-double-eyelid-close-lt');
       break;
      case 4 :
       type === 'email' ? eyesSkinChildren[i].classList.add('eyes-skin-base-open-rt') : 
       eyesSkinChildren[i].classList.add('eyes-skin-base-close-rt');
       break;
      case 5 :
       type === 'email' ? eyesSkinChildren[i].classList.add('eyes-double-eyelid-open-rt') : 
       eyesSkinChildren[i].classList.add('eyes-double-eyelid-close-rt');
       break;
      default :
       console.log('default');
       break;
     }
    }
   }
  }
  else if(!flag){
   if(eyesSkin.hasChildNodes()){
    for(var i = 0; 
        i < eyesSkinChildren.length; 
        i++){
     eyesSkinChildren[i].classList.remove(
       'eyebrow-lt', 
       'eyebrow-rt', 
       'eyes-skin-base-open-lt', 
       'eyes-skin-base-close-lt', 
       'eyes-double-eyelid-open-lt', 
       'eyes-double-eyelid-close-lt', 
       'eyes-skin-base-open-rt', 
       'eyes-skin-base-close-rt', 
       'eyes-double-eyelid-open-rt', 
       'eyes-double-eyelid-close-rt'
     );
    }
   }
  }
 }
 
 loginAlert = () => {
  alert('OK!!');
 }  
 
 render(){
  const { 
    handleChange, 
    handleKeyDownLook, 
    handleFocus, 
    handleKeyUpReset,
    closeEyes,
    loginAlert
  } = this;
   return(
    <div className='login-wrap'>
     <SvgContent ref={(ref) => { this.refs = ref; }} />
     <section className='login-form'>
      <InputWithLabel 
       name='email' 
       placeholder='아이디 또는 이메일'
       type='text'
       onClick={handleKeyDownLook} 
       onKeyDown={handleKeyDownLook} 
       onFocus={handleFocus}
       onBlur={handleKeyUpReset}
       autoComplete="off" />
      <InputWithLabel 
       name='email' 
       className='email' 
       type='hidden' />
      <InputWithLabel 
       name='password' 
       placeholder='비밀번호' 
       type='password' 
       onFocus={closeEyes} 
       onBlur={handleKeyUpReset} />
      <LoginButton 
       onClick={loginAlert}>
       LOGIN
      </LoginButton>
       <p>The character copyright is in
         <strong> pixar(픽사)</strong>.
         <br/>Please use it for learning.</p>
     </section>
    </div>
   );
 }
}

ReactDOM.render(<Login/>, document.getElementById('root'));