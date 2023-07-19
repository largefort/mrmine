class TranslationHelpWindow extends TabbedPopupWindow{layerName="TranslationHelp";domElementId="SETTINGSD";context=SETTINGS;statsPanelBox;constructor(t){super(t),t||this.setBoundingBox(),this.initializeTabs({}),this.statsPanelBox=new Scrollbox(this.bodyContainer.boundingBox.width-15,this.bodyContainer.boundingBox.height,this.context,this.bodyContainer.boundingBox.x,this.bodyContainer.boundingBox.y,this.bodyContainer.boundingBox.width,this.bodyContainer.boundingBox.height-5,15),this.addHitbox(this.statsPanelBox),this.statsPanelBox.setVisible(!0),this.statsPanelBox.setEnabled(!0)}render(){this.context.save(),this.context.clearRect(0,0,this.boundingBox.width,this.boundingBox.height),this.context.restore(),super.render(),this.statsPanelBox.context.fillStyle="#FFFFFF",this.statsPanelBox.context.strokeStyle="#000000",this.statsPanelBox.context.lineWidth=3,this.statsPanelBox.context.font="11px Arial",this.statsPanelBox.context.textBaseline="top",this.renderStatsPanel()}renderStatsPanel(){this.statsPanelBox.initializeScrollbar();var t=this.statsPanelBox.context;t.save(),t.imageSmoothingEnabled=!1,this.statsPanelBox.clearCanvas(),this.statsPanelBox.contentHeight=.05*this.statsPanelBox.boundingBox.height*Object.keys(translations.german).length+1;var n=this.statsPanelBox.hitboxes.length<=1,e=5;for(var i in translations.german){var o=fillTextWrap(t,'"'+i+'": ',.05*this.statsPanelBox.boundingBox.width,e,.45*this.statsPanelBox.boundingBox.width,"left",.1),s=fillTextWrap(t,'"'+translations.german[i]+'"',.525*this.statsPanelBox.boundingBox.width,e,.45*this.statsPanelBox.boundingBox.width,"left",.1);if(t.drawImage(darkdot,.02*this.statsPanelBox.boundingBox.width,e,12,12),n){var a=new Hitbox({x:.02*this.statsPanelBox.boundingBox.width,y:e,width:13,height:13},{onmousedown:function(){showSimpleInput(_("English:<xmp>"+this.entry+"</xmp>Current Translation:<xmp>"+translations.german[this.entry]+"</xmp>"),_("Submit Translation Recommendation"),"",(function(){document.getElementById("simpleInputFieldText").value}),"Cancel",12)},onmouseenter:function(){showTooltip("","Click to enter a suggestion")},onmouseexit:function(){hideTooltip()}},"pointer","entry_"+Math.floor(e));a.entry=i,this.statsPanelBox.addHitbox(a)}e=Math.max(o.y1+o.height,s.y1+s.height)+8,t.fillRect(.02*this.statsPanelBox.boundingBox.width,e-5,.98*this.statsPanelBox.boundingBox.width,1)}this.statsPanelBox.contentHeight=e+10,restoreCanvasState(t),t.fillStyle="#000000"}}