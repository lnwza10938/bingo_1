
var num = [];
var union = "";
var numt = [];


function hart(){ 
  numt =[];
  while(numt.length < 25){
      var r1 = Math.floor(Math.random() * 25) + 1 ;
      if(numt.indexOf(r1) === -1) numt.push(r1);
      if (1 == 1 ) {
                union = numt;
                
            }
  } 
  for(i=0 ; i<= 24 ; i++){
    document.getElementById("test"+i+"").innerHTML = numt[i];
  }
  return union;
}hart()
var GK = union;

var TVA = []

var hope = 1

var A1E0I4  = [GK[0], GK[1], GK[2], GK[3], GK[4]], A1E0I4P = [];
var A2E0I4  = [GK[5], GK[6], GK[7], GK[8], GK[9]], A2E0I4P = [];
var A3E0I4  = [GK[10],GK[11],GK[12],GK[13],GK[14]],A3E0I4P = [];
var A4E0I4  = [GK[15],GK[16],GK[17],GK[18],GK[19]],A4E0I4P = [];
var A5E0I4  = [GK[20],GK[21],GK[22],GK[23],GK[24]],A5E0I4P = [];

var A1A0I4  = [GK[0],GK[5],GK[10],GK[15],GK[20]],  A1A0I4P = [];
var B2B0I4  = [GK[1],GK[6],GK[11],GK[16],GK[21]],  B2B0I4P = [];
var C3C0I4  = [GK[2],GK[7],GK[12],GK[17],GK[22]],  C3C0I4P = [];
var D4D0I4  = [GK[3],GK[8],GK[13],GK[18],GK[23]],  D4D0I4P = [];
var E5E0I4  = [GK[4],GK[9],GK[14],GK[19],GK[24]],  E5E0I4P = [];

var AX = [GK[0],GK[6],GK[12],GK[18],GK[24]] , AXP = [];
var EX = [GK[4],GK[8],GK[12],GK[16],GK[20]] , EXP = [];

var BIO = [0,0,0,0,0,0,0,0,0,0,0,0,0];





function up(){
  for (let x = 0; x < 25; x++) {
    if(num == union[x]){
      // console.log("num = > "+num);
      // console.log("numt-fai = >"+fai);
      // console.log("union = >"+union);
      // console.log("ตารางที่ = "+x+"");
      document.getElementById('s'+x+"").style.background = 'rgb(198, 0, 0)'  
    }
  }
  
              A1E0I4P = A1E0I4.find((hup)=>{
                return hup == num;
              })
              if(A1E0I4P == num){
                BIO[1]++
              }
              A2E0I4P = A2E0I4.find((hup)=>{
                return hup == num;
              })
              if(A2E0I4P == num){
                BIO[2]++
              }
              A3E0I4P = A3E0I4.find((hup)=>{
                return hup == num;
              })
              if(A3E0I4P == num){
                BIO[3]++
              }
              A4E0I4P = A4E0I4.find((hup)=>{
                return hup == num;
              })
              if(A4E0I4P == num){
                BIO[4]++
              }
              A5E0I4P = A5E0I4.find((hup)=>{
                return hup == num;
              })
              if(A5E0I4P == num){
                BIO[5]++
              }


              A1A0I4P = A1A0I4.find((hup)=>{
                return hup == num;
              })
              if(A1A0I4P == num){
                BIO[6]++
              }
              B2B0I4P = B2B0I4.find((hup)=>{
                return hup == num;
              })
              if(B2B0I4P == num){
                BIO[7]++
              }
              C3C0I4P = C3C0I4.find((hup)=>{
                return hup == num;
              })
              if(C3C0I4P == num){
                BIO[8]++
              }
              D4D0I4P = D4D0I4.find((hup)=>{
                return hup == num;
              })
              if(D4D0I4P == num){
                BIO[9]++
              }
              E5E0I4P = E5E0I4.find((hup)=>{
                return hup == num;
              })
              if(E5E0I4P == num){
                BIO[10]++
              }


              AXP = AX.find((hup)=>{
                return hup == num;
              })
              if(AXP == num){
                BIO[11]++
              }
              EXP = EX.find((hup)=>{
                return hup == num;
              })
              if(EXP == num){
                BIO[12]++
              }

              

              
              
                
                  if(BIO[1]==5){
                    for (let x = 0; x < 5; x++){
                      document.getElementById('s'+x+"").style.background = 'rgb(79, 234, 159)'
                    }
                  }
                  if(BIO[2]==5){
                    for (let x2 = 5; x2 < 10; x2++){
                      document.getElementById('s'+x2+"").style.background = 'rgb(79, 234, 159)'
                    }
                  }
                  if(BIO[3]==5){
                    for (let x3 = 10; x3 < 15; x3++){
                      document.getElementById('s'+x3+"").style.background = 'rgb(79, 234, 159)'
                    }
                  }
                  if(BIO[4]==5){
                    for (let x4 = 15; x4 < 20; x4++){
                      document.getElementById('s'+x4+"").style.background = 'rgb(79, 234, 159)'
                    }
                  }
                  if(BIO[5]==5){
                    for (let x5 = 20; x5 < 25; x5++){
                      document.getElementById('s'+x5+"").style.background = 'rgb(79, 234, 159)'
                    }
                  }

                  

                  if(BIO[6]==5){
                    for (let x6 = 0; x6 < 25; x6+=5){
                      document.getElementById('s'+x6+"").style.background = 'rgb(79, 234, 159)'
                      console.log(x6);
                    }
                  }
                  if(BIO[7]==5){
                    for (let x7 = 1; x7 < 25; x7+=5){
                      document.getElementById('s'+x7+"").style.background = 'rgb(79, 234, 159)'
                    }
                  }
                  if(BIO[8]==5){
                    for (let x8 = 2; x8 < 25; x8+=5){
                      document.getElementById('s'+x8+"").style.background = 'rgb(79, 234, 159)'
                    }
                  }
                  if(BIO[9]==5){
                    for (let x9 = 3; x9 < 25; x9+=5){
                      document.getElementById('s'+x9+"").style.background = 'rgb(79, 234, 159)'
                    }
                  }
                  if(BIO[10]==5){
                    for (let x10 = 4; x10 < 25; x10+=5){
                      document.getElementById('s'+x10+"").style.background = 'rgb(79, 234, 159)'
                    }
                  }
                  
                  

                  if(BIO[11]==5){
                    for (let x11 = 0; x11 <= 25; x11+=6){
                      document.getElementById('s'+x11+"").style.background = 'rgb(79, 234, 159)'
                      console.log(x11);
                    }
                  }
                  if(BIO[12]==5){
                    for (let x12 = 4; x12 <= 20; x12+=4){
                      document.getElementById('s'+x12+"").style.background = 'rgb(79, 234, 159)'
                    }
                  }

                  
                
                
              


console.log(BIO);
for(let r = 0; r <= 12; r++){
  if(BIO[r] == 5){
    // javascript:submit()
  }
}
}

var tioo = []

while(tioo.length < 25){
  let erre = Math.floor(Math.random() * 25) + 1 ;
  if(tioo.indexOf(erre) === -1) tioo.push(erre);
} 
function hty(){
    // num = hope
    num = tioo[hope] 
    // console.log(tioo);
    if(hope <= 24){
      hope++
    }
    
    
    return num;
}
function col(){
  for (let x = 0; x < 25; x++) {
  if(1 == 1){
    document.getElementById('s'+x+"").style.background = 'DodgerBlue'
  } 
}
  location.reload()
}
function submit() {
document.getElementById("hhkk").click();
}

