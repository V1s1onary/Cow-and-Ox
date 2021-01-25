let all_text2='';
let number=[];
let boss=0;
  let my_number;
  let my_number_mas=[];
  let b=-1;
  let c=0;
  let all_text;
  document.getElementById('retry').style.display='none';
function com()
{
	if(boss==0)
  {
let m_p=[0,2,4,5,1,8,7,3,9,6];
for (let i = m_p.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); 
    [m_p[i], m_p[j]] = [m_p[j], m_p[i]];
  }
  for (let i=0;i<4;i++)
  {
  	let buffer=m_p.pop();
  	number.push(buffer)
  }
  boss=1;
}
	if(document.getElementById('area').value=='')
	{
		alert("Вводите только цыфры!(4 цыфры)")

	}
	if(document.getElementById('area').value!='')
	{
		 my_number=document.getElementById('area').value;
         for(let i=0;i<my_number.length;i++)
{
	if(my_number.charAt(i)==1 || my_number.charAt(i)==2 || my_number.charAt(i)==3 || my_number.charAt(i)==4 || my_number.charAt(i)==5 || my_number.charAt(i)==6 || my_number.charAt(i)==7 || my_number.charAt(i)==8 || my_number.charAt(i)==9 || my_number.charAt(i)==0)
	{
my_number_mas.push(parseInt(my_number.charAt(i)));


}

}
if(my_number_mas.length!=4)
{
	alert("Вводите только числа!И их должно быть 4! ")
	b=-1;
c=0;
my_number_mas.splice(0,4);
document.getElementById('area').value='';
}

else
{
	for(let i=0;i<5;i++)
{
   for(let j=0;j<5;j++)
   {
     if(i==j)
     {
       if(my_number_mas[i]==number[j])
  {
     b=b+1;
  }
     }

     if (i!=j) 
     {
     	if (my_number_mas[i]==number[j]) 
     	{
          c=c+1;

     	}
     }

   }
   

}
all_text=my_number + ' ' + ' Быки: ' + `${b}`+'   ' + 'Коровы: ' + `${c}`+'\n';
all_text2=all_text2+all_text;
document.getElementById('ggg').innerText=all_text2;
if(b==4)
{
	document.getElementById('ggg').innerText=all_text2+'\n'+'Вы выиграли'+'\n'+'Если хотите сыграть ещё раз нажмите на кнопку заново'
	document.getElementById('area').disabled='disabled';
	document.getElementById('retry').style.display='block';
	//document.getElementById('play').onclick=com_1();
	boss=0;
	number.splice(0,4);
}

b=-1;
c=0;
my_number_mas.splice(0,4);
document.getElementById('area').value='';

}

}
}

function moc()
{
	all_text2='';

  document.getElementById('retry').style.display='none';
  document.getElementById('area').removeAttribute('disabled');
  document.getElementById('ggg').innerHTML='';
  //document.getElementById('play').removeAttribute('onclick');
  //document.getElementById('play').onclick=function()
  com();


} 
