class PromoPopup extends TabbedPopupWindow{layerName="promopopup";domElementId="PROMOD";context=PROMO;promoUrl="https://apps.apple.com/us/app/mr-mine-idle/id1659735369";promoAsset=activePromoAsset;promoText1="MrMine is now out on iOS!";promoText2="Now you can manage your mine on the go!";constructor(t){super(t),t||this.setBoundingBox(),this.initializeTabs(Object.values({})),this.addHitbox(new Button(JustUpgrade,_("Play on Mobile"),"26px KanitB","#000000",{x:.3*this.boundingBox.width,y:.8*this.boundingBox.height,width:.4*this.boundingBox.width,height:.1*this.boundingBox.height},{onmousedown:function(){promosClicked.push(CURRENTLY_ACTIVE_PROMO_ID),openExternalLinkInDefaultBrowser(this.parent.promoUrl),mutebuttons||clickAudio[rand(0,clickAudio.length-1)].play()}},"pointer","upgradeButton")),lastTimeSeenPromo=currentTime()}render(){this.context.save(),this.context.clearRect(0,0,this.boundingBox.width,this.boundingBox.height),this.context.restore(),super.render(),this.context.fillStyle="#FFFFFF",this.context.drawImage(this.promoAsset,0,0,this.promoAsset.width,this.promoAsset.height,Math.round(.2*this.boundingBox.width),Math.round(.13*this.boundingBox.height),Math.round(.6*this.boundingBox.width),Math.round(.495*this.boundingBox.height)),this.context.font="13px Verdana",this.context.fillText(this.promoText1,.5*this.boundingBox.width-this.context.measureText(this.promoText1).width/2,.69*this.boundingBox.height),this.context.font="13px Verdana",this.context.fillText(this.promoText2,.5*this.boundingBox.width-this.context.measureText(this.promoText2).width/2,.74*this.boundingBox.height)}}