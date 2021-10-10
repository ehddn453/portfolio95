var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  console.log(swiper)

const elStart = document.querySelector('.main1_start_bg'),
      elMain1 = document.querySelector('.main1'),
      elMain1Back = document.querySelector('.main1_back'),
      elMain1Text = document.querySelector('.main1_text1'),
      elMain1Text2 = document.querySelector('.main1_text2');

//페이지 로드 시 화면 움직임
window.onload = function(){
    setTimeout(function(){
        elStart.classList.add('active');
    },1000);
    setTimeout(function(){
        elStart.classList.add('opacity');
    },3000);
    setTimeout(function(){
        elStart.classList.add('scale');
    },4000);
    setTimeout(function(){
        elStart.classList.add('remove');
        elMain1.classList.add('active');
    },5000);
    setTimeout(function(){
        elMain1Back.classList.add('active');
    },5100);
};

//마우스 스크롤 시 메인 텍스트 사라짐
window.addEventListener('scroll',function(){
    if(10<window.scrollY){
        elMain1Text.style.opacity = '0';
    }else{
        elMain1Text.style.opacity = '1';
    };
});


const elMain2 = document.querySelector('.main2'),
      elMainFix = document.querySelector('.main2_fixed'),
      elMain2Img1 = document.querySelector('.main2_imgAll li:nth-of-type(1)'),
      elMain2Img2 = document.querySelector('.main2_imgAll li:nth-of-type(2)'),
      elMain2Li1 = document.querySelector('.main2_title li:nth-of-type(1)'),
      elMain2Li2 = document.querySelector('.main2_title li:nth-of-type(2)'),
      elMain2Li3 = document.querySelector('.main2_title li:nth-of-type(3)');

window.addEventListener('scroll',function(){

    //main2 글씨들 마우스 움직일때 좌우 움직임
    let main2Scroll = (elMain2.offsetTop - window.innerHeight) <= window.scrollY;
    let idx = elMain2.offsetTop - this.scrollY;
    if(main2Scroll){
        elMain2Li1.style.transform = `translate(${-idx}px,0)`;
        elMain2Li2.style.transform = `translate(${-idx}px,0)`;
        elMain2Li3.style.transform = `translate(${idx}px,0)`;
        //GLOBAL
        if(idx<=-30){
            elMain2Li1.style.transform = `translate(10%,0)`;
        }
        //HUMAN
        if(idx<=0){
            elMain2Li2.style.transform = `translate(0)`;
        }
        //ICONIC
        if(idx<30){
            elMain2Li3.style.transform = `translate(10%,0)`;
        }
    }
   
    //main2 들어갈 시 fixed되서 사진이 위로 지나감
    let main2Top = elMain2.offsetTop - window.innerHeight <= window.scrollY - 650;
    if(main2Top == true){
        elMainFix.classList.add('fixed');
    }else{
        elMainFix.classList.remove('fixed');
    };

    //스크롤 시 사진 위 배경색 없어짐
    let main2Img1Top = elMain2Img1.offsetTop - window.innerHeight <= window.scrollY - 1000;
    let main2Img2Top = elMain2Img2.offsetTop - window.innerHeight <= window.scrollY - 400;
    if(main2Img1Top == true){
        elMain2Img1.classList.add('active');
    }else{
        elMain2Img1.classList.remove('active');
    };
    if(main2Img2Top == true){
        elMain2Img2.classList.add('active');
    }else{
        elMain2Img2.classList.remove('active');
    };
});

const elMain3 = document.querySelector('.main3');

window.addEventListener('scroll',function(){
    //main3 시작하면 main2사라짐
    let elMain2Bottom = elMain3.offsetTop - window.innerHeight <= window.scrollY + 50;
    if(elMain2Bottom == true){
        elMainFix.classList.add('under');
    }else{
        elMainFix.classList.remove('under');
    };

    //main3시작하면 배경 검정색으로
    let elMain3Top = elMain3.offsetTop - window.innerHeight <= window.scrollY;
    if(elMain3Top == true){
        elMain3.style.background = '#000';
        elMain2.style.background = '#000';
        //header color #fff
        elHeader.classList.add('white');
    }else{
        elMain3.style.background = '';
        elMain2.style.background = '';
        //header color #fff
        elHeader.classList.remove('white');
    };
});

