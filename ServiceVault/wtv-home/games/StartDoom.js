var minisrv_service_file = true;

headers = `200 OK
Connection: Keep-Alive
Content-Type: text/html`

data = `
<html>

<head>
<title>Starting game</title>
<DISPLAY noscroll nologo nooptions noreconnectalert notvaudio>
</head>

<body bgcolor="#281f26" background="Pattern_Games.gif" text="#cbcbcb" link="#4489a8"
hspace="0" vspace="0" fontsize="large" noscroll hideoptions>

<script src="GameCode.js">
</script>
<table cellspacing="0" cellpadding="0" cellborder="0">
  <tr>
    <td background="GamesShadowLogo.gif" width="104" height="80" valign="top" align="left"><spacer type="block" WIDTH="11" HEIGHT="11"><br>
<spacer type="block" WIDTH="10" HEIGHT="1">    <img src="file://ROM/Cache/WebTVLogoJewel.gif" width="87"
    height="67"> </td>
    <td width="456" height="80" valign="top" align="center"><img src="GamesBanner.gif"
    width="456" height="50"><br>
    <img src="file://rom/tvimages/Shadow_Horizontal.gif" width="456" height="6"> </td>
  </tr>
</table>


  <table cellspacing="0" cellpadding="0">
    <tr>
      <td absheight="291" abswidth="555" valign="top" align="left">
	    <table cellspacing="0" cellpadding="0">
          <tr>
            <td absheight="25"></td>
          </tr>
          <tr>
            <td abswidth="62"></td>
            <td valign=top>
		      <table cellspacing="0" cellpadding="0">
                <tr>
                  <td valign="top" absheight="40"><font size="+2" color="#ffcf69"><shadow>
				  Preparing game</shadow></font> </td>
                </tr>
				<tr>
			<td height="80" valign="top" align="left"><font size="-1" color="#989898">
			It will take a few moments for the game to begin.
          </td>
		      </tr>
              </table>
            </td>
            <td width="26"></td>
            <td width="198" valign="top" align="center">
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
<script>
  function fadeToBlack() {
    go("StartDoom2");
  }
  setTimeout("fadeToBlack()", 8*1000);
</script>
</body>
</html>
`;