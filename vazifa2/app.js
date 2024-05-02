let FirstName = prompt("ismingizni kiriting");
let LastName = prompt("familyangizni kiriting");
let age = Number(prompt("yoshingizni kiriting"));
let country = prompt("Yashash joyingizni kiriting");
let married = prompt("uylanganmisiz yoki bo'ydoqmi menga o'xshab");
let boyi = Number(prompt("bo'yingizni uzunligini kiriting"));
let goal = prompt("maqsadingiz nima");
let health = prompt("Sog'lig'ingiz qanaqa");
let learning = prompt("hozirda qayerda oqisiz");
let number = Number(prompt("Telefon raqamingizni kiriting"));

document.write(`ismingiz ${FirstName} \n familyangiz ${LastName} \n yoshingiz ${age}  \n yashash joyingiz ${country} 
 \n uylanganlik haqida ${married} boyingiz ${boyi} maqsadi haqida ${goal} \n sog'ligi haqida ${health}
  \n o'qishi haqida ${learning} \n telefon raqami ${number} `)