/*
**
** The JavaScript code is generated by atscc2js
** The starting compilation time is: 2015-10-29: 21h:56m
**
*/

/* ATSextcode_beg() */
//
function
ats2js_worker_channeg_new_file
  (file) { var ch = new Worker(file); return ch; }
//
/* ATSextcode_end() */

/* ATSextcode_beg() */
//
function
ats2js_worker_channeg_close(ch) { return ch.terminate(); }
//
/* ATSextcode_end() */

/* ATSextcode_beg() */
//
function
ats2js_worker_channeg_send(chn, k0)
{
  chn.onmessage =
  function(event)
    { return ats2jspre_cloref2_app(k0, chn, event.data); };
  return/*void*/;
}
function
ats2js_worker_channeg_recv(chn, x0, k0)
{
  chn.postMessage(x0); return ats2jspre_cloref1_app(k0, chn);
}
//
/* ATSextcode_end() */

/* ATSextcode_beg() */
//
function
theExample_dats_get_value()
{
  return document.getElementById("theExample_dats").value;
}
function
theExample_dats_c_set_value(code)
{
  return document.getElementById("theExample_dats_c").value = code;
}
//
function
theExample_patsopt_optstr_get_value()
{
  return document.getElementById("theExample_patsopt_optstr").value;
}
//
/* ATSextcode_end() */

function
__patsfun_7__closurerize(env0, env1)
{
  return [function(cenv, arg0, arg1) { return __patsfun_7(cenv[1], cenv[2], arg0, arg1); }, env0, env1];
}


function
__patsfun_8__closurerize(env0)
{
  return [function(cenv, arg0) { return __patsfun_8(cenv[1], arg0); }, env0];
}


function
__patsfun_9__closurerize(env0)
{
  return [function(cenv, arg0, arg1) { return __patsfun_9(cenv[1], arg0, arg1); }, env0];
}


function
__patsfun_18__closurerize()
{
  return [function(cenv, arg0) { return __patsfun_18(arg0); }];
}


function
_057_home_057_hwxi_057_Research_057_ATS_055_Postiats_057_utils_057_libatsopt_057_JS_057_TEST_057_wktest_libatsopt_056_dats__theExample_patsopt_getarg()
{
//
// knd = 0
  var tmpret11
  var tmp12
  var tmp13
  var tmp14
  var tmp15
  var tmp16
  var tmp17
  var tmp24
  var tmplab, tmplab_js
//
  // __patsflab_theExample_patsopt_getarg
  tmp12 = theExample_dats_get_value();
  tmp13 = [1, tmp12];
  tmp14 = null;
  tmp15 = [tmp13, tmp14];
  tmp16 = theExample_patsopt_optstr_get_value();
  tmp17 = tmp16.split(" ");
  tmp24 = ats2jspre_JSarray_length(tmp17);
  tmpret11 = aux_5(tmp17, tmp24, tmp15);
  return tmpret11;
} // end-of-function


function
aux_5(env0, arg0, arg1)
{
//
// knd = 1
  var apy0
  var apy1
  var tmpret18
  var tmp19
  var tmp20
  var tmp21
  var tmp22
  var tmp23
  var funlab_js
  var tmplab, tmplab_js
//
  while(true) {
    funlab_js = 0;
    // __patsflab_aux_5
    tmp19 = ats2jspre_gt_int0_int0(arg0, 0);
    if(tmp19) {
      tmp20 = ats2jspre_sub_int0_int0(arg0, 1);
      tmp22 = ats2jspre_JSarray_get_at(env0, tmp20);
      tmp21 = [0, tmp22];
      tmp23 = [tmp21, arg1];
      // ATStailcalseq_beg
      apy0 = tmp20;
      apy1 = tmp23;
      arg0 = apy0;
      arg1 = apy1;
      funlab_js = 1; // __patsflab_aux_5
      // ATStailcalseq_end
    } else {
      tmpret18 = arg1;
    } // endif
    if (funlab_js > 0) continue; else return tmpret18;
  } // endwhile-fun
} // end-of-function


function
_057_home_057_hwxi_057_Research_057_ATS_055_Postiats_057_utils_057_libatsopt_057_JS_057_TEST_057_wktest_libatsopt_056_dats__theExample_patsopt_arglst(arg0, arg1)
{
//
// knd = 0
  var tmp26
  var tmplab, tmplab_js
//
  // __patsflab_theExample_patsopt_arglst
  tmp26 = ats2js_worker_channeg_new_file("./libatsopt_ext_worker.js");
  ats2js_worker_channeg_send(tmp26, __patsfun_7__closurerize(arg0, arg1));
  return/*_void*/;
} // end-of-function


