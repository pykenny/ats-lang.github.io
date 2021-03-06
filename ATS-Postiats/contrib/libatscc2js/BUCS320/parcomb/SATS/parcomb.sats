(*
** For writing ATS code
** that translates into JavaScript
*)

(* ****** ****** *)
//
// HX-2016-11:
// prefix for external names
//
#define
ATS_EXTERN_PREFIX "ats2jspre_BUCS320_"
//
(* ****** ****** *)
//
#define
LIBATSCC_targetloc
"$PATSHOME/contrib/libatscc"
//
(* ****** ****** *)

staload "./../../../basics_js.sats"

(* ****** ****** *)
//
#include
"{$LIBATSCC}/BUCS320/parcomb/SATS/parcomb.sats"
//
(* ****** ****** *)

(* end of [parcomb.sats] *)
