(this["webpackJsonpmapbox-react"]=this["webpackJsonpmapbox-react"]||[]).push([[0],{12:function(e,t,a){e.exports=a(18)},18:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(2),c=a(5),o=a(4),l=a(0),i=a.n(l),s=a(10),u=a.n(s),m=a(7),p=a.n(m);p.a.accessToken="pk.eyJ1IjoiZG9saW4iLCJhIjoiY2lvOWRxbzRqMDMydXZna3E1bXE2aWpxcCJ9.zG9qT7RM6qaWd62t4Da0bg";var b=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={lng:-100,lat:40,zoom:4},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=new p.a.Map({container:this.mapContainer,style:"mapbox://styles/mapbox/light-v10",center:[this.state.lng,this.state.lat],zoom:this.state.zoom});t.on("move",(function(){e.setState({lng:t.getCenter().lng.toFixed(4),lat:t.getCenter().lat.toFixed(4),zoom:t.getZoom().toFixed(2)})}))}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement("div",{className:"mapContainer",ref:function(t){return e.mapContainer=t}}))}}]),a}(i.a.Component),v=a(11),d=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"sidebar"},i.a.createElement("div",{className:"title"},"cars & bids map"),i.a.createElement("hr",null),i.a.createElement(v.a,null))}}]),a}(i.a.Component),h=(a(17),function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(e){return Object(n.a)(this,a),t.call(this,e)}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(d,null),i.a.createElement(b,null))}}]),a}(i.a.Component));u.a.render(i.a.createElement(h,null),document.getElementById("app"))}},[[12,1,2]]]);
//# sourceMappingURL=main.5b91a0dc.chunk.js.map