function
__patsfun_7(env0, env1, arg0, arg1)
{
//
// knd = 0
  var tmplab, tmplab_js
//
  // __patsflab___patsfun_7
  ats2js_worker_channeg_recv(arg0, env0, __patsfun_8__closurerize(env1));
  return/*_void*/;
} // end-of-function


function
__patsfun_8(env0, arg0)
{
//
// knd = 0
  var tmplab, tmplab_js
//
  // __patsflab___patsfun_8
  ats2js_worker_channeg_send(arg0, __patsfun_9__closurerize(env0));
  return/*_void*/;
} // end-of-function


function
__patsfun_9(env0, arg0, arg1)
{
//
// knd = 0
  var tmp30
  var tmp44
  var tmp45
  var tmp46
  var tmp48
  var tmp50
  var tmplab, tmplab_js
//
  // __patsflab___patsfun_9
  tmp30 = _057_home_057_hwxi_057_Research_057_ATS_055_Postiats_055_contrib_057_contrib_057_libatscc_057_libatscc2js_057_SATS_057_Worker_057_channel_056_sats__chmsg_parse__3__1(arg1);
  ats2js_worker_channeg_close(arg0);
  tmp44 = tmp30[0];
  tmp45 = tmp30[1];
  tmp46 = tmp30[2];
  tmp48 = ats2jspre_eq_int0_int0(tmp44, 0);
  if(tmp48) {
    theExample_dats_c_set_value(tmp45);
  } else {
    // ATSINSmove_void
  } // endif
  tmp50 = ats2jspre_gt_int0_int0(tmp44, 0);
  if(tmp50) {
    theExample_dats_c_set_value(tmp46);
  } else {
    // ATSINSmove_void
  } // endif
  env0[0](env0, tmp44);
  return/*_void*/;
} // end-of-function


function
_057_home_057_hwxi_057_Research_057_ATS_055_Postiats_055_contrib_057_contrib_057_libatscc_057_libatscc2js_057_SATS_057_Worker_057_channel_056_sats__chmsg_parse__3__1(arg0)
{
//
// knd = 0
  var tmpret4__1
  var tmp5__1
  var tmp6__1
  var tmp7__1
  var tmp8__1
  var tmp9__1
  var tmp10__1
  var tmplab, tmplab_js
//
  // __patsflab_chmsg_parse
  tmp5__1 = arg0[0];
  tmp6__1 = arg0[1];
  tmp7__1 = arg0[2];
  tmp8__1 = _057_home_057_hwxi_057_Research_057_ATS_055_Postiats_055_contrib_057_contrib_057_libatscc_057_libatscc2js_057_SATS_057_Worker_057_channel_056_sats__chmsg_parse__11__1(tmp5__1);
  tmp9__1 = _057_home_057_hwxi_057_Research_057_ATS_055_Postiats_055_contrib_057_contrib_057_libatscc_057_libatscc2js_057_SATS_057_Worker_057_channel_056_sats__chmsg_parse__13__1(tmp6__1);
  tmp10__1 = _057_home_057_hwxi_057_Research_057_ATS_055_Postiats_055_contrib_057_contrib_057_libatscc_057_libatscc2js_057_SATS_057_Worker_057_channel_056_sats__chmsg_parse__13__2(tmp7__1);
  tmpret4__1 = [tmp8__1, tmp9__1, tmp10__1];
  return tmpret4__1;
} // end-of-function


function
_057_home_057_hwxi_057_Research_057_ATS_055_Postiats_055_contrib_057_contrib_057_libatscc_057_libatscc2js_057_SATS_057_Worker_057_channel_056_sats__chmsg_parse__11__1(arg0)
{
//
// knd = 0
  var tmpret38__1
  var tmplab, tmplab_js
//
  // __patsflab_chmsg_parse
  tmpret38__1 = parseInt(arg0);
  return tmpret38__1;
} // end-of-function


function
_057_home_057_hwxi_057_Research_057_ATS_055_Postiats_055_contrib_057_contrib_057_libatscc_057_libatscc2js_057_SATS_057_Worker_057_channel_056_sats__chmsg_parse__13__1(arg0)
{
//
// knd = 0
  var tmpret40__1
  var tmplab, tmplab_js
//
  // __patsflab_chmsg_parse
  tmpret40__1 = arg0;
  return tmpret40__1;
} // end-of-function


function
_057_home_057_hwxi_057_Research_057_ATS_055_Postiats_055_contrib_057_contrib_057_libatscc_057_libatscc2js_057_SATS_057_Worker_057_channel_056_sats__chmsg_parse__13__2(arg0)
{
//
// knd = 0
  var tmpret40__2
  var tmplab, tmplab_js
//
  // __patsflab_chmsg_parse
  tmpret40__2 = arg0;
  return tmpret40__2;
} // end-of-function


