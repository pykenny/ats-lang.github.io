(***********************************************************************)
(*                                                                     *)
(*                         Applied Type System                         *)
(*                                                                     *)
(***********************************************************************)

(*
** ATS/Postiats - Unleashing the Potential of Types!
** Copyright (C) 2010-2013 Hongwei Xi, ATS Trustful Software, Inc.
** All rights reserved
**
** ATS is free software;  you can  redistribute it and/or modify it under
** the terms of  the GNU GENERAL PUBLIC LICENSE (GPL) as published by the
** Free Software Foundation; either version 3, or (at  your  option)  any
** later version.
**
** ATS is distributed in the hope that it will be useful, but WITHOUT ANY
** WARRANTY; without  even  the  implied  warranty  of MERCHANTABILITY or
** FITNESS FOR A PARTICULAR PURPOSE.  See the  GNU General Public License
** for more details.
**
** You  should  have  received  a  copy of the GNU General Public License
** along  with  ATS;  see the  file COPYING.  If not, please write to the
** Free Software Foundation,  51 Franklin Street, Fifth Floor, Boston, MA
** 02110-1301, USA.
*)

(* ****** ****** *)

(* Author: Hongwei Xi *)
(* Authoremail: gmhwxiATgmailDOTcom *)
(* Start time: January, 2013 *)

(* ****** ****** *)

#define ATS_DYNLOADFLAG 0 // no dynloading at run-time

(* ****** ****** *)

staload
UN = "prelude/SATS/unsafe.sats"

(* ****** ****** *)

staload
_(*anon*) = "prelude/DATS/integer.dats"
staload
_(*anon*) = "prelude/DATS/integer_size.dats"

(* ****** ****** *)

staload _(*anon*) = "prelude/DATS/filebas.dats"

(* ****** ****** *)

(*
macdef
prelude_fileref_open_opt = fileref_open_opt
*)
macdef
prelude_fileref_get_line_charlst = fileref_get_line_charlst
macdef
prelude_fileref_get_lines_charlstlst = fileref_get_lines_charlstlst
macdef
prelude_fileref_get_line_string = fileref_get_line_string
macdef
prelude_fileref_get_lines_stringlst = fileref_get_lines_stringlst

(* ****** ****** *)

macdef
prelude_streamize_fileref_char = streamize_fileref_char
macdef
prelude_streamize_fileref_line = streamize_fileref_line

(* ****** ****** *)

staload "libats/ML/SATS/basis.sats"
staload "libats/ML/SATS/list0.sats"
staload "libats/ML/SATS/option0.sats"

(* ****** ****** *)

staload "libats/ML/SATS/filebas.sats"

(* ****** ****** *)

(*
implement
fileref_open_opt
  (path, mode) = let
  val opt = prelude_fileref_open_opt (path, mode)
in
  option0_of_option_vt (opt)
end // end of [fileref_open_opt]
*)

(* ****** ****** *)

implement
fileref_get_line_charlst
  (filr) =
(
list0_of_list_vt
  (prelude_fileref_get_line_charlst (filr))
) // end of [fileref_get_line_charlst]

implement
fileref_get_lines_charlstlst
  (filr) =
(
$UN.castvwtp0{list0(charlst0)}
  (prelude_fileref_get_lines_charlstlst (filr))
) // end of [fileref_get_lines_charlstlst]

(* ****** ****** *)

local

staload _(*anon*) = "prelude/DATS/strptr.dats"

in (* in of [local] *)

implement
fileref_get_line_string
  (filr) =
(
strptr2string
  (prelude_fileref_get_line_string(filr))
) // end of [fileref_get_line_string]

implement
fileref_get_lines_stringlst
  (filr) =
(
$UN.castvwtp0{list0(string)}
  (prelude_fileref_get_lines_stringlst(filr))
) // end of [fileref_get_lines_stringlst]

end // end of [local]

(* ****** ****** *)
//
implement
{}(*tmp*)
streamize_fileref_char
  (filr) =
  prelude_streamize_fileref_char(filr)
//
implement
{}(*tmp*)
streamize_fileref_line
  (filr) =
(
$UN.castvwtp0{stream_vt(string)}
  (prelude_streamize_fileref_line(filr))
) // end of [streamize_fileref_line]
//
(* ****** ****** *)

implement
{}(*tmp*)
streamize_fileref_word
  (filr) =
  auxmain(filr) where
{
//
fun
auxmain
(
  filr: FILEref
) :
stream_vt(string) =
$ldelay (
//
let
//
  val
  word =
  fileref_get_word<>(filr)
  val test = strptr_is_null(word)
//
  prval () = lemma_strptr_param(word)
//
in
  if test
    then let
    prval () =
      strptr_free_null(word) in stream_vt_nil()
    // end of [prval]
    end // end of [then]
    else stream_vt_cons(strptr2string(word), auxmain(filr))
  // end of [if]
end // end of [let]
//
) (* end of [auxmain] *)
//
} (* end of [streamize_fileref_word] *)

(* ****** ****** *)

(* end of [filebas.dats] *)
