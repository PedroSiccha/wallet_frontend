<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

html , body{
	
  height:100%;
  
 }

.right_col{
  padding:10px 20px;
  margin-left:70px;
  z-index:2
}

.right_col{
  background:#F7F7F7
}

.right_col{
  padding:10px 20px 0;margin-left:230px
}

.right_col{
  width:100%;padding-right:0
}

.right_col{
  padding:10px!important
}

.top_tiles{
  margin-bottom:0
}

.top_tiles h2{
  font-size:30px;
  line-height:30px;
  margin:3px 0 7px;
  font-weight:700
}

.col-lg-1,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-md-1,.col-md-10,.col-md-11,.col-md-12,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-55,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-sm-1,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-xs-1,.col-xs-10,.col-xs-11,.col-xs-12,.col-xs-2,.col-xs-3,.col-xs-4,.col-xs-5,.col-xs-6,.col-xs-7,.col-xs-8,.col-xs-9{
  position:relative;
  min-height:1px;
  float:left;
  padding-right:10px;
  padding-left:10px
}

.tile-stats.sparkline{
  padding:10px;
  text-align:center
}

.tile-stats{
  position:relative;
  display:block;
  margin-bottom:12px;
  border:1px solid #E4E4E4;
  -webkit-border-radius:5px;
  overflow:hidden;
  padding-bottom:5px;
  background-clip:padding-box;
  -moz-border-radius:5px;
  -moz-background-clip:padding;
  border-radius:5px;
  background:#FFF;
  transition:all .3s ease-in-out
}

.tile-stats:hover .icon i{
  animation-name:transformAnimation;
  animation-duration:.5s;
  animation-iteration-count:1;
  color:rgba(58,58,58,.41);
  animation-timing-function:ease;
  animation-fill-mode:forwards;
  -webkit-animation-name:transformAnimation;
  -webkit-animation-duration:.5s;
  -webkit-animation-iteration-count:1;
  -webkit-animation-timing-function:ease;
  -webkit-animation-fill-mode:forwards;
  -moz-animation-name:transformAnimation;
  -moz-animation-duration:.5s;
  -moz-animation-iteration-count:1;
  -moz-animation-timing-function:ease;
  -moz-animation-fill-mode:forwards
}

.tile-stats .icon{
  width:20px;
  height:20px;
  color:#BAB8B8;
  position:absolute;
  right:53px;
  top:22px;
  z-index:1
}

.tile-stats .icon i{
  margin:0;
  font-size:60px;
  line-height:0;
  vertical-align:bottom;
  padding:0
}

.tile-stats .count{
  font-size:38px;
  font-weight:700;
  line-height:1.65857
}

.tile-stats .count,.tile-stats h3,.tile-stats p{
  position:relative;
  margin:0 0 0 10px;
  z-index:5;
  padding:0
}

.tile-stats h3{
  color:#BAB8B8
}

.tile-stats p{
  margin-top:5px;
  font-size:12px
}

.tile-stats>.dash-box-footer{
  position:relative;
  text-align:center;
  margin-top:5px;
  padding:3px 0;
  color:#fff;
  color:rgba(255,255,255,.8);
  display:block;
  z-index:10;
  background:rgba(0,0,0,.1)
}

.tile-stats>.dash-box-footer:hover{
  color:#fff;
  background:rgba(0,0,0,.15)
}

.row{
  margin-right:-10px;
  margin-left:-10px
}

.row{
  margin-bottom:0
}

.row .col-xs-2{
  padding:0
}

.row{
  margin-bottom:5px
}

.dataTables_wrapper>.row{
  overflow:auto!important
}

.x_panel{
  position:relative
}

.x_panel,.x_title{
  margin-bottom:10px
}

.x_panel{
  width:100%;
  padding:10px 17px;
  display:inline-block;
  background:#fff;
  border:1px solid #E6E9ED;
  -webkit-column-break-inside:avoid;
  -moz-column-break-inside:avoid;
  opacity:1;
  transition:all .2s ease
}