function
theExample_patsopt_onclick()
{
//
// knd = 0
  var tmp52
  var tmplab, tmplab_js
//
  // __patsflab_theExample_patsopt_onclick
  tmp52 = _057_home_057_hwxi_057_Research_057_ATS_055_Postiats_057_utils_057_libatsopt_057_JS_057_TEST_057_wktest_libatsopt_056_dats__theExample_patsopt_getarg();
  _057_home_057_hwxi_057_Research_057_ATS_055_Postiats_057_utils_057_libatsopt_057_JS_057_TEST_057_wktest_libatsopt_056_dats__theExample_patsopt_arglst(tmp52, __patsfun_18__closurerize());
  return/*_void*/;
} // end-of-function


function
fpost_17(arg0)
{
//
// knd = 0
  var tmp54
  var tmplab, tmplab_js
//
  // __patsflab_fpost_17
  // ATScaseofseq_beg
  tmplab_js = 1;
  while(true) {
    tmplab = tmplab_js; tmplab_js = 0;
    switch(tmplab) {
      // ATSbranchseq_beg
      case 1: // __atstmplab0
      if(!ATSCKpat_int(arg0, 0)) { tmplab_js = 3; break; }
      case 2: // __atstmplab1
      ats2jspre_alert("Patsopt succeeded!");
      break;
      // ATSbranchseq_end
      // ATSbranchseq_beg
      case 3: // __atstmplab2
      if(!ATSCKpat_int(arg0, 1)) { tmplab_js = 5; break; }
      case 4: // __atstmplab3
      ats2jspre_alert("Patsopt yielded an error!");
      break;
      // ATSbranchseq_end
      // ATSbranchseq_beg
      case 5: // __atstmplab4
      tmp54 = ats2jspre_gte_int0_int0(arg0, 2);
      if(!ATSCKpat_bool(tmp54, true)) { tmplab_js = 6; break; }
      ats2jspre_alert("Patsopt yielded some errors!");
      break;
      // ATSbranchseq_end
      // ATSbranchseq_beg
      case 6: // __atstmplab5
      // ATSINSmove_void
      break;
      // ATSbranchseq_end
    } // end-of-switch
    if (tmplab_js === 0) break;
  } // endwhile
  // ATScaseofseq_end
  return/*_void*/;
} // end-of-function


function
__patsfun_18(arg0)
{
//
// knd = 0
  var tmplab, tmplab_js
//
  // __patsflab___patsfun_18
  fpost_17(arg0);
  return/*_void*/;
} // end-of-function

// dynloadflag_minit
var _057_home_057_hwxi_057_Research_057_ATS_055_Postiats_057_utils_057_libatsopt_057_JS_057_TEST_057_wktest_libatsopt_056_dats__dynloadflag = 0;

function
_057_home_057_hwxi_057_Research_057_ATS_055_Postiats_057_utils_057_libatsopt_057_JS_057_TEST_057_wktest_libatsopt_056_dats__dynload()
{
//
// knd = 0
  var tmplab, tmplab_js
//
  // ATSdynload()
  // ATSdynloadflag_sta(_057_home_057_hwxi_057_Research_057_ATS_055_Postiats_057_utils_057_libatsopt_057_JS_057_TEST_057_wktest_libatsopt_056_dats__dynloadflag(126))
  if(ATSCKiseqz(_057_home_057_hwxi_057_Research_057_ATS_055_Postiats_057_utils_057_libatsopt_057_JS_057_TEST_057_wktest_libatsopt_056_dats__dynloadflag)) {
    _057_home_057_hwxi_057_Research_057_ATS_055_Postiats_057_utils_057_libatsopt_057_JS_057_TEST_057_wktest_libatsopt_056_dats__dynloadflag = 1 ; // flag is set
  } // endif
  return/*_void*/;
} // end-of-function


function
test_libatsopt_dynload()
{
//
// knd = 0
  var tmplab, tmplab_js
//
  _057_home_057_hwxi_057_Research_057_ATS_055_Postiats_057_utils_057_libatsopt_057_JS_057_TEST_057_wktest_libatsopt_056_dats__dynload();
  return/*_void*/;
} // end-of-function


/* ATSextcode_beg() */
//
function
the_libatsopt_main()
{
  jQuery(document).ready(function(){test_libatsopt_dynload();});
}
//
/* ATSextcode_end() */

/* ****** ****** */

/* end-of-compilation-unit */
