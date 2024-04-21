// write code here
        let a = undefined;
        let b = null;
        let c = b + '4 2';

        
        let d = Number(a);
        let e = Number(b);
        let f = Number(c);

        console.log(d); 
        console.log(e); 
        console.log(f); 

      ผลลัพธ์
      NaN
       0
      NaN

d = NaN: เนื่องจากตัวแปร a มีค่าเป็น undefined ที่ไม่สามารถแปลงเป็น Number ได้
e = 0: เนื่องจากตัวแปร b มีค่าเป็น null และถูกแปลงเป็น Number ได้เป็น 0
f = NaN: เนื่องจากตัวแปร c มีค่าเป็น null ผสมกับสตริง '4 2' ทำให้เกิดการบวกกันเป็นสตริง 'null4 2' และเมื่อแปลงเป็น Number จะได้ NaN ออกมา
