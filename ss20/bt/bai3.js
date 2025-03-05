let number = prompt("Mời bạn nhập số nguyên:");
  if (isNaN(number) || !Number.isInteger(Number(number))) {
      document.write(" Số không hợp lệ");
  } else {
      let text_number = number.toString();
      let check = 0;
  
      for (let i = 0; i < text_number.length / 2; i++) {
          if (text_number[i] !== text_number[text_number.length - 1 - i]) {
              check++;
              document.write(" Số này không phải số đối xứng.");
              break; 
          }
      }
      if (check == 0) {
          document.write(" Số này là số đối xứng.");
      }
  }
  