.x_title h2,table.tile_info td p{
  white-space:nowrap;
  text-overflow:ellipsis
}

.site_title,.x_title h2,table.tile_info td p{
  text-overflow:ellipsis
}

.x_title h2,table.tile_info td p{
  overflow:hidden
}

.x_title h2{
  width:62%;
  font-size:17px
}

.x_title h2 small{
  display:none
}

.x_title{
  border-bottom:2px solid #E6E9ED;
  padding:1px 5px 6px
}

.x_title .filter{
  width:40%;
  float:right
}

.x_content,table.tile td ul li a,table.tile_info{
  width:100%
}

.x_title h2{
  margin:5px 0 6px;
  float:left;
  display:block
}

.x_title h2 small{
  margin-left:10px
}

.x_title span{
  color:#BDBDBD
}

.x_title{
  padding:5px 5px 7px
}

.dashboard_graph .x_title h3{
  margin:0;
  font-weight:400
}

.h1,.h2,.h3,h1,h2,h3{
  margin-top:10px;
  margin-bottom:10px
}

.hidden-small{
  visibility:hidden
}

.x_title h2 small{
  display:none
}

.x_title h2 small{
  margin-left:10px
}

.mail_list h3 small{
  float:right;
  color:#ADABAB;
  font-size:11px;
  line-height:20px
}

.switchery>small{
  width:20px;
  height:20px
}

.clearfix:after,form:after{
  content:".";
  display:block;
  height:0;
  clear:both;
  visibility:hidden
}

.x_content,.x_panel{
  position:relative
}

.x_content,table.tile td ul li a,table.tile_info{
  width:100%
}

.x_content{
  padding:0 5px 6px;
  float:left;
  clear:both;
  margin-top:5px
}

.x_content h4{
  font-size:16px;
  font-weight:500
}

.form-horizontal .control-label{
  padding-top:8px
}

.form-horizontal .form-group{
  margin-right:0;
  margin-left:0
}

.form-horizontal .form-group{
  margin-right:0;
  margin-left:0
}

.form-group{
  margin-bottom:10px
}

.form-group.has-feedback span{
  display:block!important
}

.form-group .btn{
  margin-bottom:-6px
}

.form-horizontal .control-label{
  padding-top:8px
}

.top_search .form-control{
  box-shadow:inset 0 1px 0 rgba(0,0,0,.075);
  border-radius:25px 0 0 25px;
  padding-left:20px;
  border:1px solid rgba(221,226,232,.49)
}

.top_search .form-control:focus{
  border:1px solid rgba(221,226,232,.49);
  border-right:0
}

.form-control{
  border-radius:0;
  width:100%
}

.form-control:focus{
  border-color:#CCD0D7;
  box-shadow:none!important
}

.form-control-feedback{
  margin-top:8px;
  height:23px;
  color:#bbb;
  line-height:24px;
  font-size:15px
}

.form-control-feedback.left{
  border-right:1px solid #ccc;
  left:13px
}

.form-control-feedback.right{
  border-left:1px solid #ccc;
  right:13px
}

.form-control.has-feedback-left{
  padding-left:45px
}

.form-control.has-feedback-right{
  padding-right:45px
}

.form-group{
  margin-bottom:10px
}

.cropper .docs-buttons>.btn,.cropper .docs-buttons>.btn-group,.cropper .docs-buttons>.form-control{
  margin-right:5px;
  margin-bottom:10px
}

.btn{
  border-radius:3px
}

a.btn-danger,a.btn-primary,a.btn-success,a.btn-warning{
  color:#fff
}

.btn-success{
  background:#26B99A;
  border:1px solid #169F85
}

.btn-success.active,.btn-success:active,.btn-success:focus,.btn-success:hover,.open .dropdown-toggle.btn-success{
  background:#169F85
}

.error-message {
      color: red;
      margin-top: 10px;
    }

</style>