const main3Img1 = document.querySelector('.forest figure'),
      main3Img2 = document.querySelector('.garden figure');

window.addEventListener('scroll',function(){
    //main3 이미지 위에 배경색 없애기!
    let elMain3Img1Top = main3Img1.offsetTop - window.innerHeight <= window.scrollY - 100;
    let elMain3Img2Top = main3Img2.offsetTop - window.innerHeight <= window.scrollY - 100;
    if(elMain3Img1Top == true){
        main3Img1.classList.add('active');
    }else{
        main3Img1.classList.remove('active');
    };
    if(elMain3Img2Top == true){
        main3Img2.classList.add('active');
    }else{
        main3Img2.classList.remove('active');
    };
});

// main3 텍스트 나타내기
const elMain3Txt = document.querySelector('.main3_text'),
      elMain3For = document.querySelector('.forest_title'),
      elMain3Gar = document.querySelector('.garden_title'),
      elMain3Space = document.querySelector('.space_text');

window.addEventListener('scroll',function(){
    let elMain3TxtTop = elMain3Txt.offsetTop - window.innerHeight <= window.scrollY
    if(elMain3TxtTop == true){
        elMain3Txt.classList.add('active');
    }else{
        elMain3Txt.classList.remove('active');
    }
//---------forest-title----나타내기----
    let elMain3ForTop = elMain3For.offsetTop - window.innerHeight <= window.scrollY
    if(elMain3ForTop == true){
        elMain3For.classList.add('active');
    }else{
        elMain3For.classList.remove('active');
    }
//---------garden-title----나타내기
    let elMain3GarTop = elMain3Gar.offsetTop - window.innerHeight <= window.scrollY
    if(elMain3GarTop == true){
        elMain3Gar.classList.add('active');
    }else{
        elMain3Gar.classList.remove('active');
    }
//---------space-title----나타내기
    let elMain3SpaceTop = elMain3Space.offsetTop - window.innerHeight <= window.scrollY - 200
    if(elMain3SpaceTop == true){
        elMain3Space.classList.add('active');
    }else{
        elMain3Space.classList.remove('active');
    }
});

const elMain4 = document.querySelector('.main4'),
      elMain4Txt = document.querySelector('.main4_text');

window.addEventListener('scroll',function(){
    //main4 들어오면 헤더 색 변경
    let elMain4Top = elMain4.offsetTop - window.innerHeight <= window.scrollY - 500;
    if(elMain4Top == true){
        elHeader.classList.remove('white');
    };
    let elMain4Top2 = elMain4.offsetTop - window.innerHeight <= window.scrollY - 200;
    if(elMain4Top2 == true){
        elMain4Txt.classList.add('active');
    }else{
        elMain4Txt.classList.remove('active');
    };

});

const elMain5Fig = document.querySelector('.main5 figure'),
      elMain5Txt = document.querySelector('.main5_text')

window.addEventListener('scroll',function(){
    let elMain5Top = elMain5Fig.offsetTop - window.innerHeight <= window.scrollY;
    //main5 이미지 위에 배경색 제거
    if(elMain5Top == true){
        elMain5Fig.classList.add('active');
    }else{
        elMain5Fig.classList.remove('active');
    };
    if(elMain5Top == true){
        elMain5Txt.classList.add('active');
    }else{
        elMain5Txt.classList.remove('active');
    };

});

const elMain6Fig = document.querySelector('.main6_con figure'),
      elMain6P = document.querySelector('.main6_con p'),
      elMain6 = document.querySelector('.main6');

window.addEventListener('scroll',function(){
    //main6 이미지 위에 배경색 제거
    let elMain6Top = elMain6.offsetTop - window.innerHeight <= window.scrollY;
    if(elMain6Top == true){
        elMain6Fig.classList.add('active');
    }else{
        elMain6Fig.classList.remove('active');
    };
    //글씨 떠오르기
    if(elMain6Top == true){
        elMain6P.classList.add('active');
    }else{
        elMain6P.classList.remove('active');
    };
});