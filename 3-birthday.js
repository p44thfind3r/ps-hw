function checkAge(date) {
    const minAge = 14
      let userDate = new Date(date)
      let currentDate = new Date()
      let targetDate = new Date()
      targetDate.setFullYear(currentDate.getFullYear() - minAge)
      if (userDate.getTime() < targetDate.getTime()) {
          return true;
      } else {
          return false;
      }
  }
  
  checkAge('2011-02-28')