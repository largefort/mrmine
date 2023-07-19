const FAN_TYPE=1,FUEL_ROD_TYPE_1=2,FUEL_ROD_TYPE_2=3,FUEL_ROD_TYPE_3=4,FUEL_ROD_TYPE_4=5,FUEL_ROD_TYPE_5=6,FUEL_ROD_TYPE_6=7,FUEL_ROD_TYPE_7=8,FUEL_ROD_TYPE_8=9,FUEL_ROD_TYPE_9=10,BATTERY_TYPE_1=11,BATTERY_TYPE_2=12,BATTERY_TYPE_3=13,DUCT_TYPE=14,BUFF_TYPE_1=15,BUFF_TYPE_2=16,BUFF_TYPE_3=17,BUFF_TYPE_4=18,FUEL_ROD_TYPE_10=19,FUEL_ROD_TYPE_11=20,FUEL_ROD_TYPE_12=21,FUEL_ROD_TYPE_13=22,FUEL_ROD_TYPE_14=23,FUEL_ROD_TYPE_15=24,FUEL_ROD_TYPE_16=25,FUEL_ROD_TYPE_17=26,FUEL_ROD_TYPE_18=27,FUEL_ROD_TYPE_19=28;var BATTERY_TYPES=[11,12,13],FUEL_ROD_TYPES=[2,3,4,5,6,7,8,9,10,19,20,21,22,23,24,25,26,27,28],BUFF_TYPES=[15,16,17,18],CONNECTING_TYPES=[14,2,3,4,5,6,7,8,9,10,19,20,21,22,23,24,25,26,27,28];function getBombardmentForIsotope(e){var t;return FUEL_ROD_TYPES.forEach((r=>{reactorComponents[r].totalEnergyOutput<0&&reactorComponents[r].rewardOutput.forEach((n=>{n.item.id==e&&(t=reactorComponents[r])}))})),t}var reactorComponents=[];class ReactorComponent{index;name;heat;energyStorage;energyProductionPerSecond;buffDirections;buffAmountMultiplierPerDirection;totalEnergyOutput;ingredients;rewardOutput;craftDescription;numOwned=0;showTooltip;render}class FuelRodComponent extends ReactorComponent{showTooltip=function(e){var t=this.craftDescription;if(e.isOnGrid){var r=reactor.grid.getFuelCellRemainingEnergy(e.gridSlotX,e.gridSlotY);t+="<br><br>"+_("Time Remaining: {0}",formattedCountDown(r/this.energyProductionPerSecond)),t+="<br>"+_("Energy Remaining: {0}",beautifynum(r));var n=reactor.grid.getSystemHeatForFuelCell(e.gridSlotX,e.gridSlotY);n>0?(t+="<br><font color='red'>"+_("System Heat: <b>{0}</b>",n)+"</font>",t+="<br><i>"+_("This system is not sufficently cooled.")+"</i>"):t+="<br>"+_("System Heat: {0}",n)}else t+="<br>"+_("Total Burn Duration: {0}",formattedCountDown(this.totalEnergyOutput/this.energyProductionPerSecond));t+="<br><br><b>"+_("Decay Rewards:")+"</b><br>",t+=generateHtmlForIngredients(this.rewardOutput,!1),showTooltip(_(reactorComponents[this.index].name),t,mouseX,mouseY,240)};render=function(e,t,r,n,o,i){if(t.drawImage(this.craftIcon,r,n,o,i),e.isOnGrid){var a=reactor.grid.getFuelCellRemainingEnergy(e.gridSlotX,e.gridSlotY)/this.totalEnergyOutput;drawTinyProgressBar(t,r+3,n+i-8,o-6,4,2,"#CC3333","#000000","#222222",a)}}}class BatteryComponent extends ReactorComponent{showTooltip=function(e){showTooltip(_(reactorComponents[this.index].name),this.craftDescription)};render=function(e,t,r,n,o,i){return e.isOnGrid&&drawTinyProgressBar(t,r+3,n+i-8,o-6,4,2,"#33CC33","#000000","#222222",Math.min(1,reactor.currentBatteryCharge()/reactor.grid.maxBatteryCapacity())),t.drawImage(this.craftIcon,r,n,o,i)}}function generateReactorComponents(){var e;function t(e){return _("<b>Produces:</b> <br> Energy: {0}/sec ({1} energy/heat) <br> ",e.energyProductionPerSecond,parseFloat((e.energyProductionPerSecond/e.heat).toFixed(2)))+_("Heat: {0}/sec ({1} fans) <br> ",e.heat,parseFloat((e.heat/12).toFixed(2)))+_("Total Energy Production: {0} <br> ",beautifynum(e.totalEnergyOutput))+_("Total Duration: {0}",shortenedFormattedTime(e.totalEnergyOutput/e.energyProductionPerSecond))}function r(e,t,r){return"single"==e?getImageFromMergedImages(t,getSingleColoredPixelImage(r,1),{x:0,y:0,width:1,height:1},{x:16,y:3,width:18,height:41},reactorFuelRodSingle,{x:0,y:0,width:reactorFuelRodSingle.width,height:reactorFuelRodSingle.height},{x:0,y:0,width:50,height:50}):"dual"==e?getImageFromMergedImages("Dual"+t,getSingleColoredPixelImage(r,1),{x:0,y:0,width:1,height:1},{x:6,y:6,width:13,height:34},getSingleColoredPixelImage(r,1),{x:0,y:0,width:1,height:1},{x:29,y:6,width:13,height:34},reactorFuelRodDual,{x:0,y:0,width:reactorFuelRodSingle.width,height:reactorFuelRodSingle.height},{x:0,y:0,width:50,height:50}):"quad"==e?getImageFromMergedImages("Quad"+t,getSingleColoredPixelImage(r,1),{x:0,y:0,width:1,height:1},{x:6,y:6,width:14,height:16},getSingleColoredPixelImage(r,1),{x:0,y:0,width:1,height:1},{x:29,y:6,width:14,height:16},getSingleColoredPixelImage(r,1),{x:0,y:0,width:1,height:1},{x:6,y:26,width:14,height:16},getSingleColoredPixelImage(r,1),{x:0,y:0,width:1,height:1},{x:29,y:26,width:14,height:16},reactorFuelRodQuad,{x:0,y:0,width:reactorFuelRodSingle.width,height:reactorFuelRodSingle.height},{x:0,y:0,width:50,height:50}):"bombardment"==e?getImageFromMergedImages(t,getSingleColoredPixelImage(r,1),{x:0,y:0,width:1,height:1},{x:16,y:3,width:18,height:41},reactorBombardmentRod,{x:0,y:0,width:reactorBombardmentRod.width,height:reactorBombardmentRod.height},{x:0,y:0,width:50,height:50}):void 0}(e=new ReactorComponent).index=1,e.name="Fan",e.heat=-12,e.energyStorage=0,e.energyProductionPerSecond=0,e.craftIcon=getImageFromMergedImages("fan",reactorFan,{x:0,y:0,width:reactorFan.width,height:reactorFan.height},{x:0,y:0,width:50,height:50},reactorFanBlades,{x:0,y:0,width:reactorFanBlades.width,height:reactorFanBlades.height},{x:0,y:0,width:50,height:50}),e.render=function(e,t,r,n,o,i){var a=0;reactor.isRunning&&e.isOnGrid&&reactor.grid.getSystemCellsToHighlightForCell(e.gridSlotX,e.gridSlotY).length>0&&(a=7*framesRendered2%360),drawImageRot(t,reactorFanBlades,0,0,reactorFanBlades.width,reactorFanBlades.height,r,n,o,i,a,5*i/70),t.drawImage(reactorFan,0,0,reactorFan.width,reactorFan.height,r,n,o,i)},e.craftDescription=_("Cools a fuel rod reducing its heat by 12"),e.showTooltip=function(e){showTooltip(_(reactorComponents[this.index].name),this.craftDescription)},e.numOwned=2,reactorComponents[1]=e,(e=new FuelRodComponent).index=2,e.name="Highly Enriched Uranium Fuel Rod",e.heat=24,e.energyStorage=0,e.energyProductionPerSecond=10,e.totalEnergyOutput=36e3,e.rewardOutput=[{item:new MineralCraftingItem(URANIUM2_INDEX),quantity:4500},{item:new MineralCraftingItem(URANIUM3_INDEX),quantity:750},{item:new MineralCraftingItem(PLUTONIUM1_INDEX),quantity:2500},{item:new MineralCraftingItem(PLUTONIUM2_INDEX),quantity:500}],e.craftIcon=r("single","HEUFuelRod","#CC3333"),e.craftDescription=t(e),e.numOwned=1,reactorComponents[2]=e,(e=new FuelRodComponent).index=3,e.name="Dual Highly Enriched Uranium  Fuel Rod",e.heat=66,e.energyStorage=0,e.energyProductionPerSecond=30,e.totalEnergyOutput=108e3,e.rewardOutput=[{item:new MineralCraftingItem(URANIUM2_INDEX),quantity:9300},{item:new MineralCraftingItem(URANIUM3_INDEX),quantity:1550},{item:new MineralCraftingItem(PLUTONIUM1_INDEX),quantity:5050},{item:new MineralCraftingItem(PLUTONIUM2_INDEX),quantity:1010}],e.craftIcon=r("dual","HEUFuelRod","#CC3333"),e.craftDescription=t(e),reactorComponents[3]=e,(e=new FuelRodComponent).index=4,e.name="Quad Highly Enriched Uranium Fuel Rod",e.heat=180,e.energyStorage=0,e.energyProductionPerSecond=90,e.totalEnergyOutput=324e3,e.rewardOutput=[{item:new MineralCraftingItem(URANIUM2_INDEX),quantity:19200},{item:new MineralCraftingItem(URANIUM3_INDEX),quantity:3200},{item:new MineralCraftingItem(PLUTONIUM1_INDEX),quantity:10200},{item:new MineralCraftingItem(PLUTONIUM2_INDEX),quantity:2040}],e.craftIcon=r("quad","HEUFuelRod","#CC3333"),e.craftDescription=t(e),reactorComponents[4]=e,(e=new FuelRodComponent).index=5,e.name="Enriched Uranium Fuel Rod",e.heat=18,e.energyStorage=0,e.energyProductionPerSecond=10,e.totalEnergyOutput=144e3,e.rewardOutput=[{item:new MineralCraftingItem(URANIUM2_INDEX),quantity:23e3},{item:new MineralCraftingItem(PLUTONIUM1_INDEX),quantity:17250}],e.craftIcon=r("single","LEUFuelRod","#33CC33"),e.craftDescription=t(e),reactorComponents[5]=e,(e=new FuelRodComponent).index=6,e.name="Dual Enriched Uranium Fuel Rod",e.heat=48,e.energyStorage=0,e.energyProductionPerSecond=30,e.totalEnergyOutput=432e3,e.rewardOutput=[{item:new MineralCraftingItem(URANIUM2_INDEX),quantity:46500},{item:new MineralCraftingItem(PLUTONIUM1_INDEX),quantity:34900}],e.craftIcon=r("dual","LEUFuelRod","#33CC33"),e.craftDescription=t(e),reactorComponents[6]=e,(e=new FuelRodComponent).index=7,e.name="Quad Enriched Uranium Fuel Rod",e.heat=126,e.energyStorage=0,e.energyProductionPerSecond=90,e.totalEnergyOutput=1296e3,e.rewardOutput=[{item:new MineralCraftingItem(URANIUM2_INDEX),quantity:94e3},{item:new MineralCraftingItem(PLUTONIUM1_INDEX),quantity:70500}],e.craftIcon=r("quad","LEUFuelRod","#33CC33"),e.craftDescription=t(e),reactorComponents[7]=e,(e=new FuelRodComponent).index=8,e.name="Mixed Oxide Fuel Rod",e.heat=21,e.energyStorage=0,e.energyProductionPerSecond=8,e.totalEnergyOutput=288e3,e.rewardOutput=[{item:new MineralCraftingItem(URANIUM3_INDEX),quantity:2e3},{item:new MineralCraftingItem(PLUTONIUM3_INDEX),quantity:1500}],e.craftIcon=r("single","MOXFuelRod","#3333CC"),e.craftDescription=t(e),reactorComponents[8]=e,(e=new FuelRodComponent).index=9,e.name="Dual Mixed Oxide Fuel Rod",e.heat=54,e.energyStorage=0,e.energyProductionPerSecond=24,e.totalEnergyOutput=864e3,e.rewardOutput=[{item:new MineralCraftingItem(URANIUM3_INDEX),quantity:4040},{item:new MineralCraftingItem(PLUTONIUM3_INDEX),quantity:3030}],e.craftIcon=r("dual","MOXFuelRod","#3333CC"),e.craftDescription=t(e),reactorComponents[9]=e,(e=new FuelRodComponent).index=10,e.name="Quad Mixed Oxide Fuel Rod",e.heat=144,e.energyStorage=0,e.energyProductionPerSecond=72,e.totalEnergyOutput=2592e3,e.rewardOutput=[{item:new MineralCraftingItem(URANIUM3_INDEX),quantity:8210},{item:new MineralCraftingItem(PLUTONIUM3_INDEX),quantity:6160}],e.craftIcon=r("quad","MOXFuelRod","#3333CC"),e.craftDescription=t(e),reactorComponents[10]=e,(e=new FuelRodComponent).index=19,e.name="Californium Bombardment 1",e.heat=24,e.energyStorage=0,e.energyProductionPerSecond=-10,e.totalEnergyOutput=-288e3,e.rewardOutput=[{item:new MineralCraftingItem(EINSTEINIUM1_INDEX),quantity:10}],e.craftIcon=r("bombardment","CaliforniunBombardment1","#e2eb34"),e.craftDescription=t(e),reactorComponents[19]=e,(e=new FuelRodComponent).index=20,e.name="Californium Bombardment 2",e.heat=72,e.energyStorage=0,e.energyProductionPerSecond=-30,e.totalEnergyOutput=-864e3,e.rewardOutput=[{item:new MineralCraftingItem(EINSTEINIUM2_INDEX),quantity:10}],e.craftIcon=r("bombardment","CaliforniunBombardment2","#e2eb34"),e.craftDescription=t(e),reactorComponents[20]=e,(e=new FuelRodComponent).index=21,e.name="Californium Bombardment 3",e.heat=216,e.energyStorage=0,e.energyProductionPerSecond=-90,e.totalEnergyOutput=-2592e3,e.rewardOutput=[{item:new MineralCraftingItem(EINSTEINIUM3_INDEX),quantity:10}],e.craftIcon=r("bombardment","CaliforniunBombardment3","#e2eb34"),e.craftDescription=t(e),reactorComponents[21]=e,(e=new FuelRodComponent).index=22,e.name="Pu/Po Fuel Rod",e.heat=36,e.energyStorage=0,e.energyProductionPerSecond=16,e.totalEnergyOutput=921600,e.rewardOutput=[{item:new MineralCraftingItem(POLONIUM3_INDEX),quantity:2e3}],e.craftIcon=r("single","PuPoFuelRod","#8f7ea3"),e.craftDescription=t(e),reactorComponents[22]=e,(e=new FuelRodComponent).index=23,e.name="Dual Pu/Po Fuel Rod",e.heat=96,e.energyStorage=0,e.energyProductionPerSecond=48,e.totalEnergyOutput=2764800,e.rewardOutput=[{item:new MineralCraftingItem(POLONIUM3_INDEX),quantity:4040}],e.craftIcon=r("dual","PuPoFuelRod","#8f7ea3"),e.craftDescription=t(e),reactorComponents[23]=e,(e=new FuelRodComponent).index=24,e.name="Quad Pu/Po Fuel Rod",e.heat=264,e.energyStorage=0,e.energyProductionPerSecond=144,e.totalEnergyOutput=8294400,e.rewardOutput=[{item:new MineralCraftingItem(POLONIUM3_INDEX),quantity:8160}],e.craftIcon=r("quad","PuPoFuelRod","#8f7ea3"),e.craftDescription=t(e),reactorComponents[24]=e,(e=new FuelRodComponent).index=25,e.name="Polonium RTG Fuel Rod",e.heat=15,e.energyStorage=0,e.energyProductionPerSecond=6,e.totalEnergyOutput=1036800,e.rewardOutput=[],e.craftIcon=r("single","PoRTGFuelRod","#780637"),e.craftDescription=t(e),reactorComponents[25]=e,(e=new FuelRodComponent).index=26,e.name="Einsteinium Bombardment 1",e.heat=30,e.energyStorage=0,e.energyProductionPerSecond=-20,e.totalEnergyOutput=-1152e3,e.rewardOutput=[{item:new MineralCraftingItem(FERMIUM1_INDEX),quantity:1}],e.craftIcon=r("bombardment","EinsteiniumBombardment1","#2491b3"),e.craftDescription=t(e),reactorComponents[26]=e,(e=new FuelRodComponent).index=27,e.name="Einsteinium Bombardment 2",e.heat=90,e.energyStorage=0,e.energyProductionPerSecond=-60,e.totalEnergyOutput=-3456e3,e.rewardOutput=[{item:new MineralCraftingItem(FERMIUM2_INDEX),quantity:1}],e.craftIcon=r("bombardment","EinsteiniumBombardment2","#2491b3"),e.craftDescription=t(e),reactorComponents[27]=e,(e=new FuelRodComponent).index=28,e.name="Einsteinium Bombardment 3",e.heat=270,e.energyStorage=0,e.energyProductionPerSecond=-180,e.totalEnergyOutput=-10368e3,e.rewardOutput=[{item:new MineralCraftingItem(FERMIUM3_INDEX),quantity:1}],e.craftIcon=r("bombardment","EinsteiniumBombardment3","#2491b3"),e.craftDescription=t(e),reactorComponents[28]=e,(e=new BatteryComponent).index=11,e.name="Small Battery",e.heat=0,e.energyStorage=5e3,e.energyProductionPerSecond=0,e.craftIcon=reactorSingleBattery,e.craftDescription=_("Stores {0} energy",beautifynum(e.energyStorage)),e.numOwned=2,reactorComponents[11]=e,(e=new BatteryComponent).index=12,e.name="Large Battery",e.heat=0,e.energyStorage=5e4,e.energyProductionPerSecond=0,e.craftIcon=reactorDualBattery,e.craftDescription=_("Stores {0} energy",beautifynum(e.energyStorage)),reactorComponents[12]=e,(e=new BatteryComponent).index=13,e.name="Extra Large Battery",e.heat=0,e.energyStorage=25e4,e.energyProductionPerSecond=0,e.craftIcon=reactorQuadBattery,e.craftDescription=_("Stores {0} energy",beautifynum(e.energyStorage)),reactorComponents[13]=e,(e=new ReactorComponent).index=14,e.name="Heat Duct",e.heat=0,e.energyStorage=0,e.energyProductionPerSecond=0,e.craftIcon=getImageFromMergedImages("Duct",reactorDuctCenter,{x:0,y:0,width:reactorDuctCenter.width,height:reactorDuctCenter.height},{x:0,y:0,width:50,height:50},reactorDuctLeftCapped,{x:0,y:0,width:reactorDuctLeftCapped.width,height:reactorDuctLeftCapped.height},{x:0,y:0,width:50,height:50},reactorDuctBottomCapped,{x:0,y:0,width:reactorDuctBottomCapped.width,height:reactorDuctBottomCapped.height},{x:0,y:0,width:50,height:50},reactorDuctTopCapped,{x:0,y:0,width:reactorDuctTopCapped.width,height:reactorDuctTopCapped.height},{x:0,y:0,width:50,height:50},reactorDuctRightCapped,{x:0,y:0,width:reactorDuctRightCapped.width,height:reactorDuctRightCapped.height},{x:0,y:0,width:50,height:50}),e.render=function(e,t,r,n,o,i){for(var a=["Top","Bottom","Right","Left"],d=[e.cellTypeTop(),e.cellTypeBottom(),e.cellTypeRight(),e.cellTypeLeft()],c=0;c<a.length;c++){var u=a[c],g=window["reactorDuct"+u+"Capped"];(14==d[c]||1==d[c]||FUEL_ROD_TYPES.includes(d[c]))&&(g=reactor.isRunning?window["reactorDuct"+u+"On"]:window["reactorDuct"+u+"Off"]),t.drawImage(g,0,0,g.width,g.height,r,n,o,i)}t.drawImage(reactorDuctCenter,0,0,reactorDuctCenter.width,reactorDuctCenter.height,r,n,o,i)},e.craftDescription=_("Connects Ducts, Fans, and Fuel Rods together"),e.showTooltip=function(e){showTooltip(_(reactorComponents[this.index].name),this.craftDescription)},reactorComponents[14]=e,(e=new ReactorComponent).index=15,e.name="Copper Buff",e.heat=0,e.energyStorage=0,e.buffDirections=[{x:0,y:-1},{x:0,y:1}],e.buffAmountMultiplierPerDirection=.55,e.craftIcon=getImageFromMergedImages("Buff1",reactorCopperModifier,{x:0,y:0,width:reactorCopperModifier.width,height:reactorCopperModifier.height},{x:0,y:0,width:50,height:50},reactorArrowsUpDown,{x:0,y:0,width:reactorArrowsUpDown.width,height:reactorArrowsFourCorners.height},{x:0,y:0,width:50,height:50}),e.render=function(e,t,r,n,o,i){return t.drawImage(this.craftIcon,r,n,o,i)},e.craftDescription=_("Boosts component above and below it by {0}%",Math.floor(100*e.buffAmountMultiplierPerDirection)),e.showTooltip=function(e){showTooltip(_(reactorComponents[this.index].name),this.craftDescription)},reactorComponents[15]=e,(e=new ReactorComponent).index=16,e.name="Platinum Buff",e.heat=0,e.energyStorage=0,e.buffDirections=[{x:0,y:1},{x:-1,y:0}],e.buffAmountMultiplierPerDirection=.55,e.craftIcon=getImageFromMergedImages("Buff2",reactorPlatinumModifier,{x:0,y:0,width:reactorPlatinumModifier.width,height:reactorSilverModifier.height},{x:0,y:0,width:50,height:50},reactorArrowsLeftDown,{x:0,y:0,width:reactorArrowsLeftDown.width,height:reactorArrowsLeftDown.height},{x:0,y:0,width:50,height:50}),e.render=function(e,t,r,n,o,i){return t.drawImage(this.craftIcon,r,n,o,i)},e.craftDescription=_("Boosts components to the left and below by {0}%",Math.floor(100*e.buffAmountMultiplierPerDirection)),e.showTooltip=function(e){showTooltip(_(reactorComponents[this.index].name),this.craftDescription)},reactorComponents[16]=e,(e=new ReactorComponent).index=17,e.name="Silver Buff",e.heat=0,e.energyStorage=0,e.buffDirections=[{x:0,y:-1},{x:1,y:0}],e.buffAmountMultiplierPerDirection=.55,e.craftIcon=getImageFromMergedImages("Buff3",reactorSilverModifier,{x:0,y:0,width:reactorSilverModifier.width,height:reactorSilverModifier.height},{x:0,y:0,width:50,height:50},reactorArrowsUpRight,{x:0,y:0,width:reactorArrowsUpRight.width,height:reactorArrowsUpRight.height},{x:0,y:0,width:50,height:50}),e.render=function(e,t,r,n,o,i){return t.drawImage(this.craftIcon,r,n,o,i)},e.craftDescription=_("Boosts components to the right and above by {0}%",Math.floor(100*e.buffAmountMultiplierPerDirection)),e.showTooltip=function(e){showTooltip(_(reactorComponents[this.index].name),this.craftDescription)},reactorComponents[17]=e,(e=new ReactorComponent).index=18,e.name="Gold Buff",e.heat=0,e.energyStorage=0,e.buffDirections=[{x:-1,y:-1},{x:1,y:1},{x:1,y:-1},{x:-1,y:1}],e.buffAmountMultiplierPerDirection=.3,e.craftIcon=getImageFromMergedImages("Buff4",reactorGoldModifier,{x:0,y:0,width:reactorGoldModifier.width,height:reactorGoldModifier.height},{x:0,y:0,width:50,height:50},reactorArrowsFourCorners,{x:0,y:0,width:reactorArrowsFourCorners.width,height:reactorArrowsFourCorners.height},{x:0,y:0,width:50,height:50}),e.render=function(e,t,r,n,o,i){return t.drawImage(this.craftIcon,r,n,o,i)},e.craftDescription=_("Boosts diagonal components by {0}%",Math.floor(100*e.buffAmountMultiplierPerDirection)),e.showTooltip=function(e){showTooltip(_(reactorComponents[this.index].name),this.craftDescription)},reactorComponents[18]=e}