var redeemedCodes=[];function showRedeemPrompt(){showSimpleInput(_("Enter the code to redeem."),_("Redeem Code"),"",redeemCode,"Cancel")}function redeemCode(){var e=getSafeCode();-1==redeemedCodes.indexOf(e)?redeemTicketOnServer(e):alert(_("Code already redeemed"))}function getSafeCode(){var e=document.getElementById("simpleInputFieldText").value;return replaceAll(e," ","")}function redeemTicketOnServer(e){var t;(t=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP")).onreadystatechange=function(){if(console.log(t.responseText),4==t.readyState&&200==t.status){var e=JSON.parse(t.responseText);if(console.log(e),"success"==e.success.toString()){var s=getSafeCode(),n=s.length-1,d=parseInt(s.slice(11,n)),o=new BigNumber(s.slice(11,n)),i=s.slice(n);if("T"==i&&d>0)tickets+=d,newNews(_("You gained {0} tickets",d),!0);else if("M"==i&&d>0)addMoney(o),newNews(_("You gained money ${0}",d),!0);else if("C"==i)openBasicChest();else if("G"==i)openGoldChest();else if("E"==i)openEtherealChest();else if("L"==i&&d>0)timelapse(d),newNews(_("You gained timelapse {0}mins",parseFloat((d*STAT.timelapseDurationMultiplier()).toFixed(2))),!0);else if("D"==i&&d>0)addDepth(d),newNews(_("You gained {0}km depth",d),!0);else if("S"==i&&d>0)worldResources[BUILDING_MATERIALS_INDEX]+=d,newNews(_("You gained {0} x Building Materials",d),!0);else if("A"==i&&d>0)worldResources[BUILDING_MATERIALS_INDEX]+=d,newNews(_("You gained {0} x Building Materials",d),!0);else if("O"==i&&d>0)worldResources[OIL_INDEX].numOwned+=d,newNews(_("You gained {0} oil",d),!0);else if("B"==i&&d>0)6!=d?buffs.startBuff(d,600,"code"):buffs.startBuff(d,30,"code"),newNews(_("You gained a buff!"),!0);else if("X"==i)return CHEATS_ENABLED=!CHEATS_ENABLED,newNews("Cheats enabled: "+CHEATS_ENABLED),void hideSimpleInput();0==redeemedCodes.length&&logInfluencer(s),redeemedCodes.push(s),document.getElementById("simpleInputFieldText").value="",trackeEvent_redeemCode(),hideSimpleInput()}else alert(_("Error code doesn't exist or is invalid"))}},t.open("POST",CODE_REDEMPTION_ENDPOINT,!0),t.setRequestHeader("Content-type","application/x-www-form-urlencoded"),t.send("r="+e)}