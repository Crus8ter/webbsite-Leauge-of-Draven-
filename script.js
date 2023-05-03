function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  function openAbilityQ() {
    document.getElementById("AbilityQ").style.zIndex = "1";
    document.getElementById("AbilityW").style.zIndex = "0";
    document.getElementById("AbilityE").style.zIndex = "0";
    document.getElementById("AbilityR").style.zIndex = "0";
  }

  function openAbilityW() {
    document.getElementById("AbilityQ").style.zIndex = "0";
    document.getElementById("AbilityW").style.zIndex = "1";
    document.getElementById("AbilityE").style.zIndex = "0";
    document.getElementById("AbilityR").style.zIndex = "0";
  }

  function openAbilityE() {
    document.getElementById("AbilityQ").style.zIndex = "0";
    document.getElementById("AbilityW").style.zIndex = "0";
    document.getElementById("AbilityE").style.zIndex = "1";
    document.getElementById("AbilityR").style.zIndex = "0";
  }

  function openAbilityR() {
    document.getElementById("AbilityQ").style.zIndex = "0";
    document.getElementById("AbilityW").style.zIndex = "0";
    document.getElementById("AbilityE").style.zIndex = "0";
    document.getElementById("AbilityR").style.zIndex = "1";
  }