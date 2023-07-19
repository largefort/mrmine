class OfflineProgress extends TabbedPopupWindow{layerName="offlineProgress";domElementId="OFFLINEPROGRESSD";context=OFFLINEPROGRESS;offlineProgressResults={};openTime=0;constructor(e){super(e),e||this.setBoundingBox(),this.initializeTabs(Object.values({})),this.openTime=currentTime()}timeSinceOpened(){return currentTime()-this.openTime}setOfflineProgressValues(e){this.offlineProgressResults=e}render(){this.context.save(),this.context.clearRect(0,0,this.boundingBox.width,this.boundingBox.height),this.context.restore(),super.render(),this.context.fillStyle="#FFFFFF",this.offlineProgressResults.hasOwnProperty("secondsOffline")&&(1==managerStructure.level?this.context.drawImage(manager1,0,0,manager1.width,manager1.height,Math.ceil(.02*offlineprogressdw),.14*offlineprogressdh,Math.floor(.14*offlineprogressdw),Math.floor(.3*offlineprogressdh)):2==managerStructure.level?this.context.drawImage(manager2,0,0,manager2.width,manager2.height,Math.ceil(.02*offlineprogressdw),.14*offlineprogressdh,Math.floor(.14*offlineprogressdw),Math.floor(.3*offlineprogressdh)):this.context.drawImage(manager3,0,0,manager3.width,manager3.height,Math.ceil(.02*offlineprogressdw),.14*offlineprogressdh,Math.floor(.14*offlineprogressdw),Math.floor(.3*offlineprogressdh)),this.context.font="22px KanitM",fillTextShrinkToFit(this.context,_("While Offline Your Manager Gained You:"),.2*this.boundingBox.width,85,.7*this.boundingBox.width,"center"),fillTextShrinkToFit(this.context,_("+ "+this.offlineProgressResults.depth.toFixed(2)+"Km in Depth"),.2*this.boundingBox.width,115,.7*this.boundingBox.width,"center"),fillTextShrinkToFit(this.context,_("+ $"+beautifynum(this.offlineProgressResults.mineralValue))+" in minerals",.2*this.boundingBox.width,145,.7*this.boundingBox.width,"center"),this.context.font="14px KanitM",fillTextShrinkToFit(this.context,_("Level up your manager to improve offline efficiency and max offline duration."),.1*this.boundingBox.width,.9*offlineprogressdh,.8*this.boundingBox.width,"center"))}close(){return isPlayerReadyForPromo()&&setTimeout((function(){openUi(PromoPopup)}),100),super.close()}}