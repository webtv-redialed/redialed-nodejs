var minisrv_service_file = true;

headers = `200 OK
Connection: Keep-Alive
Content-Type: text/html`;

data = `<HTML>
<HEAD>
<TITLE>
Center the screen
</TITLE>
<DISPLAY >
</HEAD>
<sidebar width=110> <table cellspacing=0 cellpadding=0 BGCOLOR=452a36>
<tr>
<td colspan=3 abswidth=104 absheight=4>
<td rowspan=99 width=6 absheight=420 valign=top align=left>
<img src="wtv-home:/ROMCache/Shadow.gif" width=6 height=420>
<tr>
<td abswidth=6>
<td abswidth=92 absheight=76>
<table href="wtv-home:/home" absheight=76 cellspacing=0 cellpadding=0>
<tr>
<td align=right>
<img src="${minisrv_config.config.service_logo}" width=87 height=67>
</table>
<td abswidth=6>
<tr><td absheight=5 colspan=3>
<table cellspacing=0 cellpadding=0>
<tr><td abswidth=104 absheight=2 valign=middle align=center bgcolor=2e1e26>
<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=1>
<tr><td abswidth=104 absheight=1 valign=top align=left>
<tr><td abswidth=104 absheight=2 valign=top align=left bgcolor=6b4657>
<img src="wtv-home:/ROMCache/Spacer.gif" width=1 height=1>
</table>
<tr><td absheight=${session_data.hasCap("client-has-tuner") ? 132 : 171}>
<tr><td absheight=${session_data.hasCap("client-has-tuner") ? 166 : 123} align=right colspan=3>
<img src="${session_data.hasCap("client-has-tuner") ? "wtv-setup:/ROMCache/Settings" : "images/Setup"}Banner.gif" width=54 height=${session_data.hasCap("client-has-tuner") ? 166 : 123}>
<tr><td absheight=41>
</table>
</sidebar>
<BODY BGCOLOR="#191919" TEXT="#42CC55" LINK="36d5ff" VLINK="36d5ff" FONTSIZE="${session_data.isJapaneseClient() ? `medium` : `large`}"
hspace=0 vspace=0>            
<table cellspacing=0 cellpadding=0>
<tr>
<td abswidth=14>
<td colspan=3>
<table cellspacing=0 cellpadding=0>
<tr>
<td valign=center absheight=80>
<font size="+2" color="E7CE4A"><blackface><shadow>
Center the screen
</table>
<td abswidth=20>
<TR>
<td>
<td WIDTH=198 HEIGHT=244 VALIGN=top ALIGN=left>
You can adjust the position of WebTV pages on your screen using these arrows. This is useful if WebTV looks off-center on your television.
<TD WIDTH=20>
<TD WIDTH=198 VALIGN=top ALIGN=left>
<FORM><CENTER>
<BR><BR><BR><BR><BR>
<TABLE cellspacing=4>
<TR>
<TD>
<TD align=center><A HREF="client:adjustactivearea?xadj=0&yadj=-1"><IMG src="images/UpGreenArrow.gif"></A>
<TD>
<TR>
<TD align=right><A HREF="client:adjustactivearea?xadj=-1&yadj=0"><IMG src="images/LeftGreenArrow.gif"></A>
<TD align=center><A HREF="client:adjustactivearea?xadj=0&yadj=0" SELECTED><IMG src="images/ResetButton.gif"></A>
<TD align=left><A HREF="client:adjustactivearea?xadj=1&yadj=0"><IMG src="images/RightGreenArrow.gif"></A>
<TR>
<TD>
<TD align=center><A HREF="client:adjustactivearea?xadj=0&yadj=1"><IMG src="images/DownGreenArrow.gif"></A>
<TD>
</TABLE>
</CENTER></FORM>
<TD>
<TR>
<TD>
<TD COLSPAN=4 HEIGHT=7 VALIGN=top ALIGN=left>
<tr>
<TD>
<td colspan=4 height=2 valign=middle align=center bgcolor="2B2B2B">
<img src="wtv-home:/ROMCache/Spacer.gif" width=436 height=1>
<tr>
<TD>
<td colspan=4 height=1 valign=top align=left>
<tr>
<TD>
<td colspan=4 height=2 valign=top align=left bgcolor="0D0D0D">
<img src="wtv-home:/ROMCache/Spacer.gif" width=436 height=1>
<TR>
<TD>
<TD COLSPAN=4 HEIGHT=4 VALIGN=top ALIGN=left>
<TR>
<TD>
<TD COLSPAN=3 VALIGN=top ALIGN=right>
<FORM
action="client:goback">
<FONT COLOR="#E7CE4A" SIZE=-1><SHADOW>
<INPUT TYPE=SUBMIT BORDERIMAGE="file://ROM/Borders/ButtonBorder2.bif" Value=Done NAME="Done" USESTYLE WIDTH=103>
</SHADOW></FONT></FORM>
<TD>
</TABLE>
</BODY>
</HTML>
`;
