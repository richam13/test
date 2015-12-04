//147087 Code for handling special charecters in POINT - start
var isCtrl = false;
document.onkeyup=function(e)
{
	if(window.event.keyCode== 17) 
	isCtrl=false;
}
document.onkeydown=function(e)
{
	if(window.event.keyCode== 17) 
		isCtrl=true;
	if(window.event.keyCode== 86 && isCtrl == true) 
	{
		var clpData = window.clipboardData.getData("Text");
		var parsestring2=clpData.replace(/[^=\[\]\\;\',\.\/a-zA-Z0-9~!@#\$\^%&*()_+{}|:"<>?`\-\n\r\t]/g, " ");
		///ÿþýüûúùø÷öõôóòñðïîíìëêéèçæåäãâáàßÞÝÜÛÚÙØ×ÖÕÔÒÓÒÑÐÏÎÍÌËÊÉÈÇÆÅÄÃÂÁÀ¿¾½¼»º¹¸·¶µ´³²±°¯®­¬«ª©¨§¦¥¤£¢¡’‘€Š/
		window.clipboardData.setData("Text", parsestring2);
	}
}

function right(e) 
{
	if (navigator.appName == 'Netscape' && (e.which == 3 || e.which == 2))
		return false;
	else if (navigator.appName == 'Microsoft Internet Explorer' && (event.button == 2 || event.button == 3)) 
	{
		var clpData = window.clipboardData.getData("Text");
		var parsestring2=clpData.replace(/[^=\[\]\\;\',\.\/a-zA-Z0-9~!@#\$\^%&*()_+{}|:"<>?`\-\n\r\t]/g, " ");
		window.clipboardData.setData("Text", parsestring2);
	}
return true;       
}

document.onmousedown=right;
document.onmouseup=right;
if (document.layers) window.captureEvents(Event.MOUSEDOWN);
if (document.layers) window.captureEvents(Event.MOUSEUP);
window.onmousedown=right;
window.onmouseup=right;
//147087 - Code for handling special charecters in POINT - end


//Disable right click - start
/*
function right(e) {
if (navigator.appName == 'Netscape' && 
(e.which == 3 || e.which == 2))
return false;
else if (navigator.appName == 'Microsoft Internet Explorer' && 
(event.button == 2 || event.button == 3)) {
alert("Sorry, right click is not allowed.");
return false;
}
return true;       
}

document.onmousedown=right;
document.onmouseup=right;
if (document.layers) window.captureEvents(Event.MOUSEDOWN);
if (document.layers) window.captureEvents(Event.MOUSEUP);
window.onmousedown=right;
window.onmouseup=right;
*/
//Disable right click - end
/* BAS1030213A1 - start Quick Quote CVH */
function doQQPolSearch(RequestCode,Target)
{
document.forms[0].TMPREQUESTCODE.value = document.forms[0].REQUESTCODE.value;
document.forms[0].tmptarget.value = document.forms[0].target.value;

var url = "../servlet/BaseQuickQuotePOINTManager";
document.forms[0].REQUESTCODE.value = RequestCode;
document.forms[0].target.value=Target;
doSubmit(url);
}

function doQQNextPage(Target) {
	{
	 if (!ValidatePage()) return;
	}	
	var url = "../servlet/BaseQuickQuotePOINTManager";
	document.forms[0].REQUESTCODE.disabled=true;
	document.forms[0].target.value=Target;
	doSubmit(url);
}

function doQQPreviousPage(Target) {
	{
	 if (!ValidatePage()) return;
	}
	var url = "../servlet/BaseQuickQuotePOINTManager";
	document.forms[0].REQUESTCODE.disabled=true;
	document.forms[0].target.value=Target;
	doSubmit(url);
}

function doQQProcessPage(SetRequestCode) {
	var url = "../servlet/BaseQuickQuotePOINTManager?&REQUESTCODE="+SetRequestCode+"";
	doSubmit(url);
}
/* BAS1030213A1 - End  Quick Quote CVH  */
function ClearDropDownCtl(objCtl) {
  //Be sure we are referencing a dropdown control
  if ( typeof(objCtl) == 'undefined' ) return false;
	if( (objCtl.type != "select-one") && (objCtl.type != "select-multiple") ) return false;
	for ( var j = objCtl.options.length - 1; j >= 0; j-- ) objCtl.options[j] = null;
	  objCtl.options[objCtl.options.length] = new Option('', '');
  }
function FillDropDownCtl(objCtl, selValue, selDescription) {
  if ( typeof(objCtl) == 'undefined' ) return(0);
	if( (objCtl.type != "select-one") && (objCtl.type != "select-multiple") ) {
    objCtl.value = selValue;
	  }
	else {
    objCtl.options[objCtl.options.length] = new Option(selValue, selDescription);
    }
  }
function SetCtlValue(theEl, vVal) {
	var strType;
  if ( typeof(theEl) == 'undefined' ) return(0);
	strType = theEl.type;
	if ( typeof(strType) == "undefined" ) strType = theEl[0].type;
	switch( strType )	{
		case "checkbox": {
			if (vVal == "True" || vVal == "on")
				theEl.checked = true;
			else
				theEl.checked = false;
			break;
      }
		case "radio": {
			for (var i = 0; i < theEl.length; i++) {
				if (theEl[i].value == vVal)
					theEl[i].checked = true;
				else
					theEl[i].checked = false;
        }
			break;
      }
		case "select-one":
		case "select-multiple": {
			var arr;
			arr = vVal.split(", ")
			for ( var j = 0; j < theEl.options.length; j++ )	{
				for( var k = 0; k < arr.length; k++ )	{
					if( theEl.options[j].value == arr[k] )	{
						theEl.options[j].selected = true;
						break;
            }
					else
						theEl.options[j].selected = false;
          }
        }
			break;
      }
		default:
			theEl.value = vVal;
    }
  }
function SynchroniseSetCtlValue(theEl, vVal) {
	var strType;
  if ( typeof(theEl) == 'undefined' ) return(0);
  if( (theEl.type != "select-one") && (theEl.type != "select-multiple") ) return false;
	strType = theEl.type;
  if ( typeof(strType) == "undefined" ) strType = theEl[0].type;
	switch( strType )	{
		case "checkbox": {
			if (vVal == "True" || vVal == "on")
				theEl.checked = true;
			else
				theEl.checked = false;
			break;
      }					
		case "radio": {
			for (var i = 0; i < theEl.length; i++) {
				if (theEl[i].value == vVal)
					theEl[i].checked = true;
				else
					theEl[i].checked = false;
        }
			break;
      }
		case "select-one":
		case "select-multiple": {
			var arr;
			arr = vVal.split(", ")
			for ( var j = 0; j < theEl.options.length; j++ )	{
				for( var k = 0; k < arr.length; k++ )	{
					if( theEl.options[j].value == arr[k] )	{
						theEl.options[j].selected = true;
						break;
            }
					else
						theEl.options[j].selected = false;
          }
        }
			break;
      }
		default:
			theEl.value = vVal;
    }
  }
 /* End of FillControl.js Functions */
/* BAS1030213A1 - start  Quick Quote CVH  */
function setCheckBox(checkBox) {
// BAS1031024A1 Start
	var chk = eval ('document.forms[0].' + checkBox.name);
	if (checkBox.checked == true) 
{	  
	chk[0].value = "Y";
	chk[1].value = "Y";
	if (document.getElementById(checkBox.name+'__1'))
		document.getElementById(checkBox.name+'__1').value = "Y";
}
	  else
{	
	chk[0].value = "N";
	chk[1].value = "N";
	if (document.getElementById(checkBox.name+'__1'))
		document.getElementById(checkBox.name+'__1').value = "N";
}
// BAS1031024A1 End
}
/*	
function ChkBxOnLoadSet(checkBox, checkBox2)
	{
		if (checkBox2.value == "0")
		{
		  checkBox.checked = false;
		  checkBox.value = "0";
		}
		else
		{
		checkBox.checked = true;
		checkBox.value = "1";
		}
	}
/* BAS1030213A1 - End  Quick Quote CVH  */
function setRadioGroupCheck(value, radiogroup)
	{
	for(i=0; i<radiogroup.length; i++)
	    if (value == radiogroup[i].value)
	        {
	        radiogroup[i].checked=true;
	        }
	}
function setRadioGroupValue(radiogroup)
	{
	var x;
	var b;
	if (radiogroup.value != "")
	   {
		for(i=0; i<radiogroup.length; i++)
		    if (radiogroup[i].checked==true)
		        {
			b=radiogroup[i].value;
		        }
		     radiogroup.value = b;
	   }
	else
	for (i=0; i<radiogroup.length; i++)
	if (radiogroup.checked==true)
	   {
	     radiogroup.value=radiogroup[i].value;
                   }
if (radiogroup.value)
  {
        var val = radiogroup.value;
  }
CheckVisibility();
}
function VisibleSet(strCheckFieldName, strDivID, strVisibleBGcolor)
 {
  var strDisplayDisposition, strBackgroundcolor;
  var element = document.getElementById(strDivID);
  if (isBlankOrZero(evaluatePropertyValue(strCheckFieldName))) {
    strDisplayDisposition = 'hidden';
    strBackgroundcolor = 'transparent';
  } else {
    strDisplayDisposition = 'visible';
    strBackgroundcolor = strVisibleBGcolor;
  }
  element.style.visibility = strDisplayDisposition;
  element.style.backgroundColor = strBackgroundcolor;
 }
function evaluatePropertyValue (strName) {
  var strValue = '';
  var obj = document.getElementById(strName);
  if (obj == null) {
    strValue = aData[strName];
  } else  {
    strValue = obj.value;
  }
  if (strValue = "undefined"){
	    strValue = aData[strName];
	}
return strValue;
}
function HidePage(strPageDivisionId)
 {
  var pageDiv = document.getElementById(strPageDivisionId);
  if (pageDiv == null) {
     alert('Error -  ' + strPageDivisionId + ' is not a valid page id');
  } else {
    var iLoopCount = pageDiv.children.length;
    for (var i=0; i < iLoopCount; i++) {
      if (pageDiv.children[i].tagName == 'DIV') {
         pageDiv.style.visibility = 'hidden';
      }
    }
    pageDiv.style.visibility = 'hidden';
  }
 }
function isBlank(s) {
 for(var i = 0; i<s.length;i++) {
     var c= s.charAt(i);
     if(c != ' ') {return false;}
  }
 return true;
}
function isBlankOrZero(s) {
 for(var i = 0; i<s.length;i++) {
     var c= s.charAt(i);
     if(c != ' ' && c !='0' && c != '.') {return false;}
  }
 return true;
}
/* BAS1040217A1 - modified to handle radio group fields which are required entry CVH */
function F_BlankCheck(attName, strMsg, HardEdit) {
var hardReturn = "\r\n";
var oElement = document.getElementById(attName);
var result;
if(oElement!=null) 
{
  var attValue = oElement.getAttribute("VALUE");
  if (IsHidden(attName)) return '';
  if (oElement == null) 
    {
    alert ('Fatal Error!' + '\n' + attName + 'passed to function F_BlankCheck cannot be resolved!');
    }
  else 
    {
      if(oElement.className=='radiogroup')
       {
        result=checkRasdioGroupblank(oElement);
       }
       else
       {
	 var istype=oElement.Datatype;
	//[PS]-WAG3490 - Start
	//if(istype == 'number' || istype == 'Currency' || istype == 'money')
        if(istype == 'number' || istype == 'Currency' || istype == 'money'|| istype == 'date' )	
        //[PS]-WAG3490 - End
	 {
	   result=isBlankOrZero(attValue);
	 }
        else 
         {
	 result=isBlank(attValue);
	 }
       }
      if (result) 
       {
       checkFunctionReturn = 'false';
       oElement.focus();
	if (HardEdit == true)
        return "1" + strMsg + hardReturn;
      else
        return "0" + strMsg + hardReturn;
       }
     }
}
return '';
}
function checkRasdioGroupblank(oElement)
{
var radios=eval('document.all.' + oElement.name);
for(i=0;i<radios.length; i++)
if(radios[i].checked)
return false;
return true;
}
/* BAS1040217A1 - end */
/**********************************************************************************************/
/*The Function should be able to check two control types to see if either of them are blank and pop a message */
/***********************************************************************************************/
function F_BlankorNoneCheck(attName1, attName2, strMsg1, strMsg2, HardEdit) {
  var hardReturn = "\r\n";
  var oElement1 = eval('document.all.' + attName1);
  var oElement2 = eval('document.all.' + attName2);
  var attValue1 = oElement1.value;
  var attValue2 = oElement2.value;
  if (IsHidden(attName1)) return '';
  if (IsHidden(attName2)) return '';
  if (oElement1 == null || oElement2 == null) {
    alert ('Fatal Error!' + '\n' + attName + 'passed to function F_BlankCheck cannot be resolved!');
    }
  else {
/* If attName1 is of control type dropdown and attName2 is of control type textbox */
if( ((attName1.type = "select-one") && (attName1.type = "select-multiple")) && 
    ((attName2.type != "select-one") && (attName2.type != "select-multiple")) )
{
    if (isBlank(attValue1) && isBlank(attValue2)) {
	    if (oElement1.selectedIndex != 0) {
        return '';
        }
	    else {
 	      checkFunctionReturn = 'false';
	      if (HardEdit == true)
          return "1" + strMsg1 + hardReturn;
        else
    	    return "0" + strMsg1 + hardReturn;
          oElement1.focus();
          }
        }
      else if (isBlank(attValue1) || isBlank(attValue2))
	{
  	    if (isBlank(attValue1))
	    {
          checkFunctionReturn = 'false';
  	      if (HardEdit == true)
            return "1" + strMsg1 + hardReturn;
          else
            return "0" + strMsg1 + hardReturn;
            oElement1.focus();
	    }
  	    if (isBlank(attValue2))
	    {
          checkFunctionReturn = 'false';
          if (HardEdit == true)
            return "1" + strMsg2 + hardReturn;
          else
            return "0" + strMsg2 + hardReturn;
            oElement2.focus(); 
    	    }
        }
       else
	    return '';
      }
}
}
function onChangeTab()	{
	var intNewTab;
	var intCurrentTab = document.all.CurrentTab.value;
	if ("TD"==event.srcElement.tagName) {
	   	if (event.srcElement.cellIndex != intCurrentTab) {
			document.all.CurrentTab.value = event.srcElement.cellIndex;
			document.all.PreviousTab.value = intCurrentTab;
			intNewTab = event.srcElement.cellIndex;
			switchPageValue(intNewTab, intCurrentTab);
			doSubmit('Process');
			}
		}
}
function F_Max(attName, attValue, maxNbr, strMsg) {
var oElement = document.getElementById(attName);
  if (oElement == null) {
       alert ('Fatel Error!' + '\n' + attName + 'passed to function F_BlankCheck cannot be resolved!');
      }
  else {
     if (parseInt(attValue) > parseInt(maxNbr)) {
        alert (strMsg);
      oElement.focus();
        }
      }
}
function F_Max_Min(attName, attValue, maxNbr, minNbr, strMsg) {
var oElement = document.getElementById(attName);
  if (oElement == null) {
       alert ('Fatel Error!' + '\n' + attName + 'passed to function F_BlankCheck cannot be resolved!');
      }
  else {
      if ((parseInt(attValue) > parseInt(maxNbr)) || (parseInt(attValue) < parseInt(minNbr))) {
         alert (strMsg);
         oElement.focus();
         }
      }
}
/***************************************************************************************/
/*             Text Field Formatting and Validation Functions  10/25/2001              */
/***************************************************************************************/
var strMaskDelimiters = ".-/%$,{}()[]:" /* date and customized masked fields */
function EditEntry(oCtl) {
  var strDatatype = oCtl.Datatype;
  var iKeyCode = window.event.keyCode;
  if (iKeyCode == 37 || iKeyCode == 39 || iKeyCode == 8  || iKeyCode == 46  ||
      iKeyCode == 9  || iKeyCode == 16 || iKeyCode == 45 || iKeyCode == 20  ||
      iKeyCode == 27 || iKeyCode == 33 || iKeyCode == 34 || iKeyCode == 144 ||
      iKeyCode == 35 || iKeyCode == 36 || iKeyCode == 145) {
     return;
  }
// WAG612--AK-- Start
//RV - Fix for Production issue, when Transfer Payment is not working
if(document.forms[0] != null)
{
//RV - Fix for functionlist endorsement not working issue - start
	if(document.forms[0].REQUESTCODE != null)
	{
	  if (document.forms[0].REQUESTCODE.value == "CPPBCONTCHGRq") 
	  {
		if ((oCtl.name == "BC_POLICY_COMPANY") && (oCtl.value.length==2)) 
	    {
			document.getElementById("BC_KIND_CODE").focus();
		}

	   }
	}
//RV - Fix for functionlist endorsement not working issue - end	
}
//RV - Fix for Production issue, when Transfer Payment is not working

// WAG612--AK-- End
if (oCtl.name == "BC_REASON_AMEND_DIGIT1" ) {
document.getElementById("BC_REASON_AMEND_DIGIT2").focus();
//WAG2844 - Reason Amend Code Highlight consistency - Start
document.getElementById("BC_REASON_AMEND_DIGIT2").select();
//WAG2844 - Reason Amend Code Highlight consistency - End
}
if (oCtl.name == "BC_REASON_AMEND_DIGIT2" ) {
document.getElementById("BC_REASON_AMEND_DIGIT3").focus();
//WAG2844 - Reason Amend Code Highlight consistency - Start
document.getElementById("BC_REASON_AMEND_DIGIT3").select();
//WAG2844 - Reason Amend Code Highlight consistency - End
}
  switch(strDatatype) {
    case "money":
    case "number":
      EditNumericDecimalEntry(oCtl);
      break;
    case "date":
    case "mask":
      EditMaskedEntry(oCtl);
      break;
    case "text":
      EditTextEntry(oCtl);
  }
}
function EditNumericDecimalEntry(oCtl) {
  var strValue = oCtl.value;
  var strReturn ="";
  var strChar;
  var iDecPoint = -1;
  var iDecimal = PParseInt(oCtl.Decimal);
  var iMax = PParseInt(oCtl.Max);
  var iMaxlen = oCtl.maxLength;
  iMaxlen=iMaxlen - 1;
  var decpointfound = false;
  var idiff = iMaxlen - iDecimal;
  for (var i=0; i < strValue.length; i++) {
    strChar = strValue.charAt(i);
    if (CharacterIsANumber(strChar) || strChar == '.' || strChar == '-') {
    	if (strChar == '-' && i > 0)
			break;
        if (strChar == '.') {
           if (iDecPoint == -1 && iDecimal > 0) {
             iDecPoint = i;
	     decpointfound = true;
           } else {
             break;
           }
        }
        if ((iDecPoint > -1 && i > iDecPoint + iDecimal)) {
           break;
        } else {
           if (!isNaN(iMax)) {
             if (iDecPoint == -1 && i == iMax ) {
                break;
             }
           }
	    if ( i >= idiff && !(decpointfound)) {
				break;
				}
           strReturn += strChar;
        }
    }
  }
  oCtl.value=strReturn;
}
function EditMaskedEntry(oCtl) {
  var strValue = oCtl.value;
  var strReturn = '';
  var strMask = oCtl.mask;
//*********** change for zipcode - 179801 Starts 


 if(strMask=="AAAAA-AAAA")
	{
		var isalphaval="NO";
		var isnumalpha="NO";
		if(strValue.length > 5 )
		var j =5;
		else
			j= strValue.length;
// FSIT 185424 - Zip code Issue ( Error 8 digits in zipcode getting submitted) - Starts

		  for (var i = 0; i < j; i++) 
// FSIT 185424 - Zip code Issue ( Error 8 digits in zipcode getting submitted) - Ends
				{
					strChar =  strValue.charAt(i);
					
					
					if (CharacterIsAlpha(strChar)) 
					{
						isalphaval="YES";
					}	
				}
		if(strValue.length > 5 )
		{
		for (var i = 6; i < strValue.length; i++) 
				{
					strChar =  strValue.charAt(i);
					if (CharacterIsAlpha(strChar)) 
					{
						isnumalpha="YES";
					}	
				}

		}
		if(isalphaval=="YES")
		{
			strMask="AAAAAAAAAA";
		
		}
		else if(isalphaval=="NO" && isnumalpha=="YES")
		{
			strMask="#####-AAAA";
		
		}
		else
		{
			strMask="#####-####";
		
		}
		
	}


//*********change for zipcode - 179801 ends

  var strDelimiter = MaskDelimiter(strMask);
  var strPrevDelimiter = '';
  var arrMask = SplitMask(strMask);
  var iDelimitedAmt = SplitMask(strValue).length;
  var k = 0;
  var bCharacterPermitted = false;
  var strChar;
  var strMaskChar;
  var len = strValue.length;
  
  //[PS] - Canada- Start
  if (strDelimiter == null)
  strDelimiter = '';
  //[PS] - Canada- End
  
  /* if mask begins with a delimiter */
  if (strValue.length == 1 && oCtl.Datatype == 'mask') {
	  
  /* If the mask is suppose ???.NNNNN where ? is optional we should allow value like '.99999' */
	 if (strValue == strDelimiter && strMask.indexOf('Z') != -1) {
		strMask = strMask.substring(strMask.indexOf(strDelimiter),strMask.length);
		arrMask = SplitMask(strMask);
		strValue = strValue;
	 }
	 else
		strValue = strDelimiter + strValue;
		
  }  
  if (strValue.indexOf('Z') && strValue.length == len && strValue.substring(0,1) == strDelimiter) {
  	strMask = strMask.substring(strMask.indexOf(strDelimiter),strMask.length);
	arrMask = SplitMask(strMask);
  }
  /* right trim date attributes */
  if (oCtl.Datatype == 'date') {
    var arrValue = SplitMask(strValue);
    for (var i = 0; i < arrValue.length && i < arrMask.length; i++) {
       if (arrValue[i].length > arrMask[i].length) {
         arrValue[i] = arrValue[i].substring(0, arrMask[i].length);
       }
    }
    strValue = arrValue.join(strDelimiter);
  }
  for (var i=0; i < arrMask.length; i++) {
    for (var j=0; j < arrMask[i].length; j++) {
      strChar = strValue.charAt(k++);
      if (oCtl.Datatype == 'date') {
        if (strChar == strDelimiter && iDelimitedAmt <= arrMask.length)  {
          for ( ; j  < arrMask[i].length; j++) {
             strReturn += ' ';
          }
          break;
        }
      }
      if (strChar.length == 0) {
         break;
      }
      strMaskChar =  arrMask[i].charAt(j);
      /* don't repeat delimiter because it's a valid character for ? mask */
      if (strMaskChar == '?' && (strChar == strDelimiter || strChar == strPrevDelimiter)) {
        bCharacterPermitted = false;
      } else {
        bCharacterPermitted = CharacterIsPermitted(strChar, strMaskChar);
      }
      if (bCharacterPermitted) {
        strReturn += strChar;
      
      } else {
        j--;
      }
    } /* end of inner for */
    if (k > strValue.length) {
       break;
    }
    if (i < arrMask.length-1) {
      strReturn += strDelimiter;
      if (strChar != strDelimiter) { /* can be equal to strDelimiter for date entry */
         k++;
      }
      strPrevDelimiter = strDelimiter;
      strDelimiter = MaskDelimiter(strMask.substring(k, strMask.length));
    }
  } /* end of outer for */


  oCtl.value = strReturn;


}
function EditTextEntry(oCtl) {
  var strValue = oCtl.value;
  var iMax = PParseInt(oCtl.Max);
  if (!isNaN(iMax)) {
    if (strValue.length > iMax) {
       oCtl.value = strValue.substring(0, iMax);
    }
  }
}

function ZeroFill(oCtl) {
  if (oCtl.value == "" || oCtl.value == " ") {
     return;
  }
  var strZeros = "";
  var iDiff = (parseInt(oCtl.maxLength) - oCtl.value.length);
// AKM BAS1030606A0 Start  
  if (oCtl.maxLength > 1000)
  {
  	var tocontinue = confirm ("Please verify the 'Maxlength' attribute for the field " + oCtl.name + " in this panel. Current value is " +  oCtl.maxLength + ". Please click OK to continue or Cancel to skip.");
  	if (! tocontinue)
		return;
  }
// AKM BAS1030606A0 End
  for (var i=0; i < iDiff; i++) {
     strZeros = strZeros + "0";
  }
  strZeros = strZeros + oCtl.value;
  oCtl.value = strZeros;
  return;
}
function FormatField(oCtl) {
  var strDatatype = oCtl.Datatype ;
  if (strDatatype == 'number' || strDatatype == 'date' || strDatatype == 'money' || strDatatype == 'mask' || strDatatype == 'PostalCode') {
       eval("Format_" + strDatatype + "(oCtl)");
  }
  //HDK - BAS1040519A0 - Start
  if(key_code == -1){ 
  	key_code=0;
	looptabback();
  }
  //HDK - End
}
function Format_money(oCtl) {
  var bCurrencySymbOn = oCtl.CurrencySymb == 'yes';
  var strCurrencySymb = bCurrencySymbOn ? '0' : '';
  if (oCtl.value.charAt(0) != '$') {
    if (oCtl.value.length == 0 && bCurrencySymbOn) {
         oCtl.value = '0';
    }
   FormatDecimalType(oCtl);
  }
}
function Format_number(oCtl) {
  if (oCtl.value.indexOf(',') == -1) {
    FormatDecimalType(oCtl);
  }
}
function Format_date(oCtl) {
  var strValue = oCtl.value;
  var strMask = oCtl.mask;
  var strDelimiter = MaskDelimiter(strMask);
  //NSV - Added for Original Inception Date Start
  if (strMask == 'mm/yy')
  {
  	Format_dateMMYY(oCtl);
  	return;
  }
  //NSV - Added for Original Inception Date End
  var arrMask = SplitMask(strMask);
  var arrValue = SplitMask(strValue);
  var strChar = '';
  var strDay = '';
  var strMonth = '';
  var strYear = '';
  var strDMY = '';
  var strFieldMask = FieldMaskTemplate(strMask) ;
  var iDay, iMonth, iYear;
  var resetYeartoZero;
  if(strValue ==' ' || arrValue.length <3) {
	oCtl.value = "";
  } else {
     for (var i=0; i < arrMask.length; i++) {
       for (var j=0; j < arrMask[i].length; j++) {
         strDMY = arrMask[i].charAt(0).toLowerCase();
         strChar = arrValue[i].charAt(j);
         if (strChar == strDelimiter) {
           break;
         }
         switch(strDMY) {
           case 'd':
             strDay += strChar;
             break;
           case 'm':
             strMonth += strChar;
             break;
           case 'y':
             strYear += strChar;
         }
       } /* end of inner for */
     } /* end of outer for */
     if(strYear.length == 2 && strYear == '00') {
     	resetYeartoZero = true;
     }
     else {
     	resetYeartoZero = false;
     }
     iYear  =  PParseInt(strYear);
     if(resetYeartoZero) {
     	iYear = 0;
     }
     iMonth =  PParseInt(strMonth);
     iDay   =  PParseInt(strDay);
     /* default century */
     if (strYear.length < 4 && strMask.toLowerCase().indexOf('yyyy') != -1) {
     // BAS1030402A8 - HHT - 04032003    iYear = iYear + 2000;
	//oCtl.value = "";
	alert("Please enter four digit year for the date.");
	oCtl.focus();
	return false;
     }
     if(ValidMonthDayYear(iMonth, iDay, iYear)) {
       oCtl.value = FormattedDate(strMask, iMonth, iDay, iYear) ;
     } else {
	oCtl.value = "";
     }
  } /* end of first else else */
}
function Format_mask(oCtl) {
  var strValue = oCtl.value;
  var strMask = oCtl.mask;
 
  var strReturn = '';
 
	if(strMask=="AAAAA-AAAA")
	{
		var isalphaval="NO";
		var isnumalpha="NO";
		if(strValue.length > 5 )
		var j =5;
		else
			j= strValue.length;
// FSIT 185424 - Zip code Issue ( Error 8 digits in zipcode getting submitted) - Starts
		  for (var i = 0; i < j; i++) 
// FSIT 185424 - Zip code Issue ( Error 8 digits in zipcode getting submitted) - Ends
				{
					strChar =  strValue.charAt(i);
					if (CharacterIsAlpha(strChar)) 
					{
						isalphaval="YES";
					}	
				}
						if(strValue.length > 5 )
		{
		for (var i = 6; i < strValue.length; i++) 
				{
					strChar =  strValue.charAt(i);
					if (CharacterIsAlpha(strChar)) 
					{
						isnumalpha="YES";
					}	
				}
		}
		if(isalphaval=="YES")
			strMask="AAAAAAAAAA";
		else if(isalphaval=="NO" && isnumalpha=="YES")
			strMask="#####-AAAA";
		else
			strMask="#####-####";
	}


  var strFieldMask = FieldMaskTemplate(strMask) ;
  var strChar;
  var strMaskChar;
  var strDelimiter = MaskDelimiter(strMask);


  if (strValue.length != strMask.length) {

	if ((strMask == "#####-####") && (strValue.length == 6 || strValue.length == 5 ))
	{
	 oCtl.value = strValue.substring(0,5);
	 return false;
	}   
	 else if ((strMask == "#####-NNNN") && (strValue.length == 6)) {
	 strReturn = strValue + "0000";
	 oCtl.value = strReturn;
	 return false;
	}
// BAS1031124A0 Start	
	else if ((strMask == "##:##:NN") && (strValue.length == 6)) {
	 strReturn = strValue + "00";
	 oCtl.value = strReturn;
	 return false;
	}
// BAS1031124A0 End	
	else if ((strMask == ".#NNNN") && (strValue.length == 2)) {
	 strReturn = strValue + "0000";
	 oCtl.value = strReturn;
	 return false;
	}
	else if ((strMask == "ZZZ.NNNNN") && (strValue.length == 1 || strValue.length == 2 || strValue.length == 4) && (strValue.substring(0,1) != strDelimiter)) {
	 if (strValue.indexOf('.') == -1) {
	 strReturn = strValue + ".00000";
	 oCtl.value = strReturn;
	 return false;
	 }
	 else {
	 strReturn = strValue + "00000";
	 oCtl.value = strReturn;
	 return false;
	 }
	}
//FSIT - 179801  changes start - make zipcode mandatory 5 digit and alphanumeric
	 else if ((strMask == "AAAAAAAAAA") && (strValue.length >= 5) )
		{
		 oCtl.value = strValue;
		 return false;
		} 
		 else if ((strMask == "#####-AAAA") && (strValue.length >= 5) )
		{
		 oCtl.value = strValue;
		 return false;
		} 

//FSIT - 179801  changes End
	else if ((strMask == "ZZZ.NNNNN") && (strValue.substring(0,1) == strDelimiter)) {
	 if (strValue.length == 1) {
	 strReturn = strValue + "00000";
	 oCtl.value = strReturn;
	 return false;
	 }
	 else {
	 strReturn = strValue;
	 oCtl.value = strReturn;
	 return false;
	 }
	}
	else {
	strReturn = "";
    }
  } else {
	  //*************** change for zipcode - 179801 Starts 
	 
	
 //*************** change for zipcode - 179801 Edns

    for (var i = 0; i < strMask.length; i++) {
       strChar = strValue.charAt(i);
       strMaskChar = strMask.charAt(i);
	   
       strReturn += (CharacterIsPermitted(strChar, strMaskChar) && i < strValue.length) ? strChar : strFieldMask.charAt(i);
    }
  }
  oCtl.value = strReturn;
}
//FSIT - 179801  changes start - make zipcode mandatory 5 digit and alphanumeric
function CharacterIsPermitted(strChar, strMaskChar) {
  var bReturn = false;
  switch (strMaskChar.toLowerCase()) {
    case 'd':
    case 'm':
    case 'y':
      bReturn = (CharacterIsANumber(strChar)  || strChar == ' ');
      break;
    case '#':
      bReturn = CharacterIsANumber(strChar);
      break;
    case 'x':
      bReturn = CharacterIsAlpha(strChar);
      break;
    case '?':
      bReturn = true;
    case 'n':
      bReturn = CharacterIsANumber(strChar);
      break;
    case 'z':
      bReturn = CharacterIsANumber(strChar);
      break;
    case 'a':
        bReturn = CharacterIsAlphaNumeric(strChar);
        break; 
  }
  return bReturn;
}
//FSIT - 179801  changes End
function FieldMaskTemplate(strMask) {
  var strFieldMask = '';
  for (var i = 0; i < strMask.length; i++) {
      strFieldMask += strMaskDelimiters.indexOf(strMask.charAt(i)) > -1 ? strMask.charAt(i) : ' ';
  }
  return strFieldMask;
}
function FormattedDate(strMask, iMonth, iDay, iYear) {
  var strDelimiter = MaskDelimiter(strMask);
  var arrMask = SplitMask(strMask);
  var strReturn = '';
  var strDMY = '';
  for (var i=0; i < arrMask.length; i++) {
     strDMY = arrMask[i].toLowerCase().charAt(0);
     switch(strDMY) {
       case 'd':
         strReturn += (1000 + iDay).toString().substring(4 - arrMask[i].length, 4);
         break;
       case 'm':
         strReturn += (1000 + iMonth).toString().substring(4 - arrMask[i].length, 4) ;
         break;
       case 'y':
         strReturn += (100000 + iYear).toString().substring(6 - arrMask[i].length, 6);
     }
     if (i < arrMask.length - 1) {
        strReturn += strDelimiter;
        strDelimiter = MaskDelimiter(strMask.substring(strMask.indexOf(strDelimiter)+1, strMask.length));
     }
  }
  return strReturn;
}
function FormatDecimalType(oCtl) {
  var strValue = oCtl.value;
  var iDecimal = PParseInt(oCtl.Decimal);
  var iDecPoint;
  //NSV BPO - start
  if (strValue.length == 0   ) {
  strValue = '0';
  }
  //NSV BPO - End
  if (strValue.length > 0   ) {
	if (iDecimal > 0) {
      	iDecPoint = strValue.indexOf('.');
       	if ( iDecPoint == -1) {
          strValue += '.';
          iDecPoint = strValue.length -1 ;
       	 }
       for (var i = strValue.length - iDecPoint; i <= iDecimal; i++) {
          strValue += '0' ;
       	 }
	strValue = PutCommasInNumber(strValue);
	}
  }
  else {
    strValue = '0';
  }
  /* Precede decimals with a '0' as necessary */
if (strValue.indexOf('.') == 0) {
     strValue = '0' + strValue;
  }
  oCtl.value = strValue;
}
function CharacterIsANumber(strChar) {
  return "0123456789".indexOf(strChar) > -1 ? true : false;
}
function CharacterIsAlpha(strChar) {
  return "abcdefghijklmnopqrstuvwxyz".indexOf(strChar.toLowerCase()) > -1 ? true : false;
}
//FSIT - 179801  changes start - make zipcode mandatory 5 digit and alphanumeric
function CharacterIsAlphaNumeric(strChar) {
	 
	  
	  for(var i=0; i<strChar.length; i++)    
	  {
		  var char1 = strChar.charAt(i);
		  var cc = char1.charCodeAt(0);
		 if((cc>47 && cc<58) || (cc>64 && cc<91) || (cc>96 && cc<123))
		//  if((cc>64 && cc<91) || (cc>96 && cc<123))
		  {
			  return true;
		  }
		  else { 
			
			 return false;
			 }
		  } 
	  
	}
//FSIT - 179801  changes End
function SplitMask(strMask) {
  var arrMask = new Array;
  var strElement = '';
  var strChar;
  for (var i = 0; i < strMask.length; i++) {
      strChar =  strMask.charAt(i);
      if (strMaskDelimiters.indexOf(strChar) > -1) {
        arrMask[arrMask.length] = strElement;
        strElement = '' ;
      } else {
        strElement += strChar;
      }
  }
  arrMask[arrMask.length] = strElement;
 
  return arrMask;
}
function MaskDelimiter(strMask) {
  var strMaskDelimiter ;
  for (var i=0; i < strMask.length; i++) {
    strMaskDelimiter = strMask.charAt(i);
    if (strMaskDelimiters.indexOf(strMaskDelimiter) > -1 ) {
       break;
    } else {
       strMaskDelimiter = null;
    }
  }
  return strMaskDelimiter;
}
function PutCommasInNumber(strIn) {
  strIn = RemoveCommas(strIn);
  var iDecPoint = (strIn.indexOf('.') > -1) ? strIn.indexOf('.') : strIn.length;
  var strRev ="";
  var strReturn = "";
  var iCommaOccurence = 0;
  for (var i=strIn.length; i > -1; i--) {
    if(strIn.charAt(i)!='-') {
	if (iCommaOccurence ==3) {
       strRev += ',';
       iCommaOccurence = 0;
    }
    if (i < iDecPoint) {
       iCommaOccurence++ ;
    }
   }
    strRev += strIn.charAt(i);
  }
  for (i= strRev.length; i > -1; i--) {
    strReturn += strRev.charAt(i);
  }
  return strReturn;
}
function ValidMonthDayYear(iMonth, iDay, iYear) {
  if (isNaN(iMonth) || isNaN(iDay)  || isNaN(iYear)) { return false; }
  if (iDay == 0) { return false; }
  if (iMonth == 0 || iMonth > 12) { return false; }
  if (iMonth == 1 || iMonth == 3 || iMonth == 5 || iMonth == 7 || iMonth == 8 || iMonth == 10 || iMonth == 12) {
  if (iDay > 31) { return false; }
  } else {
    if (iMonth == 4 || iMonth == 6 || iMonth == 9 || iMonth == 11) {
      if (iDay > 30) { return false; }
    } else {
      if (!iYear > 3) {
         iYear += 2000;
      }
      if (iYear%4 != 0) {
        if (iDay > 28) { return false; }
      } else {
        if (iDay > 29) { return false; }
      }
    }
  }
  return true;
}
/* built-in parseInt does not parse strings with leading zeros correctly */
function PParseInt(strNumber) {
  var bPastLeadingZero = false;
  var strChar = '';
  var strParseNum = '';
  if (strNumber != null) {
    for (var i=0; i < strNumber.length; i++) {
      strChar = strNumber.charAt(i);
      bPastLeadingZero = bPastLeadingZero ? true : strChar != '0';
      if (bPastLeadingZero) {
        strParseNum += strChar;
      }
    }
  }
  return parseInt(strParseNum);
}
function UnFormatFields() {
	var f = document.forms[0];
	for (var i=0; i < f.elements.length; i++) {
	     elt = f.elements[i];
	   	 strDataType = elt.Datatype;
		 switch(strDataType) {
		   case "multiline":
		     elt.value = escape(elt.value);
		     break;
		   case "money":
		   case "number":
		   	//Resolution ID 39551 (Issue # 47182) - Start 
                	var strValue = elt.value;
                	if(strValue.length == 0)
                	{
				var bCurrencySymbOn = elt.CurrencySymb == 'yes';
				if (bCurrencySymbOn) 
				{
					strValue = '0';
				}
				var iDecimal = PParseInt(elt.Decimal);
				var iDecPoint;
				if (strValue.length > 0) 
				{
					if (iDecimal > 0) 
					{
						iDecPoint = strValue.indexOf('.');
						if ( iDecPoint == -1) 
						{
							strValue += '.';
							iDecPoint = strValue.length -1 ;
						}	
						for (var i = strValue.length - iDecPoint; i <= iDecimal; i++) 
						{
							strValue += '0' ;
						}
					}
				}
				else 
				{
				    strValue = '0';
				}
				if (strValue.indexOf('.') == 0) 
				{
				     strValue = '0' + strValue;
				}
				elt.value = strValue;
			}
			//Resolution ID 39551 (Issue # 47182) - End
                     elt.value = elt.value.split('$').join('').split(',').join('');
		     break;
		   case "mask":
		   	if (!(document.forms[0].REQUESTCODE.value.substring(0,8) == "WCVSITES")) {
			var maskval=elt.mask;
			var del=MaskDelimiter(maskval);
			elt.value=elt.value.split(del).join('');
			}
			break;
		}
		}
}
function RemoveHiddenElts()
{
	var coll = document.all;
	for (var i=0; i < coll.length; i++)
	{
	    if (coll[i].style.visibility == "hidden") {
		  coll[i].style.display ="none";
		}
	}
}
// FSIT 164079- Start - Prodco changes
var rateIndicator_val = "";
	//*****FSIT - 203122 - Starts 

	function UMSubmit()
	{
		
		document.forms[0].GU_INDICATOR_1.disabled=false;
		document.forms[0].GU_ALARM_TYPE.disabled=false;
		var e = document.getElementById("GU_INDICATOR_1");
		var strUser = e.options[e.selectedIndex].value;
		var e1 = document.getElementById("GU_ALARM_TYPE");
		var value1 = e1.options[e1.selectedIndex].value;

		e.options[e.selectedIndex].value = strUser;
		e1.options[e.selectedIndex].value = value1;

		if(ValidatePage())
		{
			// FSIT# 203341 starts
				disableSubmitButtons();
			//FSIT# 203441 Ends
			document.forms[0].submit();
		}
		else
			return ValidatePage();
	}


	function UMValidation()
	{
		if (document.forms[0].REQUESTCODE.value == "CPPUNITSCHGRq"  && document.getElementById('GU_RATE_STATE').value=="NM"  && document.getElementById('UNIT_KEY_INSURANCE_LINE').value=="CA")
		{

			var cov = document.getElementById('GU_CLASS_CODE').value;
			var flky = document.getElementById('fullkey').value;
			var poleffdt = flky.substring(42,49);
			var mcomp = document.getElementById('UNIT_KEY_MASTER_COMPANY').value;
			var umsym = document.getElementById('UNIT_KEY_SYMBOL').value;
			var umlob = document.getElementById('BC_LINE_OF_BUSINESS').value;
			
			var chngeffdt ="";
			url = "../jsp/ClassCov.jsp?cov="+cov+"&mcomp="+mcomp+"&umlob="+umlob+"&poleffdt="+poleffdt;
			 
		    window.open(url,"umvalid","menubar=no,toolbar=no,resizable=no,scrollbars=no,status=no,left = 9999, top = 9999, width = 1, height = 1,location = no");

		
			//chngeffdt = loadXMLDoc(cov,mcomp,umlob);
//			chngeffdt=document.getElementById("UM_EFFECTIVE_DATE").value;
		}
	}

	function loadXMLDoc(cov,mcomp,umlob)
	{	
		var covCount=0;
//		var xmlhttp;
//		if (window.XMLHttpRequest)
//		{// code for IE7+, Firefox, Chrome, Opera, Safari
//			xmlhttp=new XMLHttpRequest();
//		}
//		else
//		{// code for IE6, IE5
//			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
//		}
//		//xmlhttp.open("GET","../jsp/ClassCov.jsp?cov="+cov+"&mcomp="+mcomp+"&umlob="+umlob,false);
//		xmlhttp.open("GET","../jsp/ClassCov.jsp?cov="+cov+"&mcomp="+mcomp+"&umlob="+umlob+"&Rand="+Math.random(),false);
//		xmlhttp.send();
        url = "../jsp/ClassCov.jsp?cov="+cov+"&mcomp="+mcomp+"&umlob="+umlob;
        window.open(url,"POINTGrid","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,status=yes");
		//var chngeffdt = xmlhttp.ResponseText;
		//return chngeffdt;
	}

//*****FSIT - 203122 - Ends 

//FSIT 195919 Starts

function setProdrateVal()
{
	var keyCde = document.getElementById('GC_COVER_CLASS_CODE').value;
	var a = false;

	if(keyCde=="11101" && document.getElementById("COMMON_DESC_COVERAGE_EFF_DATE").value >= "1130915")
	{
		a=true;
	}
	else
		a=false;
	return a;
}


function isdecimal(strChar)
{
	var isdec = "";
	for(var i=0; i<strChar.length; i++)    
	{
		var char1 = strChar.charAt(i);
		var cc = char1.charCodeAt(0);
		if((cc>=48 && cc<=57) || (cc==46))
		{
			isdec= "yes";
		}
		else
		{ 
			isdec= "no";
			break;
		}

	} 

	if(isdec=="yes")
		return true;
	else
		return false;
}

function chkclass(keyCde,arr)
{
	var a = false;
	for(var i = 0; i <arr.length; i++)
		{
			if ( arr[i]==keyCde)
			{
				a=true;
			}
		}
	return a;
}


//CYYMMDD
function chkRateDate(keyCde)
{

	var aiVal = ["11101","15119","15120","18991","40040","43215","43517","43945","44193","44194","44222","44500","44501","45224","45225","47051","48727","63219","63220","94444"];
	var aiVal2 = ["11101","15119","18991","40040","43945","44193","44194","47051","48727","63219"];
	var objUSERIND1 = document.getElementById("GC_USER_INDICATOR_1");
	var objUSERIND5 = document.getElementById("GC_USER_INDICATOR_5");
	var state = document.getElementById('GC_STATE').value;
	var b = false;


	if((document.getElementById("target") != null) &&(document.getElementById("target").value == 'jsp/PTCppGLUSCovPREMOP.jsp'  || document.getElementById("target").value == 'jsp/WAGPTCagGLUSCovPREMOP.jsp' ) && (document.getElementById('GC_COVER_CLASS_CODE').value !=""))
	{
		b = chkclass(keyCde,aiVal);
		c = chkclass(keyCde,aiVal2);
			if(document.getElementById("COMMON_DESC_COVERAGE_EFF_DATE").value >= "1120915"  && document.getElementById("COMMON_DESC_COVERAGE_EFF_DATE").value < "1130914")
					{
						
						if(b==true && state!="SD")
						{
							objUSERIND1.options[0] = new Option("ELP/ 'A' Rate Range", "R");
							document.forms[0].GC_USER_INDICATOR_1.disabled=true;
							document.forms[0].GC_USER_FACTOR_1.className='ef';
							document.forms[0].GC_USER_FACTOR_1.readOnly=false;
						}

						if(state!="SD" && (keyCde=="11101" || keyCde=="94444" ))
						{
							
							objUSERIND5.options[0] = new Option("ELP/ 'A' Rate Range", "R");
							document.forms[0].GC_USER_INDICATOR_5.disabled=true;
							document.forms[0].GC_USER_FACTOR_3.className='ef';
							document.forms[0].GC_USER_FACTOR_3.readOnly=false;
							document.getElementById('GC_USER_FACTOR_1').value = document.getElementById('GC_USER_FACTOR_1').value;							  
						}
						else if(state!="SD" && b==true && !(keyCde=="11101" || keyCde=="94444" ))
						{
							document.forms[0].GC_USER_INDICATOR_5.disabled=true;
						}
					}
			else if(document.getElementById("COMMON_DESC_COVERAGE_EFF_DATE").value >= "1130915")
				{

					if(c==true  && state!="SD")
					{
						
						objUSERIND1.options[0] = new Option("ELP/'A' Rate", document.forms[0].COMMON_DESC_ASA1REP_A1MDTX_IND.value);
						document.forms[0].GC_USER_INDICATOR_1.disabled=true;
					}
					else if(c!=true && b==true && state!="SD")
					{
						objUSERIND1.options[0] = new Option("ELP/ 'A' Rate Range", "R");
						document.forms[0].GC_USER_INDICATOR_1.disabled=true;
						document.forms[0].GC_USER_FACTOR_1.className='ef';
						document.forms[0].GC_USER_FACTOR_1.readOnly=false;
					}
					if(keyCde=="11101"  && state!="SD")
					{				
						objUSERIND5.options[0] = new Option("ELP/'A' Rate", document.forms[0].COMMON_DESC_ASA1REP_A1METX_IND.value);	
						document.forms[0].GC_USER_INDICATOR_5.disabled=true;
					}
					else if(keyCde=="94444"   && state!="SD")
					{						
						objUSERIND5.options[0] = new Option("ELP/ 'A' Rate Range", "R");
						document.forms[0].GC_USER_INDICATOR_5.disabled=true;
						document.forms[0].GC_USER_FACTOR_3.className='ef';
						document.forms[0].GC_USER_FACTOR_3.readOnly=false;
					}
					else if(b==true  && state!="SD")
					{
							document.forms[0].GC_USER_INDICATOR_5.disabled=true;
					}
				}			
	
		}
} // end of function

function rateSubmit()
{
		var objUSERIND1 = document.getElementById("GC_USER_INDICATOR_1");
		var objUSERIND5 = document.getElementById("GC_USER_INDICATOR_5");
		var value1 = objUSERIND1.options[objUSERIND1.selectedIndex].value;
		var value5 = objUSERIND5.options[objUSERIND5.selectedIndex].value;
		document.forms[0].GC_USER_INDICATOR_5.disabled=false;
		document.forms[0].GC_USER_INDICATOR_1.disabled=false;
			
		if(!isdecimal(document.forms[0].GC_USER_FACTOR_1.value) && value1=="R")
		{
			alert("AA Base Rate indicator should be a number ");
			return false;
		}
		else if(!isdecimal(document.forms[0].GC_USER_FACTOR_3.value) && value5=="R")
		{
			alert("Prod AA Base Rate indicator should be a number ");
			return false;
		}		
		
		else
		{
			if(ValidatePage())
			{
				document.forms[0].submit();
			}
			else
				return ValidatePage();
		}		
}

// FSIT 206476_PMACODE  - starts 

function empBenefitcovload()
{
	document.getElementById('GC_USER_CODE_3').disabled = true;
}

// FSIT 206476_PMACODE  - Ends

//FSIT 195919 Ends

// FSIT 164079- End - Prodco changes



// - FSIT 208353 ---GL updates - Disable Products aggregate field - Starts 
	function disProdField()
	{
	//yr month date
	if(document.getElementById("COMMON_DESC_POLICY_EFFECTIVE_DATE").value >= "1140915")
		document.forms[0].INS_USER_DOLLAR_4.disabled=true;
	}
// - FSIT 208353 ---GL updates - Disable Products aggregate field - Ends 

// - PCR 381_210336 -- - Starts 

function setDefValueUnit()
	{
		if(document.getElementById("PROC_MESSAGE").value == "")
		{
			//yr month date
			if(document.getElementById("COMMON_DESC_POLICY_EFFECTIVE_DATE").value >= "1150201")
				{
					document.getElementById("GU_USER_DOLLAR_9").value = '25,000';
				}
		}
	}

	function setDefValueIns()
	{
	//yr month date
		if(document.getElementById("PROC_MESSAGE").value == "")
		{
			if(document.getElementById("COMMON_DESC_POLICY_EFFECTIVE_DATE").value >= "1150201")
				{
					document.getElementById("INS_USER_CODE_4").options[2].selected = true;
				}
		}
	}

	function setDefValueCov()
	{
	//yr month date
	if(document.getElementById("COMMON_DESC_POLICY_EFFECTIVE_DATE").value >= "1150201")
		{
			//if(document.getElementById("GC_STATE").value == "KS")
			//{

				if(document.getElementById("PROC_MESSAGE").value == "")
				{
					if(document.getElementById("target").value == 'jsp/WAGPTBPUSCovNPEAS.jsp')
					{
						document.getElementById("GC_USER_INDICATOR_10").options[1].selected = true;
					}
					else if(document.getElementById("target").value == 'jsp/WAGPTBPUSCovBOPECE.jsp')
					{
						document.getElementById("GC_USER_DOLLAR_20").value = '40,000';
					}
					else 
					{
						document.getElementById("GC_USER_INDICATOR_10").options[2].selected = true;
					}
					if(document.getElementById("target").value == 'jsp/WAGPTBPUSCovADDREQ.jsp')
					{
						document.getElementById("GC_USER_INDICATOR_10").options[2].selected = true;
					}

				}
			//}
			//if(document.getElementById("GC_STATE").value == "NM"  && (document.getElementById("target").value == 'jsp/WAGPTBPUSCovADDCOP.jsp' ||document.getElementById("target").value == 'jsp/WAGPTBPUSCovADDREQ.jsp' || document.getElementById("target").value == 'jsp/WAGPTBPUSCovADDOWN.jsp'))
			//{
				//document.getElementById("GC_USER_INDICATOR_10").options[1].selected = true;
			//}
		}
	}

function setMandatory()
{

if(document.getElementById("COMMON_DESC_POLICY_EFFECTIVE_DATE").value >= "1150201")
	{
		document.getElementById('ID_WIRING_TYPE').innerHTML = '*Wiring Type';
				document.getElementById('ID_WIRING_TYPE').style.left = '10';

		document.getElementById('ID_HEATING_TYPE').innerHTML = '*Heating Type';
				document.getElementById('ID_HEATING_TYPE').style.left = '10';

		document.getElementById('ID_HEATING_YEAR').innerHTML = '*Heating Year';
				document.getElementById('ID_HEATING_YEAR').style.left = '10';

		document.getElementById('ID_ROOFING_YEAR').innerHTML = '*Roofing Year';
				document.getElementById('ID_ROOFING_YEAR').style.left = '10';
		

	if(document.getElementById("target").value == 'jsp/WAGPTBPAZUnit.jsp' || document.getElementById("target").value == 'jsp/WAGPTBPUSUnit.jsp')
		{
				document.getElementById('ID_TOTAL_BUILDING_SQUARE_FOOTAGE').innerHTML = '*Total Building Square Footage';
				document.getElementById('ID_TOTAL_BUILDING_SQUARE_FOOTAGE').style.left = '10';

		}
else if(document.getElementById("target").value == 'jsp/WAGPTBPKSUnit.jsp')
		{
				document.getElementById('ID_SQUARE_FEET').innerHTML = '*Total Building Square Footage';
				document.getElementById('ID_SQUARE_FEET').style.left = '10';
		}

		document.getElementById('GU_USER_CODE_9').maxLength = '4';
		document.getElementById('GU_USER_CODE_20').maxLength = '4';

	}
}
	

// - PCR 381_210336 -- - Ends


// pcrrate_195919 - Starts - Enter key functionality not working 
function enterPressed() {
	if (window.event && window.event.keyCode == 13) {
		FormatField(document.getElementById('GC_USER_FACTOR_3'));	  
		FormatField(document.getElementById('GC_USER_FACTOR_1'));	  
	} 

}
// pcrrate_195919 - Ends - Enter key functionality not working 
function window_onload() {

	ProcessWarnings();
	CheckVisibility();
	reset_busy_icon();
	// pcrrate_195919 - Starts - Enter key functionality not working 
	if((document.forms[0].REQUESTCODE.value == "CPPCOVERCHGRq" || document.forms[0].REQUESTCODE.value == "CPPCOVERADDRq") && ((document.getElementById("target") != null) &&(document.getElementById("target").value == 'jsp/PTCppGLUSCovPREMOP.jsp'  || document.getElementById("target").value == 'jsp/WAGPTCagGLUSCovPREMOP.jsp')))
	{
		document.getElementById('GC_USER_FACTOR_3').attachEvent("onkeypress",enterPressed);
		document.getElementById('GC_USER_FACTOR_1').attachEvent("onkeypress",enterPressed);
	}

// pcrrate_195919 - Ends - Enter key functionality not working 

// - PCR 381_210336 -- - Starts 
	if((document.forms[0].REQUESTCODE.value == "CPPINSLNADDRq") && ((document.getElementById("target") != null) &&(document.getElementById("target").value == 'jsp/WAGPTBPUSIns.jsp')))
	{
		setDefValueIns();
	}
	if((document.forms[0].REQUESTCODE.value == "CPPCOVERADDRq") && ((document.getElementById("target") != null) &&(document.getElementById("target").value == 'jsp/WAGPTBPUSCovADDLES.jsp' || document.getElementById("target").value == 'jsp/WAGPTBPUSCovVENDOR.jsp' || document.getElementById("target").value == 'jsp/WAGPTBPUSCovADDENG.jsp' || document.getElementById("target").value == 'jsp/WAGPTBPUSCovADDOWN.jsp' || document.getElementById("target").value == 'jsp/WAGPTBPUSCovADDREQ.jsp' || document.getElementById("target").value == 'jsp/WAGPTBPUSCovADDCOP.jsp'  || document.getElementById("target").value == 'jsp/WAGPTBPUSCovADDGRT.jsp' || document.getElementById("target").value == 'jsp/WAGPTBPUSCovNPEAS.jsp' || document.getElementById("target").value == 'jsp/WAGPTBPUSCovBOPECE.jsp' )))
	{
		setDefValueCov();
	}

	if((document.forms[0].REQUESTCODE.value == "CPPUNITSADDRq") &&  ((document.getElementById("target") != null) &&(document.getElementById("target").value == 'jsp/WAGPTBPAZUnit.jsp' || document.getElementById("target").value == 'jsp/WAGPTBPUSUnit.jsp' || document.getElementById("target").value == 'jsp/WAGPTBPMNUnit.jsp' || document.getElementById("target").value == 'jsp/WAGPTBPKSUnit.jsp')))
	{
		setDefValueUnit();
	}

	if(((document.forms[0].REQUESTCODE.value == "CPPUNITSCHGRq") ||  (document.forms[0].REQUESTCODE.value == "CPPUNITSADDRq")) && (document.getElementById("target").value != 'jsp/WAGPTCagCANMUnit.jsp' && document.getElementById("target").value != 'jsp/PTCppCANMUnit.jsp' ))
	{
		setMandatory();
	}

// - PCR 381_210336 -- - Ends



// - FSIT 208353 ---GL updates - Disable Products aggregate field - Starts 
	if((document.getElementById("target") != null) &&(document.getElementById("target").value == 'jsp/WAGPTCppGLUSIns.jsp'  || document.getElementById("target").value == 'jsp/WAGPTCagGLUSIns.jsp' ))
	{
		disProdField();
	}

// - FSIT 208353 ---GL updates - Disable Products aggregate field - Ends 


// FSIT 206476_PMACODE  - starts 
	if ((document.forms[0].REQUESTCODE.value == "CPPCOVERCHGRq"  || document.forms[0].REQUESTCODE.value == "CPPCOVERADDRq" ) && document.forms[0].target.value == "jsp/WAGPTCppGLUSCovEBL.jsp" )
	{
		empBenefitcovload();
	}
// FSIT 206476_PMACODE  - starts 

	//*****FSIT - 203122 - Starts 
	if (document.forms[0].REQUESTCODE.value == "CPPUNITSCHGRq"  && document.getElementById('GU_RATE_STATE').value=="NM"  && document.getElementById('UNIT_KEY_INSURANCE_LINE').value=="CA")
	{
		UMValidation();
	}
	//*****FSIT - 203122 - Ends 

	//196646 - FBL PICS PCR - start
	if(document.forms[0].target.value == "jsp/PolNAOffAdditionalInterest.jsp")
	{
		var AddCode = document.getElementById("ADDLINT_KEY_USE_CODE").value;  
		//var dropDownSelectedValue = document.getElementById('ADDLINT_DESCRIPTION_LINE_6').options[document.getElementById('ADDLINT_DESCRIPTION_LINE_6').selectedIndex].text;
		
		if(document.getElementById('ADDLINT_KEY_USE_CODE').value == 'NI')
		{
			document.getElementById('ADDLINT_USE_CODE_OPT_HEADING').value = "*"+document.getElementById('ADDLINT_USE_CODE_OPT_HEADING').value;
			document.getElementById('ID_DSP_ADDLINT_USE_CODE_OPT_HEADING').style.left = '23';
			
		}
		if(document.getElementById('PROC_MESSAGE').value)
		{
			var url = "../jsp/PolAddtlInterestTypeDetails.jsp?AddCode="+AddCode;
			top.First.frameTopLeft.location = url;
		}
	
	}
	
	//196646 - FBL PICS PCR - end
	//FSIT 	177904 -- DMV screen message Issue - Start
	if (document.forms[0].REQUESTCODE.value == "CPPDMVPRADDRq" )
	{
		var pmsg1 ="";
		if(document.getElementById('PROC_MESSAGE').value!=null)
		{
			pmsg1 = document.getElementById('PROC_MESSAGE').value;
			if(pmsg1.length!=0 && pmsg1.length >3)
			{
			pmsg1 = pmsg1.substring(3,pmsg1.length);
			document.getElementById('PROC_MESSAGE').value =pmsg1;
			}
		}

	}
	//FSIT 	177904 -- DMV screen message Issue - End
	//FSIT 187542 - Starts	
	if((document.getElementById("target") != null) && (document.getElementById("target").value == 'jsp/WAGPTCagGLUSCovLIQ.jsp' || document.getElementById("target").value == 'jsp/PTCppGLUSCovLIQ.jsp' || document.getElementById("target").value == 'jsp/PTCppGLUTCovLIQ.jsp' || document.getElementById("target").value == 'jsp/WAGPTCagGLUTCovLIQ.jsp'))
	{
		//FSIT 196196, FSIT 196212, FSIT 196214 - Starts
		document.getElementById('GC_USER_INDICATOR_3').disabled = true;
		document.getElementById('GC_USER_INDICATOR_4').disabled = true;
		document.getElementById('GC_USER_CODE_1').disabled = true;
		document.getElementById('GC_USER_CODE_3').disabled = true;
		//document.getElementById('GC_USER_CODE_3').className = 'ef';
		//document.getElementById('GC_USER_CODE_3').readOnly = true;

		//FSIT 196196, FSIT 196212, FSIT 196214 - Ends

		document.getElementById('HDN_EFECTIVE_DT').style.visibility = "hidden";
		var efctvDTObj = document.getElementById('HDN_EFECTIVE_DT');
		var efctvDT = efctvDTObj.options[1].value;
		//alert(" efctvDT-->-----" + efctvDT);
		if(efctvDT >= "1131001")
		{		


			if(document.getElementById('COVERAGE_KEY_MASTER_COMPANY').value == '05')
			{
				if(document.getElementById('GC_COVER_CLASS_CODE').value != null && document.getElementById('GC_COVER_CLASS_CODE').value == "")
				{
					document.getElementById('GC_COVER_CLASS_CODE').value = '58161';
					document.getElementById('GC_COVER_CLASS_DESCRIPTION').value = 'LIQUOR LIABILITY - RESTAURANTS';
				}
			}
			else if(document.getElementById('COVERAGE_KEY_MASTER_COMPANY').value == '07')
			{
				if(document.getElementById('GC_COVER_CLASS_CODE').value != null && document.getElementById('GC_COVER_CLASS_CODE').value == "")
				{
					document.getElementById('GC_COVER_CLASS_CODE').value = '50911';
					document.getElementById('GC_COVER_CLASS_DESCRIPTION').value = 'LIQUOR LIABILITY - LIQUOR WHOLESALERS';
				}
			}
			if(document.getElementById("target").value == 'jsp/PTCppGLUTCovLIQ.jsp' || document.getElementById("target").value == 'jsp/WAGPTCagGLUTCovLIQ.jsp')
			{
				document.getElementById('GC_USER_DOLLAR_5').disabled = true;
				//document.getElementById('ID_GC_USER_DOLLAR_5').className = 'rf';
				//document.getElementById('ID_GC_USER_DOLLAR_5').readOnly = true;
				document.getElementById('GC_USER_DOLLAR_3').disabled = true;
				document.getElementById('GC_USER_DOLLAR_4').disabled = true;
			}	
		}
	}
	//FSIT 187542 - Ends	
	//PCR 321 - Rahul T ... Starts
	if(document.getElementById("target").value == "jsp/WAGPTCagGLUSCovNLVSUF.jsp")
	{
		var objHDN1 = document.getElementById("GC_USER_NUMBER_HDN1_3");
		document.getElementById("GC_USER_NUMBER_HDN2_3").style.visibility = 'hidden';
		var riskSbLoc = document.getElementById("GC_USER_NUMBER_3").value;
		if(riskSbLoc == "")
		{
			document.getElementById("GC_USER_NUMBER_3").value = "0";
		}
		if(riskSbLoc != null && riskSbLoc != "" && riskSbLoc != "0")
		{
			var myOption=document.createElement("option");
			myOption.value=riskSbLoc;
					if(document.getElementById("GC_USER_NUMBER_HDN2_3").options[1] != null)
					{
						myOption.innerHTML = document.getElementById("GC_USER_NUMBER_HDN2_3").options[1].text;
					}
					try
					  {
						objHDN1.insertBefore(myOption,objHDN1.firstChild);
						objHDN1.options[0].selected = true;

					  }
						catch (e)
						  {
							 objHDN1.add(option,null);
						  }
		}


	}
	//PCR 321 - Rahul T ... Ends
//FSIT 	149620 Start
if (document.forms[0].REQUESTCODE.value == "CPPBCONTCHGRq" && (document.forms[0].BC_TYPE_ACTIVITY.value != "NB") )
{
document.forms[0].BC_RENEWAL_SYMBOL.className='rf';
document.forms[0].BC_RENEWAL_SYMBOL.readOnly=true;
document.forms[0].BC_RENEWAL_POLICY_NUMBER.className='rf';
document.forms[0].BC_RENEWAL_POLICY_NUMBER.readOnly=true;
}	
//FSIT 	149620 End	
//WAG4427 - Start 
if (document.forms[0].REQUESTCODE.value == "PAPDCADTADDRq")
{
var yrlicense = document.getElementById('DRVDTL_USER_NUMBER_1').value;
if (yrlicense=='0')
{
   document.getElementById('DRVDTL_USER_NUMBER_1').value = '1900';
}
}
//WAG4427 - End
//FSIT 144888 WAG4997 - Start
if (document.forms[0].REQUESTCODE.value == "CPPBCONTCHGRq" || document.forms[0].REQUESTCODE.value == "CPPBCONTADDRq")
{
document.getElementById("BC_RENEWAL_CODE").disabled = true;
}
//FSIT 144888 WAG4997 - End
//[PS]-128845 - Start
if (document.forms[0].REQUESTCODE.value == "BAS0200EADDRq" || document.forms[0].REQUESTCODE.value == "BAS0200ECHGRq")
{
	if(parent.Policy != null)
	{
	var str = new String(parent.Policy.location);
	var reqkey = document.forms[0].fullkey.value;
		if (reqkey != null)
		{
			var typeAct = reqkey.substring(30,32);
			if (typeAct != "EN")
				{
					if (document.getElementById("EX_USRIND1_DESC").value == "Bill Suppress")
					{
					document.getElementById("EX_USRIND1_USE").value = 'N';
					document.getElementById("EX02_USERIND_1").className='rf';
					document.getElementById("EX02_USERIND_1").readOnly=true;
					}
				}
		}
	}	
}
//[PS]-128845 - End

//[PS]-PCR039- FSIT# 128718 - Start
if (document.forms[0].REQUESTCODE.value == "CPPBCONTCHGRq" || document.forms[0].REQUESTCODE.value == "CPPBCONTADDRq")
{
	var reqkey = document.forms[0].fullkey.value;
	var reqCode = document.forms[0].REQUESTCODE.value;
	var custNum = document.getElementById("BC_CUSTOMER_NUMBER").value;
	var loc = document.getElementById("BC_KEY_LOCATION_COMPANY").value;
	var mco = document.getElementById("BC_KEY_MASTER_COMPANY").value;
	var sym = "";
	var policy = document.getElementById("BC_KEY_POLICY_NUMBER").value;
	var mod = document.getElementById("BC_KEY_MODULE").value;
	var typeAct = "";
	if (reqkey != null)
	{
		typeAct = reqkey.substring(30,32);
		sym = reqkey.substring(4,7);
	}
	var state = "";
	var lob	= document.getElementById("BC_LINE_OF_BUSINESS").value;
	var effDate = document.getElementById("BC_POLICY_EFFECTIVE_DATE").value;
	state = document.getElementById("BC_RISK_STATE").value;
// FSIT 133688 Start
	var issueCode = document.getElementById("BC_ISSUE_CODE").value;	
	var bcPayPlan = document.getElementById("BC_PAY_BY_PLAN").value;	
	var bcRenPayPlan = document.getElementById("BC_RENEWAL_PAY_BY_PLAN").value;	
	document.getElementById('ID_Submit_Button').style.display = 'none';
	document.getElementById('ID_Reset_Button').style.display = 'none';
	  var url = "../jsp/PolGetPayPlan.jsp?CUSTNUMBER="+custNum +"&LOC="+ loc +"&MCO=" + mco + "&STATE=" + state + "&LOB=" +lob +"&EFFECTIVE_DATE="+effDate + "&REQ_CODE=" + reqCode + "&TYPEACT=" + typeAct + "&SYMBOL=" + sym + "&POLICYNUM=" + policy + "&MODULE=" + mod+"&fullkey=" + reqkey+"&issueCode=" + issueCode+"&bcPayPlan=" + bcPayPlan+"&bcRenPayPlan=" + bcRenPayPlan;
// FSIT 133688 End
	top.First.frameTopRight.location = url;
}

if (document.forms[0].REQUESTCODE.value == "CPPBCONTRENRq")
{
	var reqkey = document.forms[0].fullkey.value;
	var reqCode = document.forms[0].REQUESTCODE.value;
	var custNum = document.getElementById("BC_CUSTOMER_NUMBER").value;
	var loc = document.getElementById("BC_KEY_LOCATION_COMPANY").value;
	var mco = document.getElementById("BC_KEY_MASTER_COMPANY").value;
	var sym = "";
	var policy = document.getElementById("BC_KEY_POLICY_NUMBER").value;
	var mod = document.getElementById("BC_KEY_MODULE").value;
	var typeAct = "";
	var state = "";
	var lob	= "";
	var effDate = document.getElementById("BC_POLICY_EFFECTIVE_DATE").value;
	if (reqkey != null)
		{
			lob = reqkey.substring(16,19);
			state =	reqkey.substring(28,30);
			typeAct = reqkey.substring(30,32);
			sym = reqkey.substring(4,7);
		}
	
// FSIT 133688 Start
	var issueCode = document.getElementById("BC_ISSUE_CODE").value;	
	var bcPayPlan = document.getElementById("BC_PAY_BY_PLAN").value;	
	var bcRenPayPlan = document.getElementById("BC_RENEWAL_PAY_BY_PLAN").value;	
	document.getElementById('ID_Submit_Button').style.display = 'none';
	document.getElementById('ID_Reset_Button').style.display = 'none';
	  var url = "../jsp/PolGetPayPlan.jsp?CUSTNUMBER="+custNum +"&LOC="+ loc +"&MCO=" + mco + "&STATE=" + state + "&LOB=" +lob +"&EFFECTIVE_DATE="+effDate + "&REQ_CODE=" + reqCode + "&TYPEACT=" + typeAct + "&SYMBOL=" + sym + "&POLICYNUM=" + policy + "&MODULE=" + mod+"&fullkey=" + reqkey+"&issueCode=" + issueCode+"&bcPayPlan=" + bcPayPlan+"&bcRenPayPlan=" + bcRenPayPlan;
	top.First.frameTopRight.location = url;
// FSIT 133688 End

}
if (document.getElementById("CurrentPageName").value == "CppQQGLQuickQuote2NAOff")
{
	var reqkey = document.forms[0].fullkey.value;
	var reqCode = document.forms[0].REQUESTCODE.value;
	var custNum = document.getElementById("BC_CUSTOMER_NUMBER").value;
	var loc = document.getElementById("BC_KEY_LOCATION_COMPANY").value;
	var mco = document.getElementById("BC_KEY_MASTER_COMPANY").value;
	var sym = document.getElementById("BC_KEY_SYMBOL").value;
	var policy = document.getElementById("BC_KEY_POLICY_NUMBER").value;
	var mod = document.getElementById("BC_KEY_MODULE").value;
	var typeAct = document.getElementById("PROC_TRANSACTION_TYPE").value;
	var state = document.getElementById("BC_RISK_STATE").value;
	var lob	= document.getElementById("BC_LINE_OF_BUSINESS").value;
	var effDate = document.getElementById("BC_POLICY_EFFECTIVE_DATE").value;
	var issueCode = document.getElementById("BC_ISSUE_CODE").value;	
	var bcPayPlan = document.getElementById("BC_PAY_BY_PLAN").value;	
	var bcRenPayPlan = document.getElementById("BC_RENEWAL_PAY_BY_PLAN").value;	
	document.getElementById('ID_Next_Button').style.display = 'none';
	document.getElementById('ID_B_Reset').style.display = 'none';
				
	var url = "../jsp/PolGetPayPlan.jsp?CUSTNUMBER="+custNum +"&LOC="+ loc +"&MCO=" + mco + "&STATE=" + state + "&LOB=" +lob +"&EFFECTIVE_DATE="+effDate + "&REQ_CODE=" + reqCode + "&TYPEACT=" + typeAct + "&SYMBOL=" + sym + "&POLICYNUM=" + policy + "&MODULE=" + mod+"&fullkey=" + reqkey+"&issueCode=" + issueCode+"&bcPayPlan=" + bcPayPlan+"&bcRenPayPlan=" + bcRenPayPlan;
	top.First.frameTopRight.location = url;
}
if (document.forms[0].REQUESTCODE.value == "BASCUSTICHGRq")
{
	if (document.getElementById("C_PAY_PLAN").value != "")
	{
		document.getElementById("C_DUE_DAY").className='rf';
		document.getElementById("C_DUE_DAY").readOnly=true;
	}
}

//[PS]-PCR039- FSIT# 128718 - End

//[PS]-WAG4606 - Start
//[PS]-WAG3490 - Start
//if (document.forms[0].REQUESTCODE.value != "")
//{
//	if (document.forms[0].REQUESTCODE.value == "PAPDCADTADDRq")
//	{
//		
//				var driverStatus = document.getElementById("DRVDTL_EXCLUDED_DRIVER_IND");
//				for ( var j = driverStatus.options.length - 1; j >= 0; j-- ) 
//				{
//				 	if (driverStatus.options[j].value == 'I')
//				 	{
//				 		driverStatus.selectedIndex = j;
//				 		break;
//				 	}	
//				}
//	}
//}		
//[PS]-WAG3490 - End
//[PS]-WAG4606 - End

//[PS]-WAG3535-Second Agent -Start
if (document.forms[0].REQUESTCODE.value != "")
{

	if (document.forms[0].REQUESTCODE.value == "BAS0200EADDRq" || (document.forms[0].REQUESTCODE.value == "BAS0200ECHGRq") || (document.forms[0].REQUESTCODE.value == "BAS0200EDFTRq") || (document.forms[0].REQUESTCODE.value == "BAS0200EDLTRq") || (document.forms[0].REQUESTCODE.value == "BAS0200EINQRq")){
		if ( document.getElementById("BC_LINE_OF_BUSINESS").value == "CPP" || document.getElementById("BC_LINE_OF_BUSINESS").value == "CAG" || document.getElementById("BC_LINE_OF_BUSINESS").value == "WCV" || document.getElementById("BC_LINE_OF_BUSINESS").value == "BOP" )
		{
				document.getElementById("EX_USRTXT3_DESC").value = 'Secondary Agent';
				var usrText3 = document.getElementById("ID_EX02_USERTEXT_3").innerHTML;
				var temp = new Array();
				var temp1 = "";
				temp = usrText3.split(' ');
				for ( var j = temp.length - 1; j >= 0; j-- )
				{
				if (temp[j].indexOf('maxLength') != -1) {
				temp[j] = 'maxLength=7 minLength=7';  }
				if (temp[j].indexOf('onblur') != -1) {
				temp[j] = temp[j]+"ZeroFill(this);";  }
				}    
				for ( var i = 0 ; i <= temp.length - 1; i++ )
				{
				temp1 = temp1 + ' ' + temp[i] ;
				}    
				temp1 = trim(temp1);
  				document.getElementById("ID_EX02_USERTEXT_3").innerHTML = temp1;
		}}
}		

//[PS]-WAG3535-Second Agent -End


//[PS]-WAG3748 -Start

if (document.forms[0].REQUESTCODE.value != "")
{
	if (document.forms[0].REQUESTCODE.value == "RCVPOLHDINQRq")
		{
			if (document.getElementById("D0_CARRY_DATE") != null && document.getElementById("D0_CARRY_DATE").value == "0")
			{
				document.getElementById("ID_L_Carry_Date").className='lf';
				document.getElementById("ID_L_Carry_Date").innerHTML = "Carry Date";
			}
		}
}		

//[PS]-WAG3748 -End

//[PS]-WAG2728 AGMax_Form-Start

if (document.forms[0].REQUESTCODE.value != "")
{
if (document.forms[0].REQUESTCODE.value == "CPPFORMSADDRq")
{	
	var insLine = trim(document.getElementById("FORMS_KEY_INSURANCE_LINE").value);
	
	if (insLine == 'FD' || insLine == 'FS' || insLine == 'FP')
	{	
		document.getElementById("A_FORM_UNIT_NUMBER").className='ef';
		document.getElementById("A_FORM_UNIT_NUMBER").readOnly=false;
		document.getElementById("A_FORM_UNIT_NUMBER").tabIndex="1";		
		document.forms[0].A_FORM_UNIT_NUMBER.attachEvent("onkeyup",AGMax_Form_check);
	}	
}
}
//[PS]-WAG2728 AGMax_Form-End
//[PS]-Canada-Start


if (document.forms[0].REQUESTCODE.value == "BASAIAUXADDRq" || document.forms[0].REQUESTCODE.value == "BASAIAUXCHGRq" || document.forms[0].REQUESTCODE.value == "BASAIAUXINQRq")
{
	var state = document.getElementById("AUX_STATE");
	var outsideUS = state.options[state.selectedIndex].value;
  	
  	if (outsideUS == "XX")
  	{		
  			document.getElementById("AUX_ZIPCODE").mask = 'x#x#x#';	
  	}		
  	
	document.forms[0].AUX_STATE.attachEvent("onchange",CanadaZIPCode);
}		
//[PS]-Canada-End
  
  
//RV - PCR128 - WAG2459 - Add Taxable Field on Claim Check Entry screen - Start
if (document.forms[0].REQUESTCODE.value == "BASDRAFTADDRq" || document.forms[0].REQUESTCODE.value == "BASCPCHKADDRq" || document.forms[0].REQUESTCODE.value == "BASDRAFTCHGRq" || document.forms[0].REQUESTCODE.value == "BASDRAFTINQRq" || document.forms[0].REQUESTCODE.value == "BASDRAFTDLTRq" || document.forms[0].REQUESTCODE.value == "BASDRAFTDFTRq") 

{
var note2 = document.getElementById("DRFT_NOTE2").value;
var reqcode = document.forms[0].REQUESTCODE.value;

if (note2.substring(0,1) == '*')
{
      document.getElementById("DRFT_NOTE2").value = "";  
}    
else
{
    document.getElementById("DRFT_NOTE2").value = note2.substring(0,71);	
}

var taxable = note2.substring(71,72);

if (taxable =="")
	document.getElementById("INDM_TAXABLE").options[0].selected = true;
if (taxable == "N")
	document.getElementById("INDM_TAXABLE").options[0].selected = true;
if (taxable == "Y")
	document.getElementById("INDM_TAXABLE").options[1].selected = true;

//DG - WAG2512 - Incomplete Check Request - Start
var paytocode = document.getElementById("HOLD_PAYTOCODE").value;

	for (var i=0;i<document.getElementById("DRFT_PAYTOCODE1").options.length;i++)
	{
		if (document.getElementById("DRFT_PAYTOCODE1").options[i].value.substring(0,1) == paytocode)
			document.getElementById("DRFT_PAYTOCODE1").options[i].selected = true;
	}
	
var mailtocode = document.getElementById("HOLD_MAILTOCODE").value;

	for (var i=0;i<document.getElementById("DRFT_MAILTOCODE").options.length;i++)
		{
			if (document.getElementById("DRFT_MAILTOCODE").options[i].value.substring(0,1) == mailtocode)
				document.getElementById("DRFT_MAILTOCODE").options[i].selected = true;
		}
//DG - WAG2512 - Incomplete Check Request - End
	
}
//RV - PCR128 - WAG2459 - Add Taxable Field on Claim Check Entry screen - End


//AK -- Start -- Status Display on MemSplit Panel
if (document.forms[0].REQUESTCODE.value == "CPPMSCOUCHGRq" || document.forms[0].REQUESTCODE.value == "CPPMSCOUINQRq" || document.forms[0].REQUESTCODE.value == "CPPMSCOUDLTRq" || document.forms[0].REQUESTCODE.value == "CPPMSCOUADDRq") 
{
statusMemSplitDisp();	
}
if (document.forms[0].REQUESTCODE.value == "CPPMSCOUINQRq" || document.forms[0].REQUESTCODE.value == "CPPMSCOUDLTRq") 
{
document.getElementById("ID_reset").style.visibility = "hidden";
}
//AK -- End -- Status Display on MemSplit Panel
//BAS1040526B2 Start
   	if (document.forms[0].CurrentPageName.value == "POINT_Application_Information" ||
	document.forms[0].CurrentPageName.value == "POINT_Application_Information_END_N_A_Off" )
	{

	   if( !(document.getElementById("PROC_TRANSACTION_TYPE").value == "NB" &&
	      document.getElementById("PROC_LDA_SECURITY").value == "")
//BAS1041026A1 - Start
	 //     || document.forms[0].REQUESTCODE.value != "CPPBCONTCHGRq")
                || document.forms[0].REQUESTCODE.value  == "CPPBCONTCHGRq") 
//BAS1041026A1 - End

	  {
              
	     
	     document.getElementById("BC_CASH_WITH_APPLICATION").style.visibility = 'hidden';
	     document.getElementById("BC_CHECK_NUMBER").style.visibility = 'hidden';
	     document.getElementById("ID_L_Cash_With_Application").style.visibility = 'hidden';
	     document.getElementById("ID_L_Check_Number").style.visibility = 'hidden';
	     
	  }   
	  else
	  {
	     document.getElementById("ID_L_Amend_Number").style.visibility = 'hidden';
	     document.getElementById("ID_L_Amend_Date").style.visibility = 'hidden';
	     document.getElementById("BC_ENTERED_DATE").style.visibility = 'hidden';
	     document.getElementById("BC_AMENDMENT_NUMBER").style.visibility = 'hidden';	  
	  }
	}
//FSIT Issue#47901 resolution#39646 - Start

if (document.forms[0].REQUESTCODE.value == "BASDRAFTCHGRq" && document.getElementById("PROC_SPEC_USE1").value == 'Y') 
{
 document.getElementById("DRFT_NUMBER").readOnly=true;
 document.getElementById("DRFT_NUMBER").className='rf';
 document.getElementById("DRFT_BANKCODE").readOnly=true;
 document.getElementById("DRFT_BANKCODE").className='rf'; 
 var obj = document.forms[0].DRFT_MANUAL_CHECK;
  for (var i=0;i<obj.length;i++ )
  {
	if (obj[i].type == "radio")
		obj[i].disabled = true ;				 

  }
}

//FSIT Issue#47901 resolution#39646 - End
// FSIT# 47742 - EFT Enhancement - Start
	if (document.forms[0].REQUESTCODE.value == "ACHBANKHCHGRq" || document.forms[0].REQUESTCODE.value == "ACHBANKHADDRq" || document.forms[0].REQUESTCODE.value == "ACHBANKHDLTRq"  )	
	{
	
// FSIT# 54591 - EFT Issues - Start
if (document.forms[0].REQUESTCODE.value == "ACHBANKHCHGRq" && document.forms[0].PROC_SUCCESS_INDIC.value == "Y")
	{
		document.forms[0].REQUESTCODE.value = "ACHBANKHADDRq";
	}
// FSIT# 54591 - EFT Issues - End
if (document.forms[0].REQUESTCODE.value == "ACHBANKHCHGRq" && document.forms[0].PROC_SUCCESS_INDIC.value == "N")
	{
// FSIT# 54591 - EFT Issues - Start
//		document.forms[0].btnSubmit.value = "Change";
		document.forms[0].btnSubmit.value = "Update";
// FSIT# 54591 - EFT Issues - End
	}
	if (document.forms[0].REQUESTCODE.value == "ACHBANKHDLTRq" )
	{
		document.forms[0].REQUESTCODE.value = "ACHBANKHADDRq";
	}
	top.Grid.location.reload();
	}
// FSIT# 47742 - EFT Enhancement - End
	
//BAS1040526B2 End	
// AKM BAS1030606A0 Start
	if ((document.forms[0].REQUESTCODE.value == "BASCLMTIADDRq" || document.forms[0].REQUESTCODE.value == "BASCLMTICHGRq") && document.forms[0].PROC_SUCCESS_INDIC && document.forms[0].PROC_SUCCESS_INDIC.value != "Y")
	{
		if (document.forms[0].PROC_SPEC_USE3.value == "Y")
			document.forms[0].CLMT_CLIENT_TYPE.disabled = true;
		if (document.forms[0].CLMT_INSURED.value == "Y" && document.getElementById("ID_CLAIMANT_SEARCH_INDIVIDUAL"))
		{
			document.getElementById("ID_CLAIMANT_SEARCH_INDIVIDUAL").style.visibility = 'hidden';
			document.getElementById("ID_CLAIMANT_SEARCH_BUSINESS").style.visibility = 'hidden';
		}
	}
// AKM BAS1030606A0 End
// Resolution# 39959 Start
	if ((document.forms[0].REQUESTCODE.value == "BASDRAFTADDRq" || document.forms[0].REQUESTCODE.value == "BASCPCHKADDRq") && document.forms[0].PROC_SUCCESS_INDIC != null && document.forms[0].PROC_SUCCESS_INDIC.value != "Y" && document.forms[0].PROC_SPEC_USE3 != null && document.forms[0].PROC_SPEC_USE3.value == "Y")
	{
		document.forms[0].Refresh.value = "No";
	}
// Resolution# 39959 End
	//UNI1928 - NSV - Start.	
	//if (document.forms[0].REQUESTCODE.value.substr(0,8) == "BASCUSTI")
	if (document.forms[0].REQUESTCODE.value.substr(0,11) == "BASCUSTIADD")
	{
	// Populate the BC screen with Customer Number upon successful addition of a new customer, and perform other default processing
		doPostCustNumber ();
	}
	//UNI1928 - NSV - End.
//SNS
	//Start Cancellation workflow
	if (document.forms[0].REQUESTCODE.value == "CPPBCONTCNIRq")
	switchTree();
	//End Cancellation workflow
	//Execute 'switchTree()' in case of Deletion of Pending Cancellation and delete pending records also
	if ((document.getElementById("PROC_LDA_TYPE_ACTIVITY") != null) && (document.getElementById("PROC_SUCCESS_INDIC") != null))
		if ((document.forms[0].REQUESTCODE.value == "CPPBCONTDLTRq") && (document.getElementById("PROC_SUCCESS_INDIC").value == "Y"))
			 if(document.getElementById("PROC_LDA_TYPE_ACTIVITY").value == "CN")
			  {
			   switchTree();
			  }	
			  else
			   {
			   str = new String(parent.Policy.location);
		 	   var mode = str.substring(str.indexOf('&PolAction=')+11,str.indexOf('&PolAction=')+13);  
		 	   //NSV - Changed for EN Tree - Start		 	   
			   if(( mode == "EC") || ( mode == "EN"))
			    switchTree();
			    }	
			   //NSV - Changed for EN Tree - End 
	//Do Refresh-Tree logic only when Tree is existing
	if (document.forms[0].REQUESTCODE.value == "BASNAMEAADDRq") {
		if (!(document.getElementById("KEY_CLIENT_SEQUENCE_NUMBER").value == '0'))
			document.forms[0].REQUESTCODE.value = "BASNAMEACHGRq"
	}
	if (document.forms[0].REQUESTCODE.value == "BASNAMEBCHGRq") {
		if (document.getElementById("KEY_ADDRESS_SEQUENCE_NUMBER").value == '1')
			document.forms[0].REQUESTCODE.value = "BASNAMEBADDRq"
	}
	else {
	if (document.forms[0].REQUESTCODE.value == "BASNAMEBADDRq") {
			if(document.forms[0].PROC_SUCCESS_INDIC.value == "Y") {
			document.forms[0].REQUESTCODE.value = "BASNAMEBCHGRq";
			}
		}
	}
//BAS1040813A2 Start		
	if (document.forms[0].REQUESTCODE.value.substr(0,8) == "BASNAMEA")
		doChgMask();
//BAS1040813A2 End
	
	if(parent.Policy != null) {
//  BAS1020828A5 -  Large CPP - Start
	       switchtreespmode(); 
//  BAS1020828A5 -  Large CPP - End
	//Refresh-Tree logic STARTS here
		if(document.forms[0].Refresh.value == "Yes") {
			if ( top.First.document.getElementById("pointlogo") )
			//images in new folder CVH
		        top.First.document.getElementById("pointlogo").src = "../r/pointred-anim.gif";
			parent.Policy.location.reload();
                        //Refresh command centre when deleting policy. Logic Starts here
                        if(document.forms[0].REQUESTCODE.value == 'CPPBCONTDLTRq')
			top.First.location.reload();
                        //Refresh command centre logic ends here
		if (top.First !=null) {
		firstlocationstr = new String(top.First.location);
        		if ( (firstlocationstr.substring(firstlocationstr.indexOf('&PolAction=')+11).substring(0,2)) == 'EN' ) {
			firstlocationstr = firstlocationstr.substring(0,firstlocationstr.indexOf('&PolAction=')) + '&PolAction=EC' + firstlocationstr.substring(firstlocationstr.indexOf('&PolAction=')+13);
			top.First.location=firstlocationstr;
			}
		}
		}
	//Refresh-Tree logic ENDS here
	}
	var reqmode = document.forms[0].REQUESTCODE.value.substr(8,3);
	if (reqmode== "INQ" || reqmode == "DLT"|| reqmode=="RIN") {
// FSIT 150645 (FSIT 116322 Resolution ID 49776 ) - Jacada Code conversion - Start WAG FSIT#152315 Start
          if (reqmode== "INQ" || reqmode == "DLT"|| reqmode=="RIN"|| reqmode=="DTH"|| reqmode=="CAN") 
          {
		if (document.forms[0].REQUESTCODE.value == "BASRICONCANRq") 
		{
			for (var i = 0; i < document.getElementsByTagName('INPUT').length ; i++)
			{
				if (document.getElementsByTagName('INPUT').item(i).type == 'reset')
				{
					document.getElementsByTagName('INPUT').item(i).id = "RButton";
					document.getElementsByTagName('INPUT').item(i).style.visibility = 'hidden';
					break;
				}
			}	
		}
	if (document.forms[0].REQUESTCODE.value == "BASRICONINQRq") {
		document.getElementById("ID_Submit_Button").style.top = 600;
		document.getElementById("ID_Reset_Button").style.top = 600;		
	}
	}
	// FSIT 150645 (FSIT 116322 Resolution ID 49776 ) - Jacada Code conversion - End	WAG FSIT#152315 End	
	   	for(i=0;i<document.forms[0].elements.length;i++) {
			if (! (document.forms[0].elements[i].type == "button" || document.forms[0].elements[i].type == "reset" || document.forms[0].elements[i].type == "submit"  || document.forms[0].elements[i].type  == "hidden")) {
				if (document.forms[0].elements[i].Datatype == "mask")
					document.forms[0].elements[i].value = putmask(document.forms[0].elements[i].value,document.forms[0].elements[i].mask);
				else
					FormatField(document.forms[0].elements[ i ]);
				if (!((document.forms[0].elements[i].readOnly) || (document.forms[0].elements[i].type == "radio"))) {
					if (!(document.forms[0].elements[i].type == "select-one" || document.forms[0].elements[i].type == "checkbox"))
					// point to new CSS Classname CVH
					document.forms[0].elements[i].className='rf';
					}
				document.forms[0].elements[i].readOnly=true;
//FSIT # 39988 - Reinstatement Fee - Start
//	if (document.forms[0].elements[i].type == "radio" || document.forms[0].elements[i].type == "checkbox")
				if ((document.forms[0].elements[i].type == "radio" || document.forms[0].elements[i].type == "checkbox") && (document.forms[0].REQUESTCODE.value != "CPPBCONTRINRq") )
//FSIT # 39988 - Reinstatement Fee - End
					document.forms[0].elements[i].disabled=true;
				if (document.forms[0].elements[i].type == "select-one") {
// BAS1030606A0 Start
					if (document.forms[0].REQUESTCODE.value.substr(0,8) != "BASCUSSR" && document.forms[0].REQUESTCODE.value.substr(0,8) != "BASCSUMM") 
					{
// BAS1030606A0 End						
						document.forms[0].elements[i].disabled=true;
						}
						else {
						document.forms[0].elements[i].attachEvent("onchange",dropfunc);
						}
					}				
			}
			else {
				if (reqmode == "INQ") {
					if (document.forms[0].elements[i].type != "button")
						document.forms[0].elements[i].style.visibility = "hidden";
					else {
							 // Hides all normal buttons including Serach buttons, allows custom buttons to be displayed
						    // FSIT - 39332 - Start
					       //if ((document.forms[0].elements[i].value.indexOf('Search')>-1) || ( (document.forms[0].elements[i].value.indexOf('Add')>-1) &(!(document.forms[0].elements[i].value.indexOf('Additional')>-1)))|| (document.forms[0].elements[i].value.indexOf('Get')>-1) || (document.forms[0].elements[i].value.indexOf('Submit')>-1) || (document.forms[0].elements[i].value.indexOf('Edit')>-1) || (document.forms[0].elements[i].value.indexOf('Retrieve')>-1))
							if ((document.forms[0].elements[i].value.indexOf('Search')>-1) || ( (document.forms[0].elements[i].value.indexOf('Add')>-1) &(!(document.forms[0].elements[i].value.indexOf('Additional')>-1)))|| (document.forms[0].elements[i].value.indexOf('Get')>-1) || (document.forms[0].elements[i].value.indexOf('Submit')>-1) || (document.forms[0].elements[i].value.indexOf('Edit')>-1) || (document.forms[0].elements[i].value.indexOf('Retrieve')>-1)|| (document.forms[0].elements[i].value.indexOf('VIN')>-1))
						  // FSIT - 39332 - End
						         document.forms[0].elements[i].style.visibility = "hidden";
						}
				}
				else {
					if (document.forms[0].elements[i].type == "submit")
					{//HDK - BAS1031112A1 - Start
						var stateAbr = 	document.getElementById("STATE_ABBREVIATION");		
						var reqcode = document.forms[0].REQUESTCODE.value;
						if(stateAbr && reqcode == "WCVSTATEDLTRq")
						{   if(stateAbr.value != "")
							     document.forms[0].elements[i].focus();
					        }
						else	
							document.forms[0].elements[i].focus();
					}//HDK - end	
					else {
						if (document.forms[0].elements[i].type == "button") {
							if ((document.forms[0].elements[i].value.indexOf('Search')>-1) || (document.forms[0].elements[i].value.indexOf('Add')>-1) || (document.forms[0].elements[i].value.indexOf('Get')>-1) || (document.forms[0].elements[i].value.indexOf('Retrieve')>-1))
								document.forms[0].elements[i].style.visibility = "hidden";
						}
						else
							document.forms[0].elements[i].style.visibility = "hidden";
							// FSIT 150645 (FSIT 116322 Resolution ID 49776 ) - Jacada Code conversion - Start WAG FSIT#152315 Start
					/*		if (! (document.forms[0].elements[i].type == "reset" && document.forms[0].REQUESTCODE.value == 'BASRICONCANRq'))
							hideElement(document.forms[0].elements[i]); */
							// FSIT 150645 (FSIT 116322 Resolution ID 49776 ) - Jacada Code conversion - End	WAG FSIT#152315 End
					}
				}
			}
	   	}
	}
	else {
	//This if block sets the focus to the first input capable field on the panel
		if(document.forms[0].elements[0]!=null) {
			var i;
			var numofelements = document.forms[0].length;
			var focusdone=false;
			for( i = 0; i < numofelements; i++ ) {
				if (document.forms[0].elements[i].Datatype == "mask")
					document.forms[0].elements[i].value = putmask(document.forms[0].elements[i].value,document.forms[0].elements[i].mask);
				else
					FormatField(document.forms[0].elements[i]);
				if(document.forms[0].elements[i].type != "hidden" && !document.forms[0].elements[ i ].disabled && !document.forms[0].elements[ i ].readOnly &&!focusdone) {
				// BAS1030414A0 START
     					if(document.forms[0].elements[i].parentNode != null)
					{
					if(document.forms[0].elements[i].parentNode.style.display != 'none')
					{
					// BAS1030414A0 END

					if (document.forms[0].elements[i].type == "text")
						document.forms[0].elements[i].select();
					try {
						document.forms[0].elements[i].focus();
					}
					catch(err) {
					}
					focusdone=true;
					// BAS1030414A0 START
						}
					}
					// BAS1030414A0 END

				}
			}
		}
	}
	if (document.forms[0].REQUESTCODE.value == "CPPBCONTADDRq" && document.forms[0].PROC_MESSAGE.value == "" ) {
		//HDK - BAS1040405A1 - Refresh BC on changing policy company in NB
		//if(!document.getElementById("NASWITCH"))
		//AP - BAS1040512B0 - Pol Client screen not popping up when BC display for "Quotes"
		//if((!document.getElementById("NASWITCH"))&&(document.getElementById("Refresh").value != "Yes"))
		//BAS1040701A3 - Start.
	        //if(((!document.getElementById("NASWITCH"))&&(document.getElementById("Refresh").value != "Yes")) || ((!document.getElementById("NASWITCH"))&&(document.getElementById("BC_ISSUE_CODE").value == "Q")))
		 if(((!document.getElementById("NASWITCH"))&&(document.getElementById("Refresh").value != "Yes")) || ((!document.getElementById("NASWITCH"))&&(document.getElementById("BC_ISSUE_CODE").value == "Q") && (document.getElementById("BC_INSURED_ADDRESS_LINE_01").value =="")))
                //BAS1040701A3 - End
		//AP - End
		//HDK - End
		do001NASearch('BC_INSURED_ADDRESS_LINE_01','PMSP0200');
}
/* SI # BAS1040119A4 start LOC & MCO transfer : Kiran */
        if (document.forms[0].REQUESTCODE.value == "BASCLMTWADDRq") {
	  var loc = document.forms[0].KEY_LOCATION.value;
	  var mco = document.forms[0].KEY_MASTER_COMPANY.value;
	  var hlink = top.First.location.href;
	  var tloc,tmco,re = new RegExp("Key=....","m");
	  tmco = top.First.document.CommandCenterForm.MasterCompany.value;
	  tloc = top.First.document.CommandCenterForm.Location.value;
		if(mco != tmco || loc !=tloc)
		{
			top.First.location.assign(hlink.replace(re,"Key="+loc+mco));
/* SI # BAS1040507A1 Start */
//			hlink = top.treeiFrames.Documents.location.href;
//		        top.treeiFrames.Documents.location.href = hlink.replace(re,"Key="+loc+mco);
/* SI# BAS1040507A1 End */		 	
}
			hlink = top.treeiFrames.Policy.location.href;
			top.treeiFrames.Policy.location =  hlink.replace(re,"Key="+loc+mco);    	    	
}
/* SI # BAS1040119A4 end LOC & MCO transfer : Kiran */
/* SI # BAS1031028A1 start Adjuster/Vendor add in claims : Kiran */
        if (document.forms[0].REQUESTCODE.value == "BASADJUSADDRq") {
	    var qtext = document.forms[0].PROC_MESSAGE.value;
             if(document.forms[0].PROC_SPEC_USE2.value =="Y") {
               var where_to= confirm(" Please press OK to add an adjuster with the same Tax ID.");
            if ( where_to == true)
            {
              document.forms[0].PROC_SPEC_USE2.value = "T";              
              UnFormatFields();
              document.forms[0].submit();
            }
             }
           else { 
               if (document.forms[0].PROC_SPEC_USE2.value == "N")
               {
		document.forms[0].PROC_MESSAGE.value = "";               
               var add_Mail = confirm(qtext); 
		if(add_Mail == true)
		{
               document.forms[0].PROC_SPEC_USE2.value = "B";
               CheckVisibility();              
 		}
		else
		{
		document.forms[0].PROC_SPEC_USE2.value = "B";              
		UnFormatFields();
     		document.forms[0].submit();
		}
                } 
               }
           }
/* SI # BAS1031028A1 end Adjuster/Vendor add in claims : Kiran */
	document.forms[0].PushButtonValue.value = "";
	document.onhelp = function () 
	{
	    doHelp(document.forms[0].name);
		event.keyCode = 0;
		event.returnValue = false;
		event.cancelBubble = true;
		return false;
	};
	if(parent.Policy != null) {
		if (! (document.forms[0].Refresh.value == "Yes")) {
			if (top.First != null) {
				if (top.First.document.getElementById("pointlogo"))
				//images in new folder CVH
			    	top.First.document.getElementById("pointlogo").src = "../r/pointred.jpg";
			}
		}
	}

//HDK for additional interest	
if (document.forms[0].REQUESTCODE.value.substr(0,8) == "CPPADDIN")
		AddInt_onload();
/* SI # BAS1031104A0 - Added function call for Receivables_onload : Sonu */
	if (document.forms[0].REQUESTCODE.value.substr(0,3) == "RCV")
		Rcv_onload();
//BAS1040414A5 - Start		
	if (document.forms[0].REQUESTCODE.value.substr(0,8) == "WCVSTATE")	
		Wcv_State_onload();
// FSIT -40126 Start 
	if (document.forms[0].REQUESTCODE.value  ==  "WCVCLASSCHGRq")	
		{
		Wcv_Class_onload();
		}
// FSIT -40126 End
//BAS1040414A5 - End
// Resolution# 39959 Start
	if ((document.forms[0].REQUESTCODE.value == "BASDRAFTADDRq" || document.forms[0].REQUESTCODE.value == "BASCPCHKADDRq") && document.forms[0].PROC_SUCCESS_INDIC != null && document.forms[0].PROC_SUCCESS_INDIC.value != "Y")
	{
		if (document.forms[0].PROC_SPEC_USE3 != null && document.forms[0].PROC_SPEC_USE3.value == "Y")
		{
			document.forms[0].PROC_SPEC_USE3.value = " ";
			doClmDupPaymentsGrid('1');
		}
	}
	if (document.forms[0].REQUESTCODE.value == "BASDRAFTINQRq" && document.forms[0].PROC_SPEC_USE3 != null && document.forms[0].PROC_SPEC_USE3.value == "R")
		document.getElementById("ID_Return_Button").style.visibility = 'hidden';
// Resolution# 39959 End
//FSIT Issue#39616 Resolution#39941 Start
if (document.forms[0].REQUESTCODE.value  ==  "BASPAYCKINQRq")
{
	if(document.forms[0].PAY_PAY_TYPE.value == "1")
	{
		var key = document.forms[0].fullkey.value;
		parent.Second.location.href= "../servlet/POINTManager?KEY="+ key +"&target=jsp/PayCheckReturnPremiumDetails.jsp&REQUESTCODE=BASPAYCKRTPRq";
	}
	//FSIT#112850 Res#47746 removal  - Start
	/*
	//FSIT#112850 Res#47746 -Start
	if(document.forms[0].PAY_PAY_TYPE && document.forms[0].PAY_PAY_TYPE.value == "2")

	{   
		document.getElementById("ID_L_Address").style.visibility = 'hidden';
		document.getElementById("ID_L_Payee_Name").style.visibility = 'hidden';
		document.getElementById("ID_L_Zip_Code").style.visibility = 'hidden';
		document.getElementById("ID_DSP_PAY_PAYEE_NAME").style.visibility = 'hidden';
		document.getElementById("ID_DSP_PAY_PAYEE_2").style.visibility = 'hidden';
		document.getElementById("ID_DSP_PAY_MAIL_LINE_3").style.visibility = 'hidden';
		document.getElementById("ID_DSP_PAY_MAIL_LINE_4").style.visibility = 'hidden';
		document.getElementById("ID_DSP_PAY_MAIL_ZIP").style.visibility = 'hidden';
        var paytoname = document.getElementById("CLM_PAYTO_NAME").value;
		document.getElementById("ID_CLM_PAYTO_NAME").innerHTML = "<TEXTAREA style=\"FONT-SIZE: 8pt; WIDTH: 100%; COLOR: #000000; FONT-FAMILY: Verdana; POSITION: absolute; HEIGHT: 100%; BACKGROUND-COLOR: #d7d7d7; OVERFLOW-Y: hidden; TEXT-DECORATION: none\" tabIndex=-1 name=CLM_PAYTO_NAME readOnly wrap=PHYSICAL></TEXTAREA>";
		document.getElementById("ID_CLM_PAYTO_NAME").value = paytoname;
	    paytoname = paytoname.replace(/~~/g, "\r\n" );
        document.getElementById("CLM_PAYTO_NAME").value = paytoname;
	    var j;
		var mailtoadd;
		var position;
		for(j = 1;j<7;j++)
		{   
			mailtoadd = document.getElementById("CLM_MAILTO_ADD"+j).value;
			if (mailtoadd == null || trim(mailtoadd) == "")
		    {  
				document.getElementById("ID_MAILTO_ADD"+j).style.visibility = 'hidden'; 
				for(var i =j;i<7;i++)
				{
					if(i<6) 
					{
						position = document.getElementById("ID_MAILTO_ADD"+(i+1)).style.top;
						position = position.replace(/px/g, "" );
						position -= 22;
						document.getElementById("ID_MAILTO_ADD"+(i+1)).style.top = position +'px';
					}
					if(i == 6)
					{
						position = document.getElementById("ID_MAILTO_ZIP").style.top;
						position = position.replace(/px/g, "" );
						position -= 25;
						document.getElementById("ID_MAILTO_ZIP").style.top = position +'px';
						document.getElementById("ID_L_MAILTO_ZIP").style.top =position +'px';	
					}	
				}
			  }
		   }
	  }
else if(document.forms[0].PAY_PAY_TYPE)
	 {		
		document.getElementById("ID_L_PAYTONAME").style.visibility = 'hidden';
		document.getElementById("ID_L_MAIL_TO_NAME").style.visibility = 'hidden';
		document.getElementById("ID_L_MAILTO_ADD").style.visibility = 'hidden';
		document.getElementById("ID_L_MAILTO_ZIP").style.visibility = 'hidden';
		document.getElementById("ID_CLM_PAYTO_NAME").style.visibility = 'hidden';
		document.getElementById("ID_MAILTO_NAME").style.visibility = 'hidden';
		document.getElementById("ID_MAILTO_ADD1").style.visibility = 'hidden';
		document.getElementById("ID_MAILTO_ADD2").style.visibility = 'hidden';
		document.getElementById("ID_MAILTO_ADD3").style.visibility = 'hidden';
		document.getElementById("ID_MAILTO_ADD4").style.visibility = 'hidden';
		document.getElementById("ID_MAILTO_ADD5").style.visibility = 'hidden';
		document.getElementById("ID_MAILTO_ADD6").style.visibility = 'hidden';
		document.getElementById("ID_MAILTO_ZIP").style.visibility = 'hidden';
	}
	//FSIT#112850 - Res#47746 - End
	*/
	//FSIT#112850 Res#47746 removal  - End	
}
//FSIT Issue#39616 Resolution#39941 End

//FSIT Issue#57880 Resolution#40170 Start
if (document.forms[0].REQUESTCODE.value == "BASDRAFTADDRq" || document.forms[0].REQUESTCODE.value.substr(0,8) == "BASINDMP")
{
	if(document.getElementById("ID_Return_Button") !=null)
		document.getElementById("ID_Return_Button").style.visibility = 'hidden';
}
//FSIT Issue#57880 Resolution#40170 End
//FSIT#112850 Res#47746 removal  - Start
/*
//FSIT#112850 - Resolution# 47746 - Start
if(document.forms[0].REQUESTCODE.value  ==  "BASDRAFTCHGRq" || document.forms[0].REQUESTCODE.value  ==  "BASDRAFTINQRq" ||  document.forms[0].REQUESTCODE.value  ==  "BASDRAFTADDRq" || document.forms[0].REQUESTCODE.value  ==  "BASINDMPADDRq" || document.forms[0].REQUESTCODE.value  ==  "BASINDMPCHGRq" || document.forms[0].REQUESTCODE.value  ==  "BASINDMPINQRq" )
	{
		if(document.forms[0].REQUESTCODE.value  ==  "BASDRAFTINQRq")
		{
			document.getElementById("ID_Display_Payees_Button").style.visibility = 'hidden';

		}
		document.getElementById("ID_PAYEE1_EDIT").style.visibility = 'hidden';
		document.getElementById("ID_PAYEE2_EDIT").style.visibility = 'hidden';
		document.getElementById("ID_PAYEE3_EDIT").style.visibility = 'hidden';
		var payee1 = document.getElementById("DRFT_PAYEENAME1").value;
		var payee2 = document.getElementById("DRFT_PAYEENAME2").value; 
		var payee3 = document.getElementById("DRFT_PAYEENAME3").value;
		var DefaultPaytoname = "";
		var paytoname = document.getElementById("DRFT_PAYTONAME").value;
		if (payee1.length == 0)
		{       
			DefaultPaytoname = "";
		}
		else if (payee2.length == 0  && payee3.length == 0)
		{ 
			DefaultPaytoname = payee1;
		}
		else if (payee3.length == 0  && payee2.length != 0)
		{ 
			DefaultPaytoname = payee1 + " AND " + payee2;
		}
		else if (payee2.length == 0 && payee3.length != 0)
		{ 
			DefaultPaytoname = payee1 + " AND " + payee3;
		}
		else 
		{ 
			DefaultPaytoname = payee1 + ", " + payee2 + " AND " + payee3; 
		}
		if (DefaultPaytoname!= paytoname)
		{
			for(i=0;i<document.getElementsByTagName("input").length;i++)
				if (document.getElementsByTagName("input").item(i).value == "Check Image" && document.getElementsByTagName("input").item(i) != null && document.getElementsByTagName("input").item(i).type == "button" )
				{
					document.getElementsByTagName("input").item(i).style.backgroundColor = "#FFFF00";
					break;
				}
		} 
	
	
	}
	
	//FSIT#112850 - Resolution# 47746 - End
	*/
	//FSIT#112850 Res#47746 removal  - End

//***AFI1030822A0*** Begin"Code Added for Supress Generation of N1 at NB for AFI."
//UNI#887 - Start
//NSV - Added for Original Inception Date Start
if (document.forms[0].REQUESTCODE.value == "CPPBCONTINQRq" || document.forms[0].REQUESTCODE.value == "CPPBCONTCHGRq" || document.forms[0].REQUESTCODE.value == "CPPBCONTCANRq" || document.forms[0].REQUESTCODE.value == "CPPBCONTADDRq")
//NSV - Added for Original Inception Date End
//UNI#887 - End
{	
	doShowPrepaid();
}
//***AFI1030822A0*** End.
//FSIT 148322 - Start
    if(document.forms[0].REQUESTCODE.value == "CPPADDINADDRq" )
    {    
           	    	document.getElementById('ID_ADDLINT_DESCRIPTION_LINE_7').style.visibility ='hidden';
          	    	document.getElementById('ID_Primary_Mortgagee').style.visibility ='hidden';
    }
	//*********** change for zipcode - 179801 Starts 
	 if(document.forms[0].REQUESTCODE.value == "CPPADDINCHGRq"   ||  document.forms[0].REQUESTCODE.value == "CPPADDININQRq" || document.forms[0].REQUESTCODE.value == "CPPADDINADDRq" )
    {    
			var strchr;
			var strVal =document.getElementById("ADDLINT_ZIP_CODE").value;
			var isalphaval="NO";
			for (var i = 0; i < 5; i++) 
			{
				strchr =  strVal.charAt(i);
			    if (CharacterIsAlpha(strchr)) 
				{
					isalphaval="YES";
				}	
			}
			if(isalphaval=="YES")
			{
				strval1=document.forms[0].ADDLINT_ZIP_CODE.value.substring(0,5);
				strval2=document.forms[0].ADDLINT_ZIP_CODE.value.substring(6,strVal.length);
				strVal = strval1+ strval2;
				document.forms[0].ADDLINT_ZIP_CODE.value=strVal;
			}
   }
//*********** change for zipcode - 179801 Ends
    if(document.forms[0].REQUESTCODE.value == "CPPADDINCHGRq" || document.forms[0].REQUESTCODE.value == "CPPADDINDLTRq" || document.forms[0].REQUESTCODE.value == "CPPADDININQRq")
    {    
        	if(!(document.getElementById("ADDLINT_KEY_USE_CODE").value == 'MT') && (document.forms[0].COMMON_DESC_TYPE0ACT_PAYPLAN.value == 'Y'))
        	{
               	    	document.getElementById('ID_ADDLINT_DESCRIPTION_LINE_7').style.visibility ='hidden';
              	    	document.getElementById('ID_Primary_Mortgagee').style.visibility ='hidden';
              	}
    }
//FSIT 148322 - End
//***AFI1030902A0*** Begin"Code Added for Integration on PMSP1200A in AFI System."
if (document.forms[0].REQUESTCODE.value == "CPPADDINADDRq" || document.forms[0].REQUESTCODE.value == "CPPADDINCHGRq" || document.forms[0].REQUESTCODE.value == "CPPADDINDLTRq" || document.forms[0].REQUESTCODE.value == "CPPADDININQRq" || document.forms[0].REQUESTCODE.value == "CPPADDINDFTRq" )
{
	doBreakFEINID();
//WAG4547 - Start
    var AddCode = document.getElementById("ADDLINT_KEY_USE_CODE").value;  
  	if(AddCode=='AE')
	{
      document.getElementById("ADDLINT_DESCRIPTION_LINE_6").options[0].value = document.getElementById("ADDLINT_DESCRIPTION_LINE_5A").value;
    }
//WAG4547 - End
}
//***AFI1030902A0*** End.

//***AFI1030818A18*** Begin "Code Added for PIC/POCS mod to concat Emod Conf & Risk ID"
if (document.forms[0].REQUESTCODE.value == "WCVSTATEADDRq" || document.forms[0].REQUESTCODE.value == "WCVSTATECHGRq" || document.forms[0].REQUESTCODE.value == "WCVSTATEDLTRq" || document.forms[0].REQUESTCODE.value == "WCVSTATEINQRq" || document.forms[0].REQUESTCODE.value == "WCVSTATEDFTRq" )
{
	doBreakEsoNo();
}
//***AFI1030818A18*** End.

//Start ****UNI1040507A2 ***** For Reinstatement Fee Override 
if (document.forms[0].REQUESTCODE.value == "CPPBCONTRINRq")
{	
	for(i=0;i<document.forms[0].elements.length;i++) {
//*** UNI4838 KKB *** Begin - Added to Enable BC_SPECIAL_USE_C field.
	if (document.forms[0].elements[i].name == "BC_SPECIAL_USE_C")
		{
		document.forms[0].elements[i].removeAttribute("READONLY","NO");
		document.forms[0].elements[i].className='entryfields';
		}
//*** UNI4838 KKB *** End.
	if (document.forms[0].elements[i].type == "radio")
		document.forms[0].elements[i].disabled=false;
	}
		
}
//End ****UNI1040507A2 ***** For Reinstatement Fee Override 
//Start **** CLP1040726A0**** To Disable the Cancellation screen when more than one modules exists for a policy
if ((document.forms[0].REQUESTCODE.value == "CPPBCONTCANRq") && (document.forms[0].PROC_SUCCESS_INDIC.value == "E")) 
{		
document.getElementById('ID_Reason_Amend_Search_Button').style.visibility = "hidden";
document.getElementById('ID_BC_Customer_Number_Search').style.visibility = "hidden";
//UNI#887 - Start
//document.getElementById('ID_BC_Customer_Name_Number_Search').style.visibility = "hidden";
//UNI#887 - End
//UNI1165 - Start (Disable was allowing multiple clicks.)
document.getElementById('ID_Submit_Button').style.visibility = "hidden";
document.getElementById('ID_Reset_Button').style.visibility = "hidden";
//UNI1165 - End (Disable was allowing multiple clicks.)
for(i=0;i<document.forms[0].elements.length;i++) {	
		document.forms[0].elements[i].readOnly=true;
}
}
//End **** CLP1040726A0**** To Disable the Cancellation screen when more than one modules exists for a policy

//*** UNI136 *** Begin
if (document.forms[0].REQUESTCODE.value == "CPPBCONTADDRq" || document.forms[0].REQUESTCODE.value == "CPPBCONTRENRq" || document.forms[0].REQUESTCODE.value == "CPPBCONTCHGRq" || document.forms[0].REQUESTCODE.value == "CPPBCONTDFTRq" || document.forms[0].REQUESTCODE.value == "CPPBCONTDFQRq")
{
	//document.getElementById("PROC_LDA_CUR_REC_SET_STATUS").value = document.getElementById("BC_AGENT_NUMBER").value;
	if (document.forms[0].REQUESTCODE.value == "CPPBCONTDFTRq")
	{
		document.getElementById("PROC_LDA_SET_TYPE_NUMBER").value = document.getElementById("BC_KEY_LOCATION_COMPANY").value;
		document.getElementById("PROC_LDA_RECORD_IND").value = document.getElementById("BC_KEY_MASTER_COMPANY").value;
	}
}	
//*** UNI136 *** End

//*** UNI234 *** Begin.
if ((document.forms[0].REQUESTCODE.value == "QUTPROCSISSRq")) 
{
// WAG W11001 Checkbox not checked issue Start
//document.getElementById("NEW_AUTONUM").checked = false;
//document.getElementById("NEW_AUTONUM").value = "N";
document.getElementById("NEW_AUTONUM").checked = true;
document.getElementById("NEW_AUTONUM").value = "Y";
// WAG W11001 Checkbox not checked issue End
}

//*** UNI234 *** End.

//UNI#887 - Start
if (document.forms[0].REQUESTCODE.value == "CPPBCONTCANRq")
{
	var strReasonAmmend = document.forms[0].BC_REASON_AMEND_DIGIT1.value + document.forms[0].BC_REASON_AMEND_DIGIT2.value + document.forms[0].BC_REASON_AMEND_DIGIT3.value; 
	if ((strReasonAmmend == "CRW") && (document.forms[0].PROC_TRANSACTION_TYPE.value == "CR"))
	{
		document.forms[0].BC_REASON_AMEND_DIGIT1.disabled = true;
		document.forms[0].BC_REASON_AMEND_DIGIT2.disabled = true;
		document.forms[0].BC_REASON_AMEND_DIGIT3.disabled = true;
		document.getElementById('ID_Reason_Amend_Search_Button').style.visibility = "hidden";
	}	
}
//UNI#887 - End
//JKS FSIT 133250 - Start
if (document.forms[0].REQUESTCODE.value == "CPPBCONTCANRq")
{
	var strReasonAmmend = document.forms[0].BC_REASON_AMEND_DIGIT1.value + document.forms[0].BC_REASON_AMEND_DIGIT2.value + document.forms[0].BC_REASON_AMEND_DIGIT3.value; 
	if ((strReasonAmmend == "MRW") && (document.forms[0].PROC_TRANSACTION_TYPE.value == "MR"))
	{
		document.forms[0].BC_REASON_AMEND_DIGIT1.disabled = true;
		document.forms[0].BC_REASON_AMEND_DIGIT2.disabled = true;
		document.forms[0].BC_REASON_AMEND_DIGIT3.disabled = true;
		document.getElementById('ID_Reason_Amend_Search_Button').style.visibility = "hidden";
	}	
}
//JKS FSIT 133250 - End
//***KKB***UNI2764*** Begin.
if (document.forms[0].REQUESTCODE.value == "CPPBCONTCHGRq" || document.forms[0].REQUESTCODE.value == "CPPBCONTCANRq")
{
	if ((document.forms[0].PROC_TRANSACTION_TYPE.value == "RI") || 
	    (document.forms[0].PROC_TRANSACTION_TYPE.value == "EN") || 
	    (document.forms[0].PROC_TRANSACTION_TYPE.value == "CR") || 
//[PS]-PCR039- FSIT# 128718 - Start	    
	    (document.forms[0].PROC_TRANSACTION_TYPE.value == "MR") || 
//[PS]-PCR039- FSIT# 128718 - End
	    (document.forms[0].PROC_TRANSACTION_TYPE.value == "CN"))
	{
		document.forms[0].BC_CUSTOMER_NUMBER.className= 'resultfields';
		document.forms[0].BC_CUSTOMER_NUMBER.readOnly = true;
		document.getElementById('ID_BC_Customer_Number_Search').style.visibility = "hidden";
	}
}
//***KKB***UNI2764*** Begin.
//***KKB***UNI2345*** Begin.

//"Code Added to default ENDORSEMENT NUMBER with 001."
if (document.forms[0].REQUESTCODE.value == "WCVENDORADDRq")
{
document.getElementById("ENDT_ENDORSEMENT_NUMBER").value = "001";
}

//"Code Added for disabling checkboxes in Policy Change Form Delete and Inquire."
if (document.forms[0].REQUESTCODE.value == "WCVENDORDLTRq" || document.forms[0].REQUESTCODE.value == "WCVENDORINQRq" )
{	
	document.getElementById("ENDT_IND_INSURED_NAME").disabled = true;
	document.getElementById("ENDT_IND_INSURED_MAILING").disabled = true;
	document.getElementById("ENDT_IND_INSURED_LEGAL_STATUS").disabled = true;
	document.getElementById("ENDT_IND_POLICY_NUMBER").disabled = true;
	document.getElementById("ENDT_IND_EFFECTIVE_DTEVAL").disabled = true;
	document.getElementById("ENDT_IND_EXPIRATION_DTEVAL").disabled = true;
	document.getElementById("ENDT_IND_INSURED_WORKPLACE").disabled = true;
	document.getElementById("ENDT_IND_PRODUCER_NAME").disabled = true;
	document.getElementById("ENDT_IND_CARRIER_SRVG_OFFICE").disabled = true;
	document.getElementById("ENDT_IND_CARRIER_NUMBER").disabled = true;
	document.getElementById("ENDT_IND_INTER_INTRA_NUMBER").disabled = true;
	document.getElementById("ENDT_IND_INTERIM_ADJ_PREMIUM").disabled = true;
	document.getElementById("ENDT_IND_EXPERIENCE_MOD").disabled = true;
	document.getElementById("ENDT_IND_ITEM_3_A_STATES").disabled = true;
	document.getElementById("ENDT_IND_ITEM_3_B_LIMITS").disabled = true;
	document.getElementById("ENDT_IND_ITEM_3_C_STATES").disabled = true;
	document.getElementById("ENDT_IND_ITEM_3_D_ENDT_NUMBER").disabled = true;
	document.getElementById("ENDT_IND_ITEM_4_OTHER").disabled = true;
}
//***KKB***UNI2345***End.

//NSV - Added for Original Inception Date Start
if ((document.forms[0].REQUESTCODE.value == "CPPBCONTCHGRq") && (document.forms[0].BC_ORIGINAL_INCEPTION_DATE != null))
{
	if ((document.forms[0].BC_STATUS.value == "Pending") && ((document.forms[0].BC_TYPE_ACTIVITY.value == "NB") || (document.forms[0].BC_TYPE_ACTIVITY.value == "RB")))
	{
		document.forms[0].BC_ORIGINAL_INCEPTION_DATE.className='entryfields';
		document.forms[0].BC_ORIGINAL_INCEPTION_DATE.readOnly = false;
		document.forms[0].BC_ORIGINAL_INCEPTION_DATE.DISABLED = false;
	}
	else
	{
		document.forms[0].BC_ORIGINAL_INCEPTION_DATE.className='resultfields';
		document.forms[0].BC_ORIGINAL_INCEPTION_DATE.readOnly = true;
		document.forms[0].BC_ORIGINAL_INCEPTION_DATE.DISABLED = true;	
	}
}
//NSV - Added for Original Inception Date End
//NSV - Mem Split Commission PCR - Start
if ((document.forms[0].REQUESTCODE.value == "CPPMSCOUADDRq") || (document.forms[0].REQUESTCODE.value == "CPPMSCOUCHGRq"))
{
	document.forms[0].PROC_STATE_CODE.attachEvent("onchange",PopulateData);
	//NSV - Mem Split Commission PCR Change - Start
	document.forms[0].PROC_COUNTY_CODE.attachEvent("onchange",populateCountyName);
	//NSV - Mem Split Commission PCR Change - End
}
//NSV - Mem Split Commission PCR - End
//NSV - Combine fields AGPROF coverage - Start
if ((document.forms[0].REQUESTCODE.value.substr(0,8) == "CPPCOVER" ) && (document.getElementById("COVERAGE_KEY_COVERAGE").value == 'AGPROJ'))
{
	document.getElementById("GC_CFI_1").value = document.getElementById("GC_USER_TEXT_2").value + document.getElementById("GC_USER_TEXT_3").value + document.getElementById("GC_USER_TEXT_4").value + document.getElementById("GC_USER_TEXT_5").value;
}
//NSV - Combine fields AGPROF coverage - End

//Niraj - WAG 1785, WAG 1786 - Additional Interest - Making 'Address' and 'City' non-mandatory for 'BP' and 'OW' - Start
//Sridhar - 01/10/07 - WAG 2450 - Additional Interest - Making 'Address' and 'City' non-mandatory for 'V1', 'V2' and 'V3'
if((document.forms[0].REQUESTCODE.value == "CPPADDINCHGRq") || (document.forms[0].REQUESTCODE.value == "CPPADDINADDRq") || (document.forms[0].REQUESTCODE.value == "CPPADDININQRq") || (document.forms[0].REQUESTCODE.value == "CPPADDINDLTRq") || (document.forms[0].REQUESTCODE.value == "CPPADDINDFTRq") )
{

if((document.getElementById('ADDLINT_KEY_USE_CODE').value =='BP') || (document.getElementById('ADDLINT_KEY_USE_CODE').value =='OW') || (document.getElementById('ADDLINT_KEY_USE_CODE').value =='V1') || (document.getElementById('ADDLINT_KEY_USE_CODE').value =='V2') || (document.getElementById('ADDLINT_KEY_USE_CODE').value =='V3'))
{
document.getElementById('ID_Address').style.visibility = 'visible';
document.getElementById('ID_L_Address_Line').style.visibility = 'hidden';
document.getElementById('ID_City').style.visibility = 'visible';
document.getElementById('ID_L_AI_City_State').style.visibility = 'hidden';
}
else
{
document.getElementById('ID_Address').style.visibility = 'hidden';
document.getElementById('ID_L_Address_Line').style.visibility = 'visible';
document.getElementById('ID_City').style.visibility = 'hidden';
document.getElementById('ID_L_AI_City_State').style.visibility = 'visible';
}

}
//Sridhar - 01/10/07 - WAG 2450 - Additional Interest - Making 'Address' and 'City' non-mandatory for 'V1', 'V2' and 'V3'
//Niraj - WAG 1785, WAG 1786 - Additional Interest - Making 'Address' and 'City' non-mandatory for 'BP' and 'OW' - End
//WAG4367 - Start
if (document.forms[0].REQUESTCODE.value == "PAPDCAATCHGRq")
{
var driverattr = document.getElementById('COMMON_DESC_CONDITIONAL_TEXT').value;
if (driverattr.substring(0,1)=='@')
{
   document.getElementById('COMMON_DESC_CONDITIONAL_TEXT').value = driverattr.substring(1);
}
}
//WAG4367 - End

	// FSIT 150645 (FSIT 116322 Resolution ID 49776 ) - Jacada Code conversion - Start	 WAG FSIT#152315 Start
	if (document.forms[0].REQUESTCODE.value == "BASRICONCHGRq" || document.forms[0].REQUESTCODE.value == "BASRICONADDRq"
	 || document.forms[0].REQUESTCODE.value == "BASRICONINQRq" || document.forms[0].REQUESTCODE.value == "BASRICONCANRq")
	{
		displayReinsurancePage(document.forms[0].REQUESTCODE.value);
	}
	// FSIT 150645 (FSIT 116322 Resolution ID 49776 ) - Jacada Code conversion - End	 WAG FSIT#152315 End
	
	//FSIT 160791 - Tab Fix Start
	try
	{
		if (document.forms[0].REQUESTCODE.value == "CPPUNITSADDRq" || document.forms[0].REQUESTCODE.value == "CPPUNITSCHGRq")
		{
			if(document.forms[0].BC_LINE_OF_BUSINESS.value == "BP")
			{
				if(document.getElementById('COMMON_TAB_FLAG').value =='Yes')
				{
				document.getElementById('A_UNIT_UNIT_DESCRIPTION_1').focus();
				}
		}	}
	}
	catch(e){}
	//FSIT 160791 - Tab Fix End
//FSIT 164079 Start
if(document.forms[0].REQUESTCODE.value == "CPPCOVERADDRq")
{
if((document.getElementById("target") != null) && ((document.getElementById("target").value == 'jsp/WAGPTCagGLUSCovPREMOP.jsp')||(document.getElementById("target").value == 'jsp/PTCppGLUSCovPREMOP.jsp')))
if((document.getElementById('GC_COVER_CLASS_CODE').value !="") && (document.getElementById('COMMON_DESC_COVERAGE_EFF_DATE').value >= trim(document.getElementById('COMMON_DESC_SWITCHVAL').value)))
{
	var objUSERIND1 = document.getElementById("GC_USER_INDICATOR_1");
	
	for ( var j = objUSERIND1.options.length - 1; j >= 0; j-- ) objUSERIND1.options[j] = null;
	var objUSERIND5 = document.getElementById("GC_USER_INDICATOR_5");
	
	for ( var j = objUSERIND5.options.length - 1; j >= 0; j-- ) objUSERIND5.options[j] = null;
 	if(document.forms[0].COMMON_DESC_ASA1REP_A1MDTX_IND.value == "A" || document.forms[0].COMMON_DESC_ASA1REP_A1MDTX_IND.value == "a" || document.forms[0].COMMON_DESC_ASA1REP_A1MDTX_IND.value == "G" || document.forms[0].COMMON_DESC_ASA1REP_A1MDTX_IND.value == "g") 
 	{
	objUSERIND1.options[0] = new Option("ELP/ 'A' Rate", document.forms[0].COMMON_DESC_ASA1REP_A1MDTX_IND.value);	
 	}
 	else
 	{		
		objUSERIND1.options[0] = new Option("Not Applicable", "");	
		document.getElementById('GC_USER_FACTOR_1').value = "0.0";
 		document.forms[0].GC_USER_FACTOR_1.className='rf';
 		document.forms[0].GC_USER_FACTOR_1.readOnly=true;
 	}
 
 	if(document.forms[0].COMMON_DESC_ASA1REP_A1MCTX_IND.value == "I") 
 	{

		objUSERIND5.options[0] = new Option("Not Applicable", "");	
			document.getElementById('GC_USER_FACTOR_3').value = "0.0";
			document.forms[0].GC_USER_FACTOR_3.className='rf';
			document.forms[0].GC_USER_FACTOR_3.readOnly=true;
 	}
 	else
 	{
 		if(document.forms[0].COMMON_DESC_ASA1REP_A1METX_IND.value == "A" || document.forms[0].COMMON_DESC_ASA1REP_A1METX_IND.value == "a" || document.forms[0].COMMON_DESC_ASA1REP_A1METX_IND.value == "G" || document.forms[0].COMMON_DESC_ASA1REP_A1METX_IND.value == "g") 
 		{
		objUSERIND5.options[0] = new Option("ELP/ 'A' Rate", document.forms[0].COMMON_DESC_ASA1REP_A1METX_IND.value);	
 	        }
 		else
 		{			
		 objUSERIND5.options[0] = new Option("Not Applicable", "");
		  document.getElementById('GC_USER_FACTOR_3').value = "0.0";
		  document.forms[0].GC_USER_FACTOR_3.className='rf';
		  document.forms[0].GC_USER_FACTOR_3.readOnly=true;
 		}
 	 }
}

}


//FSIt-201545 - in MCO 05 field "Druggist Broaden " on the "PREMOP" coverage POINT IN panel must be greyed out if the policy effective date is 1/1/14 or greater. --- Starts
if((document.forms[0].REQUESTCODE.value == "CPPCOVERCHGRq") ||(document.forms[0].REQUESTCODE.value == "CPPCOVERDLTRq")||(document.forms[0].REQUESTCODE.value == "CPPCOVERINQRq") || (document.forms[0].REQUESTCODE.value == "CPPCOVERADDRq") )
	{
		if((document.getElementById("target") != null) &&(document.getElementById("target").value == 'jsp/PTCppGLUSCovPREMOP.jsp') && (document.getElementById("COVERAGE_KEY_MASTER_COMPANY").value=="05"))
		{
			if(document.getElementById("COMMON_DESC_COVERAGE_EFF_DATE").value >= "1140101") 
			{
					document.getElementById('GC_USER_INDICATOR_35').disabled = true;
			}
		}
	}
//FSIt-201545 - in MCO 05 field "Druggist Broaden " on the "PREMOP" coverage POINT IN panel must be greyed out if the policy effective date is 1/1/14 or greater. --- Ends



if((document.forms[0].REQUESTCODE.value == "CPPCOVERCHGRq") ||(document.forms[0].REQUESTCODE.value == "CPPCOVERDLTRq")||(document.forms[0].REQUESTCODE.value == "CPPCOVERINQRq"))
{
if((document.getElementById("target") != null) && ((document.getElementById("target").value == 'jsp/WAGPTCagGLUSCovPREMOP.jsp')||(document.getElementById("target").value == 'jsp/PTCppGLUSCovPREMOP.jsp')))
{

if(document.getElementById('COMMON_DESC_COVERAGE_EFF_DATE').value >= trim(document.getElementById('COMMON_DESC_SWITCHVAL').value))
{

// FSIT 173753 Start
//if((document.getElementById("GC_COVER_CLASS_CODE").value == "") || (trim(document.forms[0].COMMON_DESC_CLASS_CODE_GL.value) == document.getElementById('GC_COVER_CLASS_CODE').value)||(document.forms[0].REQUESTCODE.value == "CPPCOVERDLTRq")||(document.forms[0].REQUESTCODE.value == "CPPCOVERINQRq"))
if((document.getElementById("GC_COVER_CLASS_CODE").value == "") || ((trim(document.forms[0].COMMON_DESC_CLASS_CODE_GL.value) == document.getElementById('GC_COVER_CLASS_CODE').value) && (document.forms[0].PROC_LDA_RENEWAL_MODULE.value == ""))||(document.forms[0].REQUESTCODE.value == "CPPCOVERDLTRq")||(document.forms[0].REQUESTCODE.value == "CPPCOVERINQRq"))
// FSIT 173753 End
 {
	var objUSERIND1 = document.getElementById("GC_USER_INDICATOR_1");
	for ( var j = objUSERIND1.options.length - 1; j >= 0; j-- ) objUSERIND1.options[j] = null;
	var objUSERIND5 = document.getElementById("GC_USER_INDICATOR_5");
	for ( var j = objUSERIND5.options.length - 1; j >= 0; j-- ) objUSERIND5.options[j] = null;
	
 	if(document.forms[0].COMMON_DESC_USER_INDICATOR_1.value == "A" || document.forms[0].COMMON_DESC_USER_INDICATOR_1.value == "a" || document.forms[0].COMMON_DESC_USER_INDICATOR_1.value == "G" || document.forms[0].COMMON_DESC_USER_INDICATOR_1.value == "g") 
 	{
 	objUSERIND1.options[0] = new Option("ELP/ 'A' Rate", document.forms[0].COMMON_DESC_USER_INDICATOR_1.value);
 	}
	//FSIT 195919 Starts
	else if(document.forms[0].COMMON_DESC_USER_INDICATOR_1.value == "R" || document.forms[0].COMMON_DESC_USER_INDICATOR_1.value == "r" ) 
 	{
 	objUSERIND1.options[0] = new Option("ELP/ 'A' Rate Range", "R");
 	}
	//FSIT 195919 Ends
 	else
 	{
		objUSERIND1.options[0] = new Option("Not Applicable", "");	
 		document.getElementById('GC_USER_FACTOR_1').value = "0.0";
 		document.forms[0].GC_USER_FACTOR_1.className='rf';
 		document.forms[0].GC_USER_FACTOR_1.readOnly=true;	
 	}
 	 	
  	if(document.forms[0].COMMON_DESC_USER_INDICATOR_5.value == "A" || document.forms[0].COMMON_DESC_USER_INDICATOR_5.value == "a" || document.forms[0].COMMON_DESC_USER_INDICATOR_5.value == "G" || document.forms[0].COMMON_DESC_USER_INDICATOR_5.value == "g") 
  	{
  	objUSERIND5.options[0] = new Option("ELP/ 'A' Rate", document.forms[0].COMMON_DESC_USER_INDICATOR_5.value);
  	}
	//FSIT 195919 Starts
	else if(document.forms[0].COMMON_DESC_USER_INDICATOR_5.value == "R" || document.forms[0].COMMON_DESC_USER_INDICATOR_5.value == "r") 
	{	
		objUSERIND5.options[0] = new Option("ELP/ 'A' Rate Range", document.forms[0].COMMON_DESC_USER_INDICATOR_5.value);	
		
	}
	//FSIT 195919 Ends
  	else
  	{
		var strt= setProdrateVal();

		if(strt!=true)
		{	
			objUSERIND5.options[0] = new Option("Not Applicable", "");	
			document.getElementById('GC_USER_FACTOR_3').value = "0.0";
		}
			document.forms[0].GC_USER_FACTOR_3.className='rf';
			document.forms[0].GC_USER_FACTOR_3.readOnly=true;
 	} 	
 }
else
 {
	var objUSERIND1 = document.getElementById("GC_USER_INDICATOR_1");
	for ( var j = objUSERIND1.options.length - 1; j >= 0; j-- ) objUSERIND1.options[j] = null;
	var objUSERIND5 = document.getElementById("GC_USER_INDICATOR_5");
	for ( var j = objUSERIND5.options.length - 1; j >= 0; j-- ) objUSERIND5.options[j] = null;
 	if(document.forms[0].COMMON_DESC_ASA1REP_A1MDTX_IND.value == "A" || document.forms[0].COMMON_DESC_ASA1REP_A1MDTX_IND.value == "a" || document.forms[0].COMMON_DESC_ASA1REP_A1MDTX_IND.value == "G" || document.forms[0].COMMON_DESC_ASA1REP_A1MDTX_IND.value == "g") 
 	{
	objUSERIND1.options[0] = new Option("ELP/ 'A' Rate", document.forms[0].COMMON_DESC_ASA1REP_A1MDTX_IND.value);	
 	}
	//FSIT 195919 Starts
	else if(document.forms[0].COMMON_DESC_ASA1REP_A1MDTX_IND.value == "R" || document.forms[0].COMMON_DESC_ASA1REP_A1MDTX_IND.value == "r") 
 	{
	objUSERIND1.options[0] = new Option("ELP/ 'A' Rate Range", document.forms[0].COMMON_DESC_ASA1REP_A1MDTX_IND.value);	
 	}
	//FSIT 195919 Ends
 	else
 	{
		objUSERIND1.options[0] = new Option("Not Applicable", "");	
 		document.getElementById('GC_USER_FACTOR_1').value = "0.0";
 		document.forms[0].GC_USER_FACTOR_1.className='rf';
 		document.forms[0].GC_USER_FACTOR_1.readOnly=true;
 	}
 
 	if(document.forms[0].COMMON_DESC_ASA1REP_A1MCTX_IND.value == "I") 
 	{
		objUSERIND5.options[0] = new Option("Not Applicable", "");	
 		document.getElementById('GC_USER_FACTOR_3').value = "0.0";
 		document.forms[0].GC_USER_FACTOR_3.className='rf';
 		document.forms[0].GC_USER_FACTOR_3.readOnly=true;
 	}
 	else
 	{
 		if(document.forms[0].COMMON_DESC_ASA1REP_A1METX_IND.value == "A" || document.forms[0].COMMON_DESC_ASA1REP_A1METX_IND.value == "a" || document.forms[0].COMMON_DESC_ASA1REP_A1METX_IND.value == "G" || document.forms[0].COMMON_DESC_ASA1REP_A1METX_IND.value == "g") 
 		{
		objUSERIND5.options[0] = new Option("ELP/ 'A' Rate", document.forms[0].COMMON_DESC_ASA1REP_A1METX_IND.value);	
 	    }
	//FSIT 195919 Starts
		 else if(document.forms[0].COMMON_DESC_ASA1REP_A1METX_IND.value == "R" || document.forms[0].COMMON_DESC_ASA1REP_A1METX_IND.value == "r" ) 
 		{
		objUSERIND5.options[0] = new Option("ELP/ 'A' Rate Range", document.forms[0].COMMON_DESC_ASA1REP_A1METX_IND.value);	
 	    }
	//FSIT 195919 Ends
 		else
 		{
			
		objUSERIND5.options[0] = new Option("Not Applicable", "");
		  document.getElementById('GC_USER_FACTOR_3').value = "0.0";
		  document.forms[0].GC_USER_FACTOR_3.className='rf';
		  document.forms[0].GC_USER_FACTOR_3.readOnly=true;
 		}
 	 }
 }
}
}

}
//FSIT 164079 End

// FSIT 164079- Start - Prodco changes
if((document.forms[0].REQUESTCODE.value == "CPPCOVERCHGRq")||(document.forms[0].REQUESTCODE.value == "CPPCOVERDLTRq")||(document.forms[0].REQUESTCODE.value == "CPPCOVERINQRq"))
{

	if((document.getElementById("target") != null) && ((document.getElementById("target").value == 'jsp/PTCppGLUSCovPRODCO.jsp')||(document.getElementById("target").value == 'jsp/WAGPTCagGLUSCovPRODCO.jsp') ) )
	{	
		if(document.getElementById('COMMON_DESC_COVERAGE_EFF_DATE').value >= trim(document.getElementById('COMMON_DESC_SWITCHVAL').value))
		{

			if(isBlank(document.getElementById('COMMON_DESC_USER_INDICATOR_6').value))
			{	

				 document.getElementById('GC_USER_FACTOR_3').value = "0.0";
				 document.forms[0].GC_USER_FACTOR_3.className='rf';
				 document.forms[0].GC_USER_FACTOR_3.readOnly=true;
				 document.getElementById('GC_USER_INDICATOR_5').value = "Not Applicable";
				 document.forms[0].GC_USER_INDICATOR_5.className='rf';
				 document.forms[0].GC_USER_INDICATOR_5.readOnly=true;
			}
			else if(document.forms[0].GC_USER_INDICATOR_5.value == "A" || document.forms[0].GC_USER_INDICATOR_5.value == "a" || document.forms[0].GC_USER_INDICATOR_5.value == "G" || document.forms[0].GC_USER_INDICATOR_5.value == "g") 
  			{	
			  	rateIndicator_val= document.getElementById('GC_USER_INDICATOR_5').value;
				document.getElementById('GC_USER_INDICATOR_5').value = "ELP/ 'A' Rate";
				
  			}
			//FSIT 195919 Starts
			else if(document.forms[0].GC_USER_INDICATOR_5.value == "R" || document.forms[0].GC_USER_INDICATOR_5.value == "r") 
  			{	
			  	rateIndicator_val= document.getElementById('GC_USER_INDICATOR_5').value;
				document.getElementById('GC_USER_INDICATOR_5').value = "ELP/ 'A' Rate Range";
				
  			}
		//FSIT 195919 Ends
		}
	}
}
// FSIT 164079- End - Prodco changes

//FSIT 195919 Starts
if((document.forms[0].REQUESTCODE.value == "CPPCOVERCHGRq") ||(document.forms[0].REQUESTCODE.value == "CPPCOVERDLTRq")||(document.forms[0].REQUESTCODE.value == "CPPCOVERINQRq") || (document.forms[0].REQUESTCODE.value == "CPPCOVERADDRq") )
	{
		chkRateDate(document.getElementById('GC_COVER_CLASS_CODE').value);

	}
//FSIT 195919 Ends

// FSIT 181859 -- Renewal Pay plan field changes :: Start 
//*************Renewal_N_A_Off.jsp********
if(document.forms[0].target.value == "jsp/Renewal_N_A_Off.jsp" && document.forms[0].REQUESTCODE.value == "CPPBCONTRENRq")
{
		document.getElementById("ID_L_RENEWAL_PAY_PLAN").style.visibility = 'hidden';
		document.getElementById("ID_BC_RENEWAL_PAY_BY_PLAN").style.visibility = 'hidden';

		document.getElementById("ID_L_RENEWAL_OPTION").style.top="520";
		document.getElementById("ID_BC_RENEWAL_CODE").style.top="520";

		document.getElementById("ID_L_Reason_Amended").style.top="545";
		document.getElementById("ID_DSP_BC_Reason_Amended_Description").style.top="545";
		document.getElementById("ID_BC_REASON_AMEND_DIGIT1").style.top="545";		
		document.getElementById("ID_BC_REASON_AMEND_DIGIT2").style.top="545";		
		document.getElementById("ID_BC_REASON_AMEND_DIGIT3").style.top="545";		
		document.getElementById("ID_Reason_Amend_Search_Button").style.top="545";		

}




//*************POINT_Application_Information_N_B_N_A_Off.jsp********
if(document.forms[0].target.value == "jsp/POINT_Application_Information_N_B_N_A_Off.jsp" && (document.forms[0].REQUESTCODE.value == "CPPBCONTADDRq"  || document.forms[0].REQUESTCODE.value == "CPPBCONTDLTRq"))
{
		document.getElementById("ID_L_RENEWAL_PAY_PLAN").style.visibility = 'hidden';
		document.getElementById("ID_BC_RENEWAL_PAY_BY_PLAN").style.visibility = 'hidden';

		document.getElementById("ID_L_RENEWAL_OPTION").style.top="500";
		document.getElementById("BC_RENEWAL_CODE").style.top="500";

		document.getElementById("ID_L_Reason_Amended").style.top="525";
		document.getElementById("ID_DSP_BC_Reason_Amended_Description").style.top="525";
		document.getElementById("ID_BC_REASON_AMEND_DIGIT1").style.top="525";		
		document.getElementById("ID_BC_REASON_AMEND_DIGIT2").style.top="525";		
		document.getElementById("ID_BC_REASON_AMEND_DIGIT3").style.top="525";		
		document.getElementById("ID_Reason_Amend_Search_Button").style.top="525";		

}



//*************APPLICATION_INFORMATION_QUOTES_NA_OFF.jsp********
if(document.forms[0].target.value == "jsp/APPLICATION_INFORMATION_QUOTES_NA_OFF.jsp")
{
	if(document.forms[0].REQUESTCODE.value == "CPPBCONTINQRq" )
	{
		document.getElementById("ID_L_RENEWAL_PAY_PLAN").style.visibility = 'hidden';
		document.getElementById("ID_BC_RENEWAL_PAY_BY_PLAN").style.visibility = 'hidden';
		document.getElementById("ID_L_RENEWAL_OPTION").style.top="495";
		document.getElementById("ID_BC_RENEWAL_CODE").style.top="495";
		document.getElementById("ID_L_Reason_Amended").style.top="520";
		document.getElementById("ID_DSP_BC_Reason_Amended_Description").style.top="520";
		document.getElementById("ID_BC_REASON_AMEND_DIGIT1").style.top="520";		
		document.getElementById("ID_BC_REASON_AMEND_DIGIT2").style.top="520";		
		document.getElementById("ID_BC_REASON_AMEND_DIGIT3").style.top="520";		
	}
	else if(document.forms[0].REQUESTCODE.value == "CPPBCONTCHGRq")
	{
		document.getElementById("ID_L_RENEWAL_PAY_PLAN").style.visibility = 'hidden';
		document.getElementById("ID_BC_RENEWAL_PAY_BY_PLAN").style.visibility = 'hidden';
		document.getElementById("ID_L_RENEWAL_OPTION").style.top="495";
		document.getElementById("ID_BC_RENEWAL_CODE").style.top="495";
		document.getElementById("ID_L_Renewal_Of_Policy").style.top="495";
		document.getElementById("ID_BC_RENEWAL_SYMBOL").style.top="495";
		document.getElementById("ID_BC_RENEWAL_POLICY_NUMBER").style.top="495";
		
		document.getElementById("ID_L_Reason_Amended").style.top="520";
		document.getElementById("ID_DSP_BC_Reason_Amended_Description").style.top="520";
		document.getElementById("ID_BC_REASON_AMEND_DIGIT1").style.top="520";		
		document.getElementById("ID_BC_REASON_AMEND_DIGIT2").style.top="520";		
		document.getElementById("ID_BC_REASON_AMEND_DIGIT3").style.top="520";		
		document.getElementById("ID_Reason_Amend_Search_Button").style.top="520";		
		
	}

}

//**************POINT_Application_Information_END_N_A_Off********
if(document.forms[0].target.value == "jsp/POINT_Application_Information_END_N_A_Off.jsp")
	{

		if(document.forms[0].REQUESTCODE.value == "CPPBCONTCHGRq")
		{
			document.getElementById("ID_L_RENEWAL_PAY_PLAN").style.visibility = 'hidden';
			document.getElementById("ID_BC_RENEWAL_PAY_BY_PLAN").style.visibility = 'hidden';

			document.getElementById("ID_L_RENEWAL_OPTION").style.top="530";
			document.getElementById("ID_BC_RENEWAL_CODE_9").style.top="530";
			document.getElementById("BC_RENEWAL_CODE").style.top="530";

			document.getElementById("ID_BC_REASON_AMEND_DIGIT1").style.top="555";				
			document.getElementById("ID_BC_REASON_AMEND_DIGIT2").style.top="555";				
			document.getElementById("ID_BC_REASON_AMEND_DIGIT3").style.top="555";				
			document.getElementById("ID_Reason_Amend_Search_Button").style.top="555";				
			document.getElementById("ID_L_Reason_Amended").style.top="555";				
			document.getElementById("ID_DSP_BC_REASON_AMEND_DESC").style.top="555";

			document.getElementById("ID_L_Amend_Number").style.left="540";
			document.getElementById("ID_DSP_BC_AMENDMENT_NUMBER").style.left="720";

			document.getElementById("ID_L_Amend_Date").style.left="540";
			document.getElementById("ID_DSP_BC_ENTERED_DATE").style.left="720";

			document.getElementById("ID_L_Renewal_Of").style.left="540";
			document.getElementById("ID_DSP_BC_RENEWAL_SYMBOL").style.left="720";
			document.getElementById("ID_DSP_Renewal_Policy_Number").style.left="765";

			
		}
		else if(document.forms[0].REQUESTCODE.value == "CPPBCONTINQRq" || document.forms[0].REQUESTCODE.value == "CPPBCONTDLTRq")
		{
			document.getElementById("ID_L_RENEWAL_PAY_PLAN").style.visibility = 'hidden';
			document.getElementById("ID_BC_RENEWAL_PAY_BY_PLAN").style.visibility = 'hidden';

			document.getElementById("ID_L_RENEWAL_OPTION").style.top="530";
			document.getElementById("ID_BC_RENEWAL_CODE_9").style.top="530";
			document.getElementById("BC_RENEWAL_CODE").style.top="530";

			document.getElementById("ID_BC_REASON_AMEND_DIGIT1").style.top="555";				
			document.getElementById("ID_BC_REASON_AMEND_DIGIT2").style.top="555";				
			document.getElementById("ID_BC_REASON_AMEND_DIGIT3").style.top="555";				
			document.getElementById("ID_L_Reason_Amended").style.top="555";				
			document.getElementById("ID_DSP_BC_REASON_AMEND_DESC").style.top="555";

/*
			document.getElementById("ID_L_Amend_Number").style.left="540";
			document.getElementById("ID_DSP_BC_AMENDMENT_NUMBER").style.left="720";

			document.getElementById("ID_L_Amend_Date").style.left="540";
			document.getElementById("ID_DSP_BC_ENTERED_DATE").style.left="720";

			document.getElementById("ID_L_Renewal_Of").style.left="540";
			document.getElementById("ID_DSP_BC_RENEWAL_SYMBOL").style.left="720";
			document.getElementById("ID_DSP_Renewal_Policy_Number").style.left="765";

*/
		}
	}
//****************Reinstatement.jsp**********
if(document.forms[0].REQUESTCODE.value == "CPPBCONTRINRq" )
	{
		document.getElementById("ID_L_RENEWAL_PAY_PLAN").style.visibility = 'hidden';
		document.getElementById("ID_BC_RENEW_PAYBY_DESC").style.visibility = 'hidden';

		document.getElementById("ID_L_AMENDMENT_DATE").style.top="545";
		document.getElementById("ID_L_AMENDMENT_DATE").style.left="720";
		document.getElementById("ID_DSP_BC_ENTERED_DATE").style.top="545";
		document.getElementById("ID_DSP_BC_ENTERED_DATE").style.left="880";

		document.getElementById("ID_L_RENEWAL_OPTION").style.top="545";				
		document.getElementById("ID_BC_RENEWAL_CODE").style.top="545";				

	}
//****************Cancellation_N_A_Off.jsp **********
if(document.forms[0].REQUESTCODE.value == "CPPBCONTCANRq")
	{
		document.getElementById("ID_L_RENEWAL_PAY_PLAN").style.visibility = 'hidden';
		document.getElementById("ID_BC_RENEW_PAYBY_DESC").style.visibility = 'hidden';

		document.getElementById("ID_L_RENEWAL_OPTION").style.top="550";
		document.getElementById("ID_BC_RENEWAL_CODE").style.top="550";
	}

// FSIT 181859 -- Renewal Pay plan field changes :: Ends

//FSIT 218077 - General Liability Deductible -start

	if(document.forms[0].REQUESTCODE.value == "CPPCOVERADDRq" || document.forms[0].REQUESTCODE.value == "CPPCOVERCHGRq")
	{
		if(document.forms[0].target.value == "jsp/PTCppGLUSCovPREMOP.jsp" || document.forms[0].target.value == "jsp/WAGPTCagGLUSCovPREMOP.jsp")
		{
			var policy_eff_date = document.getElementById("COMMON_DESC_COVERAGE_EFF_DATE").value;
			if(policy_eff_date >= "1150309")
			{
				document.forms[0].GC_USER_CODE_10.disabled = true;
				document.forms[0].GC_USER_CODE_9.disabled = true;
				document.forms[0].GC_USER_CODE_4.disabled = true;
				document.forms[0].GC_USER_CODE_6.disabled = true;
				document.forms[0].GC_USER_CODE_8.disabled = true;
				document.forms[0].GC_USER_CODE_5.disabled = true;
			}
		}
		else if(document.forms[0].target.value == "jsp/WAGPTCagGLUSCovPRODCO.jsp" || document.forms[0].target.value == "jsp/PTCppGLUSCovPRODCO.jsp")
		{
			var policy_eff_date = document.getElementById("COMMON_DESC_COVERAGE_EFF_DATE").value;
			if(policy_eff_date >= "1150309")
			{
				document.forms[0].GC_USER_CODE_6.disabled = true;
				document.forms[0].GC_USER_CODE_8.disabled = true;
				document.forms[0].GC_USER_CODE_5.disabled = true;
			}
		}
	}

//FSIT 218077 - General Liability Deductible -end

//FSIT 219748 - PCR390 NE Umbrella regulatory Item - Start

if((document.forms[0].REQUESTCODE.value == "CPPINSLNADDRq" || document.forms[0].REQUESTCODE.value == "CPPINSLNCHGRq") && (document.forms[0].target.value == "jsp/WAGPTCagCUUSIns.jsp" || document.forms[0].target.value == "jsp/WAGPTCagACUUSIns.jsp"))
{
	if(document.forms[0].BC_STATE.value != "NE")
	{
		document.forms[0].INS_USER_IND_15.disabled = true;
	}
}

//FSIT 219748 - PCR390 NE Umbrella regulatory Item - End

}

// FSIT 164079- Start - Prodco changes
function prodco_USERIND5()
{
	document.getElementById('GC_USER_INDICATOR_5').value=rateIndicator_val;
		if (!ValidatePage()) 
			{
				reset_busy_icon();
				return false;
			}
			else
			{
				document.forms[0].submit();
			}
}

// FSIT 164079- End - Prodco changes
//Niraj - WAG 1785, WAG 1786 - Additional Interest - Making 'Address' and 'City' non-mandatory for 'BP' and 'OW' - Start
//Sridhar - 01/10/07 - WAG 2450 - Additional Interest - Making 'Address' and 'City' non-mandatory for 'V1', 'V2' and 'V3'


function ZeroFillMC(oCtl)
{
	if(document.getElementById("ADDLINT_KEY_USE_CODE").value != 'MC')
		ZeroFill(oCtl);
}

	/**FSIT 192811***To remove mandatory checks for some AI for postal code ********** Starts *****/
function chkAI(keyCde)
{
	// For below AI Zip code is mandatory for rest it is not
	var aiVal = ["AI","A5","A6","A7","CH","LH","LP","L1","L2","L3","L9","MT","OI","PI","PN","SM","SP","TM","B1","B2"];
	var a = false;
		for(var i = 0; i <aiVal.length; i++)
		{
			if ( aiVal[i]==keyCde)
			{
				a=true;
			}
		}
	return a;
}

	/**FSIT 192811***Ends *****/

function doValidateAddrAddInt() {

	/**FSIT 192811***To remove mandatory checks for some AI for postal code ********** Starts *****/
	var keyCde = document.getElementById("ADDLINT_KEY_USE_CODE").value;
	var aiExists = chkAI(keyCde);
	/**FSIT 192811***Ends *****/

	//*************** FSIT - 190519 - ---193017---Starts***************

	if(document.getElementById("ADDLINT_KEY_USE_CODE").value == 'MC')
	{
		var strTmp1 = "";
		strTmp1=trim(document.getElementById("ADDLINT_FEIN_NUMBER").value);
		if(strTmp1.length==0 || strTmp1.length=='undefined' || strTmp1 == "")
		{
			strTmp1='0';
		}
		while(strTmp1.length < 15)
		{
			strTmp1 = strTmp1 + ' ';
			}
			document.getElementById("ADDLINT_DESCRIPTION_LINE_5").value = strTmp1 + document.getElementById("ADDLINT_ID_NUM").value;
		}

	//*************** FSIT - 190519 - ---193017---Ends***************


	//FSIT 148322 Start
	if ((document.getElementById("ADDLINT_DESCRIPTION_LINE_7").selectedIndex == 1) && (document.forms[0].COMMON_DESC_DESC0LINE7_COUNT.value != "0") && (document.getElementById('ADDLINT_KEY_USE_CODE').value =='MT') && (document.forms[0].COMMON_DESC_TYPE0ACT_PAYPLAN.value == 'Y'))
	{
		alert("Another Mortgagee is selected as the Primary Mortgagee. Change the previous selection to allow this mortgagee to be set as the Primary Mortgagee.");
		return;
	}
	//FSIT 148322 End
	//*************** FSIT - 190519 - ---193017---Starts***************
	if (((document.forms[0].ADDLINT_NAME.value == "") || (document.forms[0].ADDLINT_NAME.value == null))) 
	{
		alert("Required entry is missing for Name.");
		return;
	}
	// if (((document.forms[0].ADDLINT_ADDRESS_LINE_2.value == "") || (document.forms[0].ADDLINT_ADDRESS_LINE_2.value == null)) && !((document.getElementById('ADDLINT_KEY_USE_CODE').value =='BP') || (document.getElementById('ADDLINT_KEY_USE_CODE').value =='OW') || (document.getElementById('ADDLINT_KEY_USE_CODE').value =='V1') || (document.getElementById('ADDLINT_KEY_USE_CODE').value =='V2') || (document.getElementById('ADDLINT_KEY_USE_CODE').value =='V3')))

else if (((document.forms[0].ADDLINT_ADDRESS_LINE_2.value == "") || (document.forms[0].ADDLINT_ADDRESS_LINE_2.value == null)) && !((document.getElementById('ADDLINT_KEY_USE_CODE').value =='BP') || (document.getElementById('ADDLINT_KEY_USE_CODE').value =='OW') || (document.getElementById('ADDLINT_KEY_USE_CODE').value =='V1') || (document.getElementById('ADDLINT_KEY_USE_CODE').value =='V2') || (document.getElementById('ADDLINT_KEY_USE_CODE').value =='V3')))
		//*************** FSIT - 190519 - ---193017---Ends***************
{
	alert("Required entry is missing for Address.");
	return;
}
/**FSIT 192811***To remove mandatory checks for some AI for postal code ********** Starts *****/
//else if (((document.forms[0].ADDLINT_CITY.value == "") || (document.forms[0].ADDLINT_CITY.value == null)) && !((document.getElementById('ADDLINT_KEY_USE_CODE').value =='BP') || (document.getElementById('ADDLINT_KEY_USE_CODE').value =='OW') || (document.getElementById('ADDLINT_KEY_USE_CODE').value =='V1') || (document.getElementById('ADDLINT_KEY_USE_CODE').value =='V2') || (document.getElementById('ADDLINT_KEY_USE_CODE').value =='V3') ))
else if (((document.forms[0].ADDLINT_CITY.value == "") || (document.forms[0].ADDLINT_CITY.value == null)) && !((document.getElementById('ADDLINT_KEY_USE_CODE').value =='BP') || (document.getElementById('ADDLINT_KEY_USE_CODE').value =='OW') || (document.getElementById('ADDLINT_KEY_USE_CODE').value =='V1') || (document.getElementById('ADDLINT_KEY_USE_CODE').value =='V2') || (document.getElementById('ADDLINT_KEY_USE_CODE').value =='V3')) && aiExists==true)
/**FSIT 192811***Entry *****/
{
	alert("Required entry is missing for City.");
	return;
}
	/**FSIT 192811***To remove mandatory checks for some AI for postal code ********** Starts *****/
//	else if (((document.forms[0].ADDLINT_STATE.value == "") || (document.forms[0].ADDLINT_STATE.value == null)))
	else if ( ((document.forms[0].ADDLINT_STATE.value == "") || (document.forms[0].ADDLINT_STATE.value == null)) && aiExists==true)
	{
		alert("Required entry is missing for State.");
		return;
	}
	/**FSIT 192811***Entry *****/

	/**FSIT 192811***To remove mandatory checks for some AI for postal code ********** Starts *****/
else if(document.getElementById("ADDLINT_ZIP_CODE").value == "" && aiExists== true )
	{
		alert("Please enter the value for Zip code");
		return;
	}
	/**FSIT 192811***Ends *****/


//*************** FSIt : 182800  PCR - Enhanced MCS-90 Starts ***************

//*************** FSIT - 190519 - ---193017---Starts***************
/*
else if (document.getElementById("ADDLINT_KEY_USE_CODE").value=="MC"  &&  document.getElementById("ADDLINT_ID_NUM").value == "")
{
	alert("Required entry is missing for MC#");
	return;
}
*/

else if (document.getElementById("ADDLINT_KEY_USE_CODE").value=="MC"  && (document.getElementById("ADDLINT_ID_NUM").value == "" || document.getElementById("ADDLINT_ID_NUM").value == 0 ) && (document.getElementById("ADDLINT_FEIN_NUMBER").value == ""  || document.getElementById("ADDLINT_FEIN_NUMBER").value ==0))
{
	alert("Please enter the value for either MC# or DOT#");
	return;
}

//196646 - FBL PICS PCR - Start
else if(document.getElementById('ADDLINT_KEY_USE_CODE').value == 'NI' && document.forms[0].REQUESTCODE.value != "CPPADDINDLTRq" && document.getElementById('ADDLINT_DESCRIPTION_LINE_6').value == "")
{
	alert("Required entry is missing for Legal Entity.");
	document.getElementById('ADDLINT_DESCRIPTION_LINE_6').focus();
	return;
}	
//196646 - FBL PICS PCR - End

// FSIT _ 197055 starts - numeric check on submit for FEIn or DOT starts 
//else if (document.getElementById("ADDLINT_KEY_USE_CODE").value=="MC")
else if (trim(document.getElementById("ADDLINT_FEIN_NUMBER").value)!="")
	// FSIT _ 197055 starts - numeric check on submit for FEIn or DOT ends 
{

	var dotnumber = trim(document.getElementById("ADDLINT_FEIN_NUMBER").value);
	var spclChars = "!@#$%^&*()+=-[]\\\';,./{}|\":<>?";
	for(var i = 0; i < dotnumber.length; i++)
	{
		// FSIT _ 197055 starts - numeric check on submit for FEIn or DOT starts 
		if (spclChars.indexOf(dotnumber.charAt(i)) != -1  || (dotnumber.charCodeAt(i)>64 && dotnumber.charCodeAt(i)<91) || (dotnumber.charCodeAt(i)>97 && dotnumber.charCodeAt(i)<122)  || (dotnumber.charCodeAt(i) == 32))
		{
			if (document.getElementById("ADDLINT_KEY_USE_CODE").value=="MC")
			{
				alert("Special characters and alphabets are not allowed in DOT#.");
			}
			else
			{
				alert("Special characters and alphabets are not allowed in FEIN #.");
			}
// FSIT _ 197055 starts - numeric check on submit for FEIn or DOT ends 
			document.getElementById("ADDLINT_FEIN_NUMBER").value = "";
			document.getElementById("ADDLINT_FEIN_NUMBER").focus(); 
			return ;
		}
	}	
		   document.forms[0].submit();

}
//*************** FSIT - 190519 - ---193017---Ends***************
//*************** FSIt : 182800  PCR - Enhanced MCS-90   Ends ***************

else
{
      document.forms[0].submit();
}

}
//Sridhar - 01/10/07 - WAG 2450 - Additional Interest - Making 'Address' and 'City' non-mandatory for 'V1', 'V2' and 'V3'
//Niraj - WAG 1785, WAG 1786 - Additional Interest - Making 'Address' and 'City' non-mandatory for 'BP' and 'OW' - End

function Save() {
alert ('In the Save function');
}
function doSubmit(Target) {
	if (Target != '') {
	  //If we have no blank KeyIndexes, validate the page
	  if (!IsKeyIndexBlank()) {
		  if (!ValidatePage()) return;
		  }
		document.forms[0].action = Target;
		document.forms[0].submit();
		return false;
  	}
	else {
    document.forms[0].PushButtonValue.value = "Search";
  	document.forms[0].submit();
  	return false;
  	}
	}
function doExit() {
  	document.forms[0].PushButtonValue.value = "Exit";
  }
function KeyAdd(Key, Attribute) {
  if (Attribute == '') {
    if (eval('document.forms[0].' + Key + '.value') == '') eval('document.forms[0].' + Key + '.value = 1')
    }
  else {
    if (eval('document.forms[0].' + Key + '.value') == '') eval('document.forms[0].' + Key + '.value = document.forms[0].' + Attribute + '.value')
    }
  document.forms[0].PushButtonValue.value = "KeyAdd";
  document.forms[0].PushButtonParams.value = Key + "," + Attribute;
  return doSubmit(document.forms[0].action);
  }
function KeyDelete(Key) {
  document.forms[0].PushButtonValue.value = "KeyDelete";
  document.forms[0].PushButtonParams.value = Key;
	document.forms[0].submit();
  }
function KeyNext(Key) {
  document.forms[0].PushButtonValue.value = "KeyNext";
  document.forms[0].PushButtonParams.value = Key;
  return doSubmit(document.forms[0].action);
  }
function KeyPrev(Key) {
  document.forms[0].PushButtonValue.value = "KeyPrev";
  document.forms[0].PushButtonParams.value = Key;
  return doSubmit(document.forms[0].action);
  }
function KeyNavigate(Key, Attribute) {
  var AttValue, AttName;
  if (eval('document.forms[0].' + Attribute + '.value') == '') return;
  document.forms[0].PushButtonValue.value = "KeyNavigate";
  AttValue = eval('document.forms[0].' + Attribute + '.value');
  AttName = eval('document.forms[0].' + Attribute + '.name');
  document.forms[0].PushButtonParams.value = Key + "," + AttValue + "," + AttName;
  //If the current position of the dropdown is blank, don't run any validation
  if (eval('document.forms[0].' + Attribute + '.options(' + OldIndex + ').value') == '') {
    eval("document.forms[0]." + Key + ".value = ''");
    document.forms[0].submit();
    }
  else {
    return doSubmit(document.forms[0].action);
    }
  }
// Propogate = 1 - Change entire policy
//             2 - Change only current row
//	       3 - Change the field value
function KeySet(Key, Attribute, Propogate) {
  if ( (Propogate == '1') || (Propogate == '2') ) {
    document.forms[0].PushButtonValue.value = "KeyPropogate";
    AttValue = eval('document.forms[0].' + Attribute + '.value');
    document.forms[0].PushButtonParams.value = Key + "," + AttValue + "," + Propogate;
    document.forms[0].submit();
    }
  else if(Propogate == '3') {
  	eval('document.forms[0].' + Key + '.value = document.forms[0].' + Attribute + '.value');
  	return true;
  	}
  else {
  	eval('document.forms[0].' + Key + '.value = document.forms[0].' + Attribute + '.value');
    doSubmit('');
  	}
  }
//Match info from the visibility cache with controls that need to be checked.
function CheckVisibility() {
 //Variables for determining what kind of action should be taken.
  var lcv;
  var valuematch=false;
  var valuenotmatch=false;
  var switchmode=false;
  var readonly=false;
  var input =false;
  var showit;

//for loop starts here for every element on the screen.
  for (lcv=0; lcv < ScreenChecks.length; lcv++) {
    //First, be sure the object actually has a style collection
    if ( eval("typeof(document.all('" + ScreenChecks[lcv][0] + "').style)") != 'undefined' ) {
		//Get the object name that we are try to change.( hide or show or readonly)
		var objname = ScreenChecks[lcv][1].substring(0,ScreenChecks[lcv][1].length-3);
		valuematch=false;
	   	valuenotmatch=false;
	   	switchmode=false;
	   	readonly=false;
	   	   //if object is to made readonly instead of hidden)
		if(objname.indexOf('#')>0) {
			switchmode=true;
			var action=objname.substring(objname.indexOf('#')+1,objname.length);
			objname=objname.substring(0,objname.indexOf('#'));
			switch (action) {
			case "RO":
			readonly=true;
			break;
			default:
			switchmode=false;
			break;
			}
		}
		//If object is dependent on other value
		if(objname.indexOf("@")>0) {
		  	if(objname.indexOf("@!")>0) {
		  		var dependingvalobj = objname.substring(objname.indexOf('@!')+2,objname.length);
				if(dependingvalobj.indexOf('$')==1) {
		   			var dependingval=eval('document.forms[0].'+dependingvalobj.substring(1,dependingvalobj.length)).value;
		  		}
		   		else {
					var dependingval=dependingvalobj;
		  		}
		    	objname=objname.substring(0,objname.indexOf('@!'));
		    	valuenotmatch=true;
		 	}
		 	else {
				var dependingvalobj = objname.substring(objname.indexOf('@')+1,objname.length);
				if(dependingvalobj.indexOf('$')==1) {
					var dependingval=eval('document.forms[0].'+dependingvalobj.substring(1,dependingvalobj.length)).value;
				}
				else {
					var dependingval=dependingvalobj;
 				}
				objname=objname.substring(0,objname.indexOf('@'));
				valuematch=true;
			}
		}
// BAS1031024A1 Start
		var object = eval('document.forms[0].'+objname+'[0]');
		if (!object || !object.type || object.type=='radio')
			object = eval('document.forms[0].' + objname);
		if (!object || (!object.type && !object[0].type))
		{
			alert ("A problem with dynamic field definition in the panel has been encountered.");
			return;
		}
// BAS1031024A1 End
		if(object.type=='checkbox') {
			if(!object.checked) {
				object.value='show';
				valuematch=true;
				dependingval='show';
			}
		}
		if(object.type!='select-one')
		if(object.length!=null)
		if(object[0].type=='radio')
		for(i=0;i<object.length;i++) {
		if(object[i].checked) {
		object.value=object[i].value;
		break;
		}
		}
		//if we are not changing the type then we are hiding them
		if (!readonly) {
		 //first make sure that object is not null
		 if(object!=null) {
				//we are not matching the values then its dependent on itself.
		 		if((!valuematch)&&(!valuenotmatch)) {
		  	 		if(object.value==null || object.value=='') {
		  	 			eval("document.all('" + ScreenChecks[lcv][0] + "').style.display = 'none';");
			 		}
	     	 		else {
	          			eval("document.all('" + ScreenChecks[lcv][0] + "').style.display = 'inline';");
		 	 		}
		 	 	}
				//else we may be matching values
				else {
		 	 	if(valuematch) {
		  			if(object.value==dependingval) {
	          			eval("document.all('" + ScreenChecks[lcv][0] + "').style.display = 'none';");
		  			}
	      			else {
	          			eval("document.all('" + ScreenChecks[lcv][0] + "').style.display = 'inline';");
		  			}
		 	  	}
			  	else {
		       	if (valuenotmatch) {
		 		 	if(object.value!=dependingval) {
	          			eval("document.all('" + ScreenChecks[lcv][0] + "').style.display = 'none';");
		 		 	}
    		 		else {
          	  			eval("document.all('" + ScreenChecks[lcv][0] + "').style.display = 'inline';");
			 		}
		    	} //if#1
		   	} //if #2
		 } //if#3
	 } //not null if
	}
	//If we are not hiding or showing then we are making it readonly or input.
	else {
	if(readonly) {
		if((!valuematch)&&(!valuenotmatch)) {
	  	 	if(object.value==null || object.value=='') {
			var aObject=document.getElementById(ScreenChecks[lcv][0].substring(3,ScreenChecks[lcv][0].length));
	  	 	if(!aObject.readOnly) {
			// point to new CSS Classname CVH
			aObject.className='rf';
			if(aObject.getAttribute("oldIndex")==null)
			aObject.setAttribute("oldIndex",aObject.tabIndex);
			aObject.tabIndex="-1";
			aObject.attachEvent('onfocusin',blurit);
			aObject.readOnly=true;
			}
		 	}
     	 		else {
          		var aObject=document.getElementById(ScreenChecks[lcv][0].substring(3,ScreenChecks[lcv][0].length));
			if(aObject.readOnly) {
			aObject.detachEvent('onfocusin',blurit);
			// point to new CSS Classname CVH
			aObject.className='ef';
			aObject.removeAttribute("READONLY","NO");
			if(aObject.getAttribute("oldIndex")!=null)
			aObject.tabIndex=aObject.getAttribute("oldIndex");
			aObject.readonly=false;
			}
	 	 	}
	 	 	}
		 else {
		 	if (valuematch) {
			if(dependingval=='BLANKS') {
			dependingval='';
			}
			if (object.value==dependingval) {
			var aObject=document.getElementById(ScreenChecks[lcv][0].substring(3,ScreenChecks[lcv][0].length));
	  	 	if(!aObject.readOnly) {
			// point to new CSS Classname CVH
			if(aObject.type!='select-one')//HDK - not for dropdowns
			aObject.className='rf';
			if(aObject.getAttribute("oldIndex")==null)
			aObject.setAttribute("oldIndex",aObject.tabIndex);
			aObject.tabIndex="-1";
			aObject.attachEvent('onfocusin',blurit);
			aObject.readOnly=true;
			}
		 	}
     	 		else {
          		var aObject=document.getElementById(ScreenChecks[lcv][0].substring(3,ScreenChecks[lcv][0].length));
			if(aObject.readOnly) {
			aObject.detachEvent('onfocusin',blurit);
			// point to new CSS Classname CVH
			aObject.className='ef';
			aObject.removeAttribute("READONLY","NO");
			if(aObject.getAttribute("oldIndex")!=null)
			aObject.tabIndex=aObject.getAttribute("oldIndex");
			aObject.readonly=false;
			}
	 	 	}
		 	}
   			else {
			if (valuenotmatch) {
			if(dependingval=='BLANKS') {
			dependingval='';
			}
			if (object.value!=dependingval) {
			var aObject=document.getElementById(ScreenChecks[lcv][0].substring(3,ScreenChecks[lcv][0].length));
	  	 	if(!aObject.readOnly) {
			// point to new CSS Classname CVH
			if(aObject.type!='select-one')//HDK - not for dropdowns
			aObject.className='rf';
			if(aObject.getAttribute("oldIndex")==null)
			aObject.setAttribute("oldIndex",aObject.tabIndex);
			aObject.tabIndex="-1";
			aObject.attachEvent('onfocusin',blurit);
			aObject.readOnly=true;
			}
			}
     	 		else {
          		var aObject=document.getElementById(ScreenChecks[lcv][0].substring(3,ScreenChecks[lcv][0].length));
			if(aObject.readOnly) {
			aObject.detachEvent('onfocusin',blurit);
			// point to new CSS Classname CVH
			aObject.className='ef';
			aObject.removeAttribute("READONLY","NO");
			if(aObject.getAttribute("oldIndex")!=null)
			aObject.tabIndex=aObject.getAttribute("oldIndex");
			aObject.readonly=false;
			}
	 	 	}
		    }//if3
		  }//if 2
	 	   }//if 1
		} //not changing type
	  } //else
	}//top if
    }//For loop
    document.all("ExplorerId").style.display = 'inline';
    //HDK - BAS1040519A0 - Start
    if(key_code == -1){ 
    	key_code=0;
    	looptabback();
    }
    //HDK - End
    //UNI2662 - Start
    if(document.forms[0].REQUESTCODE.value == "CPPADDINADDRq" || document.forms[0].REQUESTCODE.value == "CPPADDINCHGRq" || document.forms[0].REQUESTCODE.value == "CPPADDINDLTRq" || document.forms[0].REQUESTCODE.value == "CPPADDININQRq" || document.forms[0].REQUESTCODE.value == "CPPADDINDFTRq" )
    {
       var AddCode = document.getElementById("ADDLINT_KEY_USE_CODE").value;  
     



/**FSIT 192811***To remove mandatory checks for some AI for postal code ********** Starts *****/

// Marking the postal code label mandatory in case the AI is one of the following "AI","A5","A6","A7","CH","LH","LP","L1","L2","L3","L9","MT","OI","PI","PN","SM","SP","TM"

	var keyCdeExists = chkAI(AddCode);
	if(keyCdeExists==true)
	{
		document.getElementById('ID_L_Postal_Code').innerHTML = '*Postal Code';
		document.getElementById('ID_L_Postal_Code').style.left = '23';
		document.getElementById('ID_L_AI_City_State').innerHTML = '*City';
		document.getElementById('ID_L_AI_City_State').style.left = '23';
		document.getElementById('ID_l_State').style.left = '23';
		document.getElementById('ID_l_State').innerHTML = '*State';
	}
	else
	{
		document.getElementById('ID_L_Postal_Code').innerHTML= '  Postal Code';
		document.getElementById('ID_L_Postal_Code').style.left = '33';
		document.getElementById('ID_L_AI_City_State').innerHTML = '  City';
		document.getElementById('ID_L_AI_City_State').style.left = '33';
//      document.getElementById('ID_l_State').style.left = '23';
//		document.getElementById('ID_l_State').innerHTML = '*State';
		document.getElementById('ID_l_State').style.left = '33';
		document.getElementById('ID_l_State').innerHTML = 'State';
	}



/**FSIT 192811************Ends *****/



//FSIT 148322 - Start
           	if((AddCode == 'MT') && (document.forms[0].COMMON_DESC_TYPE0ACT_PAYPLAN.value == 'Y'))
           	{
           	    	document.getElementById('ID_ADDLINT_DESCRIPTION_LINE_7').style.visibility ='visible';
           	    	document.getElementById('ID_Primary_Mortgagee').style.visibility ='visible';
           	}
           	else
           	{
           	    	document.getElementById('ID_ADDLINT_DESCRIPTION_LINE_7').style.visibility ='hidden';
           	    	document.getElementById('ID_Primary_Mortgagee').style.visibility ='hidden';
           	    	document.getElementById("ADDLINT_DESCRIPTION_LINE_7").options[0].selected = true;
           	}
//FSIT 148322 - End
       
	   //*************** FSIt : 182800  PCR - Enhanced MCS-90   STARTS ***************
if((AddCode == 'MC') )
           	{
	
					document.getElementById('ID_L_FEIN_Number').innerHTML = 'DOT#';
					//*************** FSIT - 190519 ----193017--- Starts***************
					//document.getElementById('ID_L_ID_Number').innerHTML= '*MC#';
					document.getElementById('ID_L_ID_Number').innerHTML= 'MC#';
					//*************** FSIT - 190519 - ---193017---ends***************
					document.getElementById('ADDLINT_FEIN_NUMBER').maxLength = '15';
					document.getElementById('ADDLINT_ID_NUM').maxLength = '15';
					
           	}
			else

		{
					document.getElementById('ID_L_FEIN_Number').innerHTML = 'FEIN #';
					document.getElementById('ID_L_ID_Number').innerHTML= 'ID #';
					document.getElementById('ADDLINT_FEIN_NUMBER').maxLength = '9';
					document.getElementById('ADDLINT_ID_NUM').maxLength = '12';
		}

	   //*************** FSIt : 182800  PCR - Enhanced MCS-90 ENDS***************
       if(AddCode=='NI' || AddCode=='DB')
    	{	
    	document.getElementById('ID_ADDLINT_DESCRIPTION_LINE_6').style.visibility = 'visible';
    	document.getElementById('ID_L_Address_Optional').style.display = 'none';
	    	
    	}
    	else
    	{	
    	document.getElementById('ID_ADDLINT_DESCRIPTION_LINE_6').style.visibility ='hidden';
			document.getElementById('ID_L_Address_Optional').style.display = 'none';
		
    	}	

//RV WAG Relationship field added to Add Interest Screen - Start
//WAG724 NSV Change -start
       if(AddCode=='CD' || AddCode=='DL' || AddCode=='DE')
    	{	
//WAG724 NSV Change -End    	
//WAG4547 - Start
        document.getElementById("ADDLINT_DESCRIPTION_LINE_6").options[0].value = ''; 
//WAG4547 - End
    	document.getElementById('ID_ADDLINT_DESCRIPTION_LINE_5A').style.display = 'inline';
    	document.getElementById('ID_L_Relationship').style.display = 'inline';
    	document.getElementById('ID_L_ID_Number').style.visibility = 'hidden';
    	document.getElementById('ID_ADDLINT_FEIN_NUMBER').style.visibility = 'hidden';
    	document.getElementById('ID_L_FEIN_Number').style.display = 'none';
    	document.getElementById('ID_ADDLINT_ID_NUM').style.display = 'none';
	document.getElementById('ADDLINT_FEIN_NUMBER').value='';
	document.getElementById('ADDLINT_ID_NUM').value = '';
	//document.getElementById('ADDLINT_DESCRIPTION_LINE_5').value = '';
	//WAG268 - NSV to handle Relationship on scr Start
	//document.getElementById('ADDLINT_DESCRIPTION_LINE_5A').value = '';
	//WAG268 - NSV to handle Relationship on scr End
    	}
    	else
    	{	
    	//WAG4547 - Start
		if(AddCode=='AE')		
                document.getElementById('ID_ADDLINT_DESCRIPTION_LINE_5A').style.display ='inline';
    	  else
			{ 
	    //WAG4547 - End
		document.getElementById('ID_ADDLINT_DESCRIPTION_LINE_5A').style.display ='none';
    	//WAG4547 - Start
				//196646 - FBL PICS PCR - start
				if(AddCode != 'NI' && AddCode != 'DB')
				{
						document.getElementById('ADDLINT_USE_CODE_OPT_HEADING').style.display= 'none';
				}
				//196646 - FBL PICS PCR - end
			} 
       // WAG4547 - End
        document.getElementById('ID_L_Relationship').style.display = 'none';
	document.getElementById('ID_L_ID_Number').style.visibility = 'visible';
	document.getElementById('ID_ADDLINT_FEIN_NUMBER').style.visibility = 'visible';
	document.getElementById('ID_L_FEIN_Number').style.display = 'inline';
	document.getElementById('ID_ADDLINT_ID_NUM').style.display = 'inline';
    	
    	
    	}	

/*
	fieldval = document.getElementById('ADDLINT_USE_CODE_OPT_HEADING').value;
	//alert(fieldval);
	
	if (fieldval == '')
	{
	document.getElementById('ADDLINT_DESCRIPTION_LINE_6A').style.visibility = 'visible';
	}
	else
	{
	document.getElementById('ADDLINT_DESCRIPTION_LINE_6A').style.visibility = 'hidden';
	}    	
*/
//RV WAG Relationship field added to Add Interest Screen - End


	var lob = document.getElementById('fullkey').value.substring(16,19);
	
	
	
	
	if (lob != 'WCV')
	{
		document.getElementById('ID_ADDLINT_DESCRIPTION_LINE_6').style.visibility = 'hidden';
		
		document.getElementById('ID_L_Address_Optional').style.display = 'none';
		
		document.getElementById('ADDLINT_USE_CODE_OPT_HEADING').value = '';
		document.getElementById('ADDLINT_USE_CODE_OPT_HEADING').style.visibility = 'hidden';

	}
    }    
    //UNI2662 - End
  }
function blurit() {
event.srcElement.blur();
}
//Determine if the passed control is visible
function IsHidden(ControlName) {
  if ( eval("document.all('ID_" + ControlName + "')") == null ) return false;
  //First, be sure the object actually has a style collection
  if ( eval("typeof(document.all('ID_" + ControlName + "').style)") != 'undefined' ) {
    return eval("document.all('ID_" + ControlName + "').style.display == 'none';");
    }
  return false;
  }
//Display any warnings that were produced during screen generation.
function ProcessWarnings() {
if(PublisherWarnings==null) return;
if (PublisherWarnings.length == 0) return;
  alert("The following warnings were generated by Publisher:\n\n" + PublisherWarnings);
  }
function F_MonthsFromDate(EffDt,Term,ExpDate) {
   var str =  EffDt.value;
   var year = str.substring(6,10);
   var ExpDt;
   if (Term.value == 0){
	ExpDt=""
	ExpDate.value = ExpDt;
	}
    else {
	if (EffDt.value != "") {
	 if(year == "0000") {
         alert("Not a valid year");
        EffDt.focus(); return;}
     	else if (str.charAt(6) == "0"){alert("Not a valid year");
        EffDt.focus();return; }
	var EffDate = new Date(EffDt.value);
	var month;
	var year = EffDate.getFullYear();
	var date;
	var TermAmount = Term.value;
	if (TermAmount == 12) {
		year += 1;
		EffDate.setYear(year);
		month = "" + (EffDate.getMonth() + 1);
	    if (month.length == 1) month = "0" + month;
		EffDate.setYear(year);
		date = "" + EffDate.getDate();
		if (date.length == 1) date = "0" + date
		ExpDt = month + "/" + date + "/" + EffDate.getFullYear();
		ExpDate.value = ExpDt;
	}
	else
	if (TermAmount == 3) {
		month = "" + (EffDate.getMonth() + 4);
	    if (month.length == 1) month = "0" + month;
	    if (month > 12) {
			month = month - 12;
			month = "0" + month;
			year += 1;
			}
		EffDate.setYear(year);
		date = "" + EffDate.getDate();
		if (date.length == 1) date = "0" + date
		ExpDt = month + "/" + date + "/" + EffDate.getFullYear();
		ExpDate.value = ExpDt;
	}
	else
	if (TermAmount == 6) {
		month = "" + (EffDate.getMonth() + 7);
	    if (month.length == 1) month = "0" + month;
	    if (month > 12) {
			month = month - 12;
			month = "0" + month;
			year += 1;
			}
		EffDate.setYear(year);
		date = "" + EffDate.getDate();
		if (date.length == 1) date = "0" + date
		ExpDt = month + "/" + date + "/" + EffDate.getFullYear();
		ExpDate.value = ExpDt;
	}
return ExpDt;
}
else
	ExpDate.value = "";
}
}
function F_ReverseVisibility(x) {
}
function IsKeyIndexBlank() {
  var lcv;
  for (lcv=1; lcv<=20; lcv++) {
    if ( typeof(eval('document.forms[0].KeyIndex' + lcv)) != 'undefined' ) {
      if (eval('document.forms[0].KeyIndex' + lcv + '.value') == '') return true;
      }
    }
  return false;
  }
function doClassSearch() {
// UNI #116, FSIT #39750 - Start added the escape function
//FSIT 187542 - Starts
if((document.getElementById("target") != null) && (document.getElementById("target").value == 'jsp/WAGPTCagGLUSCovLIQ.jsp' || document.getElementById("target").value == 'jsp/PTCppGLUSCovLIQ.jsp' || document.getElementById("target").value == 'jsp/PTCppGLUTCovLIQ.jsp' || document.getElementById("target").value == 'jsp/WAGPTCagGLUTCovLIQ.jsp'))
{
	document.getElementById('GC_USER_CODE_3').disabled = false;
}
//FSIT 187542 - Ends

var url="";
var insval="";
var stateval="";
var classcodeval="";
var classcodedesc="";
var whereclause="";
var classcodeflag = true;
if(document.getElementById('GC_STATE')) {
stateval=document.getElementById('GC_STATE').getAttribute("VALUE");
classcodeval = escape(document.getElementById('SEARCH_CLASS_CODE_COVERAGE').value);
}
else {
classcodeval = escape(document.getElementById('SEARCH_CLASS_CODE_UNIT').value);
if(document.getElementById('GU_RATE_STATE')) {
	stateval=document.getElementById('GU_RATE_STATE').value;
}
else {
	if(document.getElementById('GC_STATE')) {
		stateval=document.getElementById('GC_STATE').value;
	}
	else {
		stateval= '  ';
	}
}
}
if(document.getElementById('COVERAGE_KEY_INSURANCE_LINE')) {
insval = document.getElementById('COVERAGE_KEY_INSURANCE_LINE').value;
}
else {
insval = document.getElementById('UNIT_KEY_INSURANCE_LINE').value;
}
if(document.getElementById('SEARCH_CLASS_CODE_COVERAGE')) {
classcodeval = escape(document.getElementById('SEARCH_CLASS_CODE_COVERAGE').getAttribute("VALUE"));
}
else {
classcodeval = escape(document.getElementById('SEARCH_CLASS_CODE_UNIT').getAttribute("VALUE"));
}
if((((document.getElementById("GC_COVER_CLASS_CODE")) != null) && ((document.getElementById("GC_COVER_CLASS_DESCRIPTION")) != null)) || (((document.getElementById("GU_CLASS_CODE")) != null) && ((document.getElementById("GU_CLASS_DESCRIPTION")) != null)))
{
if(document.getElementById('GC_STATE'))
{var cc = escape(document.getElementById("GC_COVER_CLASS_CODE").value);
var cd = escape(document.getElementById("GC_COVER_CLASS_DESCRIPTION").value) ;}
else
{var cc = escape(document.getElementById("GU_CLASS_CODE").value);
var cd = escape(document.getElementById("GU_CLASS_DESCRIPTION").value) ;}
}
if(isNaN(classcodeval) && classcodeval != '*') {
	classcodeflag = false;
} else {
	classcodeflag = true;
}
if(document.getElementById('BC_EFFECTIVE_DATE')) {
	if(document.getElementById('BC_EFFECTIVE_DATE').value != 0) {
		PolEffDate = document.getElementById('BC_EFFECTIVE_DATE').value;
	}
	else {
		PolEffDate = 9999999;
	}
}
else {
	PolEffDate = 999999;
}
//WAG code updated for class code search: Rahul Tomer ... starts
	/*
	//#39750 - Start Added another if loop
	if (classcodeval == ''|| !(document.getElementById("PROC_LDA_SET_TYPE_NUMBER"))){ 
	if(classcodeflag) {

		url = "../jsp/ClassDefaultList.jsp?INSLine=" + insval+ "&RState=" +stateval+ "&CCode=" + classcodeval + "&EDate=" +PolEffDate+ "&CDesc=&PageNumber=1&FirstCall=Yes"
	} else {
		url = "../jsp/ClassDefaultList.jsp?INSLine=" + insval+ "&RState=" +stateval + "&CCode=" + "&CDesc=" + classcodeval + "&EDate=" +PolEffDate+ "&CDesc=&PageNumber=1&FirstCall=Yes"
	}
	window.open(url,"POINTGrid","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,status=yes");
	}
	else{
	document.getElementById("PROC_LDA_SET_TYPE_NUMBER").value = top.First.frameBottomRight.location;
	if(classcodeflag) 
		{
	//store the url
			url = "../jsp/IntClassDefaultList.jsp?INSLine=" + insval+ "&RState=" +stateval+ "&CCode=" + classcodeval + "&EDate=" +PolEffDate+ "&CDesc=&PresentCC="+cc+"&PresentCD="+cd+"&PageNumber=1&FirstCall=Yes"
		} else 
		{
			url = "../jsp/IntClassDefaultList.jsp?INSLine=" + insval+ "&RState=" +stateval + "&CCode=" + "&CDesc=" + classcodeval + "&EDate="+PolEffDate+"&PresentCC="+cc+"&PresentCD="+cd+"&PageNumber=1&FirstCall=Yes"
		}
	set_busy_icon();
	top.First.frameBottomRight.location = url;
	}*/
	//FSIT 187542 - Starts
	var key_coverage = "";
	if(document.getElementById('COVERAGE_KEY_COVERAGE') != null)
	{
		key_coverage = document.getElementById('COVERAGE_KEY_COVERAGE').value;
	}
	//FSIT 187542 - Ends
	var cA_Flag = "false";
	var reqcode = document.forms[0].REQUESTCODE.value;
	var fullkey = document.getElementById('fullkey').value;;
	var reqCodeStr = reqcode.substring(0,8);
	var fullKeyStr = fullkey.substring(0,16);
	if((insval == "CA") && ("CPPUNITS" == reqCodeStr || "CPPCOVER" == reqCodeStr || "CPPUNTCL" == reqCodeStr
			 || "CPPCOVCL" == reqCodeStr))
	{
			cA_Flag = "true";			
			if (classcodeval == ''|| !(document.getElementById("PROC_LDA_SET_TYPE_NUMBER"))){ 
				if(classcodeflag) {
					url = "../jsp/ClassDefaultList.jsp?INSLine=" + insval+ "&RState=" +stateval+ "&CCode=" + classcodeval + "&EDate=" +PolEffDate+"&fullKeyStr="+fullKeyStr+"&cA_Flag="+cA_Flag+ "&CDesc=&PageNumber=1&FirstCall=Yes"
				} else {
					url = "../jsp/ClassDefaultList.jsp?INSLine=" + insval+ "&RState=" +stateval + "&CCode=" + "&CDesc=" + classcodeval + "&EDate=" +PolEffDate+"&fullKeyStr="+fullKeyStr+"&cA_Flag="+cA_Flag+ "&CDesc=&PageNumber=1&FirstCall=Yes"
				}
				window.open(url,"POINTGrid","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,status=yes");
				}
			else{
				document.getElementById("PROC_LDA_SET_TYPE_NUMBER").value = top.First.frameBottomRight.location;
				if(classcodeflag) 
					{
						url = "../jsp/IntClassDefaultList.jsp?INSLine=" + insval+ "&RState=" +stateval+ "&CCode=" + classcodeval + "&EDate=" +PolEffDate+"&fullKeyStr="+fullKeyStr+"&cA_Flag="+cA_Flag+ "&CDesc=&PresentCC="+cc+"&PresentCD="+cd+"&PageNumber=1&FirstCall=Yes"
					} else 
					{
						url = "../jsp/IntClassDefaultList.jsp?INSLine=" + insval+ "&RState=" +stateval + "&CCode=" + "&CDesc=" + classcodeval + "&EDate="+PolEffDate+"&fullKeyStr="+fullKeyStr+"&cA_Flag="+cA_Flag+"&PresentCC="+cc+"&PresentCD="+cd+"&PageNumber=1&FirstCall=Yes"
					}
				set_busy_icon();
				top.First.frameBottomRight.location = url;
				}			
	}
	//FSIT 187542 - Starts
	else if((reqCodeStr == "CPPCOVER") && (key_coverage == "LIQ"))
	{
		if(classcodeflag)
			url = "../jsp/ClassDefaultList.jsp?INSLine=" + insval+ "&RState=" +stateval+ "&CCode=" + classcodeval + "&EDate=" +PolEffDate+ "&key_coverage=" +key_coverage+ "&CDesc=&PageNumber=1&FirstCall=Yes";
		
		else
			url = "../jsp/ClassDefaultList.jsp?INSLine=" + insval+ "&RState=" +stateval+ "&CCode=" + "&CDesc=" + classcodeval + "&EDate=" +PolEffDate+ "&key_coverage=" +key_coverage+ "&CDesc=&PageNumber=1&FirstCall=Yes";

		window.open(url,"POINTGrid","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,status=yes");
	}
	//FSIT 187542 - Ends
	else
	{
		//#39750 - Start Added another if loop
		if (classcodeval == ''|| !(document.getElementById("PROC_LDA_SET_TYPE_NUMBER"))){ 
		if(classcodeflag) {
		
			url = "../jsp/ClassDefaultList.jsp?INSLine=" + insval+ "&RState=" +stateval+ "&CCode=" + classcodeval + "&EDate=" +PolEffDate+ "&CDesc=&PageNumber=1&FirstCall=Yes"
		} else {
			url = "../jsp/ClassDefaultList.jsp?INSLine=" + insval+ "&RState=" +stateval + "&CCode=" + "&CDesc=" + classcodeval + "&EDate=" +PolEffDate+ "&CDesc=&PageNumber=1&FirstCall=Yes"
		}
		window.open(url,"POINTGrid","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,status=yes");
		}
		else{
		document.getElementById("PROC_LDA_SET_TYPE_NUMBER").value = top.First.frameBottomRight.location;
		if(classcodeflag) 
			{
		//store the url
				url = "../jsp/IntClassDefaultList.jsp?INSLine=" + insval+ "&RState=" +stateval+ "&CCode=" + classcodeval + "&EDate=" +PolEffDate+ "&CDesc=&PresentCC="+cc+"&PresentCD="+cd+"&PageNumber=1&FirstCall=Yes"
			} else 
			{
				url = "../jsp/IntClassDefaultList.jsp?INSLine=" + insval+ "&RState=" +stateval + "&CCode=" + "&CDesc=" + classcodeval + "&EDate="+PolEffDate+"&PresentCC="+cc+"&PresentCD="+cd+"&PageNumber=1&FirstCall=Yes"
			}
		set_busy_icon();
		top.First.frameBottomRight.location = url;
		}
	}
//WAG code updated for class code search: Rahul Tomer ... ends

//UNI #116, FSIT #39750 - end

}
function RemoveCommas(strIn) {
var resultStr;
while (strIn.indexOf(",") != -1) {
strIn = strIn.replace(",","");
}
resultStr = strIn;
return resultStr;
}
function fieldToUpperCase (strFieldName) {
 		var objectstr ="document.getElementById('"+strFieldName+"')";
 		var fObject = eval(objectstr);
		var strValue = fObject.value;
		fObject.value = strValue.toUpperCase();
}
function fldEnbl (strFieldCheckValue, strEnableField, strEnableValue) {
	var vObject = eval('document.forms[0].' + strFieldCheckValue);
	// The field being used to determine if another field should be disabled or enabled.
		var aObject = document.getElementById(strEnableField);
        // The field being enabled or disabled
if(vObject.value!='')
if (vObject.value==strEnableValue) {
// point to new CSS Classname CVH
aObject.className='ef';
aObject.removeAttribute("READONLY","NO");
aObject.focus();
}
else {
// point to new CSS Classname CVH
aObject.className='rfc';
aObject.readOnly=true;
}
}
function showScreenHelp(CurrentPageName) {
var helpUrl = "../Help/" + CurrentPageName + ".html";
window.open(helpUrl,"POINTHelp","dependent=yes,alwaysraised=yes,height=300,width=200,resizable=yes,scrollbars=yes");
}
function traphelpkey() {
}
function doHelp(frmName) {
var helpUrl = "http://localhost/POINTHelp/" + frmName + ".html#" +event.srcElement.name;
window.open(helpUrl,"POINTHelp","toolbar=no,fullscreen=no,height=550,width=600,scrollbars=yes,resizable=yes");
	event.keyCode = 0;
	event.returnValue = false;
	event.cancelBubble = true;
	return false;
}
function doStateSearch() {
var State=document.getElementById('BC_RISK_STATE').value;
var whereclause = " where STCDNAMKEY >= '" + State + "'";
var url = "../jsp/StateSearch.jsp?PageNumber=1&FirstCall=Yes&FileName=PMSP0200&whereField="+whereclause;
window.open(url,"POINTGrid","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,status=yes");
}
function confirmDelete() {
if (document.forms[0].REQUESTCODE.value.substr(8,3) == "DLT" ) {
   if (window.confirm("Are You Sure? Press OK to confirm Delete or Cancel to Abort Delete")) return true;
    else
    return false;
}
else
   return true;
}
/* BAS1030213A1 - start  Quick Quote CVH  */
function doQuickQuoteClassSearch(reason,attributecode) 
{
var url="";
var insval="";
var stateval="";
var classcodeval="";
var classcodedesc="";
var whereclause="";
var classcodeflag = true;
var attcode="";
var reqcodebyattribute="";
calltype = reason;
attcode = attributecode;
if (calltype = "Cover") {
stateval=document.getElementById('GC_STATE').getAttribute("VALUE");
classcodeval = document.getElementById('SEARCH_CLASS_CODE_COVERAGE').value;
}
else {
classcodeval = document.getElementById('SEARCH_CLASS_CODE_UNIT').value;
if(document.getElementById('GU_RATE_STATE')) {
	stateval=document.getElementById('GU_RATE_STATE').value;
}
else {
	if(document.getElementById('GC_STATE')) {
		stateval=document.getElementById('GC_STATE').value;
	}
	else {
		stateval= '  ';
	}
}
}
if (calltype = "Cover") {
insval = document.getElementById('COVERAGE_KEY_INSURANCE_LINE').value;
}
else {
insval = document.getElementById('UNIT_KEY_INSURANCE_LINE').value;
}
if(isNaN(classcodeval)) {
	classcodeflag = false;
} else {
	classcodeflag = true;
}
if(document.getElementById('BC_EFFECTIVE_DATE')) 
{
	if(document.getElementById('BC_EFFECTIVE_DATE').value != 0)
	 {
		PolEffDate = document.getElementById('BC_EFFECTIVE_DATE').value;
	 }
	else 
	{
		PolEffDate = 9999999;
	}
}
else 
{
	PolEffDate = 9999999;
}
if(classcodeflag) {
	url = "../jsp/CppQQSearchClassCodeHeader.jsp?INSLine=" + insval + "&RState=" + stateval + "&CCode=" + classcodeval + "&EDate=" +PolEffDate+ "&CodeValue=" +attcode+ "&FileName=ASA1REP&CDesc=&PageNumber=1&FirstCall=Yes";
} else {
	url = "../jsp/CppQQSearchClassCodeHeader.jsp?INSLine=" + insval + "&RState=" + stateval + "&CCode=" + "&CDesc=" + classcodeval + "&EDate=" +PolEffDate+ "&CodeValue=" +attcode+ "&FileName=ASA1REP&CDesc=&PageNumber=1&FirstCall=Yes";
}
window.open(url,"POINTGrid","menubar=no,toolbar=no,height=550,width=950,resizable=yes,scrollbars=yes,status=yes");
}
/* BAS1030213A1 - End  Quick Quote CVH  */
function doAgentSearch() {
var Agentnum=document.getElementById('BC_AGENT_NUMBER').value;
var AgentMCO=document.getElementById('BC_KEY_MASTER_COMPANY').value;
var whereclause = " where AGNMMCO = '" + AgentMCO + "' AND AGNMNBR >= '" + Agentnum + "'";
var url = "../jsp/AgentSearch.jsp?PageNumber=1&FirstCall=Yes&whereField="+whereclause+"&FileName=PMSP0200&Masterco="+AgentMCO;
window.open(url,"POINTGrid","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,status=yes");
}
function doNASearch() {
//HDK - BAS1040218A1
var ClientName=formattext(document.getElementById('BC_INSURED_ADDRESS_LINE_01').value);
//var whereclause = " where LONGNAME >= '" + ClientName + "'";
//var url = "../jsp/NAClientSearchwithlocate.jsp?PageNumber=1&FirstCall=Yes&whereField="+whereclause+"&FileName=PMSP0200";
//NS - 39882 (FSIT) - Start
//var url = "../jsp/NAClientSearchwithlocate.jsp?PageNumber=1&FirstCall=No&FileName=PMSP0200&CommandCenter=No&LONGNAME="+ClientName;
var url = "../jsp/NAClientSearchwithlocate.jsp?PageNumber=1&FirstCall=Yes&FileName=PMSP0200&CommandCenter=No&LONGNAME="+ClientName;
//NS - 39882 (FSIT) - End
window.open(url,"POINTGrid","height=500,width=800,left=100,top=50,menubar=no,toolbar=no,resizable=yes,scrollbars=yes,status=yes");
}
function doReasonAmendSearch() {
//SNS -- BAS1021004A5 BulkCancellation START
//BAS1040428A8 start
//var ReasonAmended,whereClause,url;
var ReasonAmended = ""; var whereClause,url;
//BAS1040428A8 end
if(document.getElementById("BC_REASON_AMEND_DIGIT1") != null){
//BAS1040428A8 start
//	ReasonAmended =document.getElementById('BC_REASON_AMEND_DIGIT1').value+document.getElementById('BC_REASON_AMEND_DIGIT2').value+document.getElementById('BC_REASON_AMEND_DIGIT3').value;
//BAS1040428A8 end
	 //***KKB***UNI3600*** Begin.
	 //ReasonAmended =document.getElementById('BC_REASON_AMEND_DIGIT1').value+document.getElementById('BC_REASON_AMEND_DIGIT2').value+document.getElementById('BC_REASON_AMEND_DIGIT3').value;
	 ReasonAmended ="";
	 //***KKB***UNI3600*** End.
	whereclause = " where REASAMND3K >= '" + ReasonAmended + "'";
	url = "../jsp/ReasonAmended.jsp?PageNumber=1&FirstCall=Yes&whereField="+whereclause+"&FileName=PMSP0200";
}else{
	 //***KKB***UNI3600*** Begin.
	 //alert(document.getElementById("Reason").value);
	 //ReasonAmended =document.getElementById("Reason").value;
	 ReasonAmended ="";
	 //***KKB***UNI3600*** End.
//BAS1040428A8 start
//	 ReasonAmended =document.getElementById("Reason").value;
//BAS1040428A8 end
//FSIT-40109 - Start
//	 whereclause = " where REASAMND3K >= '" + ReasonAmended + "'";
	 whereclause = " where REASAMND3K <> '' and REASAMND3K >= '" + ReasonAmended + "'";
//FSIT-40109 - End
	 url = "../jsp/ReasonAmended.jsp?PageNumber=1&FirstCall=Yes&whereField="+whereclause+"&FileName=PMSIPP15";
	}


window.open(url,"POINTGrid","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,status=yes");
//SNS -- BAS1021004A5 BulkCancellation END
}
function doCustomerSearch() {
var CustomerNum=document.getElementById('BC_CUSTOMER_NUMBER').value;
//SNS
var cltSeqnum=document.getElementById('BC_CLIENT_SEQUENCE_NUMBER').value;
var addSeqnum=document.getElementById('BC_ADDRESS_SEQUENCE_NUMBER').value;
var url = "../jsp/PolNAOffCustomerSearchHeader.jsp?PageNumber=1&firstCall=Yes&FileName=PMSP0200NAOFF&cltSeqnum="+cltSeqnum+"&addSeqnum="+addSeqnum;
var whereclause = " where M0RVNMNB  >= '" + CustomerNum + "'";
//SNS
//var url = "../jsp/CheckCustomerSearch.jsp?PageNumber=1&FirstCall=Yes&whereField="+whereclause+"&FileName=PMSP0200";
//*** Begin SI CLP1040727A1 *** 
//var url = "../jsp/CustSearch.jsp?PageNumber=1&FirstCall=Yes&whereField="+whereclause+"&FileName=PMSP0200&cltSeqnum="+cltSeqnum+"&addSeqnum="+addSeqnum;
//var url = "../jsp/CheckCustomerSearch.jsp?PageNumber=1&FirstCall=Yes&whereField="+whereclause+"&FileName=PMSP0200&cltSeqnum="+cltSeqnum+"&addSeqnum="+addSeqnum;
//*** End SI CLP1040727A1 *** 
window.open(url,"POINTGrid","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,status=yes");
}

//HMD functions for NAOff Search

function doCustomerSearchNAOff() {
document.getElementById("PROC_PANEL_MODE").value='C';
var url = "../jsp/PolNAOffCustomerSearchHeader.jsp?PageNumber=1&firstCall=Yes&FileName=PMSP0200NAOFF";
window.open(url,"POINTGrid","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,status=yes");
}

function doNAOFFSearch() {
document.getElementById("PROC_PANEL_MODE").value='I';
var url = "../jsp/PolNAOffCustomerSearchHeader.jsp?PageNumber=1&firstCall=Yes&FileName=PMSP0200INS";
window.open(url,"POINTGrid","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,status=yes");
}
//HMD end

function doUseCodeSearch() {
var UseCode=document.getElementById('ADDLINT_KEY_USE_CODE').value;
var whereclause = " where USECD1KEY  >= '" + UseCode + "'";
var url = "../jsp/UseCodeSearch.jsp?PageNumber=1&FirstCall=Yes&whereField="+whereclause;
window.open(url,"POINTGrid","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,status=yes");
}
function do001NASearch(FieldName,FileName) {
//HDK for additional interest
	var AddIntCheck;
	if (document.forms[0].REQUESTCODE.value.substr(0,8) == "CPPADDIN")
			AddIntCheck="true";
	else
		AddIntCheck="false";

var ClientName=document.getElementById(FieldName).value;
var whereclause = " where LONGNAME >= '" + ClientName + "'";
//HDK
//var url = "../jsp/NAClientSearchwithlocate.jsp?PageNumber=1&FirstCall=Yes&whereField="+whereclause+"&FileName="+FileName;
var url = "../jsp/NAClientSearchwithlocate.jsp?PageNumber=1&FirstCall=Yes&whereField="+whereclause+"&FileName="+FileName+"&AddIntCheck="+AddIntCheck;
//var nawin = window.open(url,"POINTGrid","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,status=yes");
var nawin = window.open(url,"POINTGrid","height=500,width=800,left=100,top=50,menubar=no,toolbar=no,resizable=yes,scrollbars=yes,status=yes");
nawin.focus();
}
/*function for Class Defaults button*/
function doClassDefaults() {
var reqcode = document.forms[0].REQUESTCODE.value;
document.forms[0].TMPREQUESTCODE.value = document.forms[0].REQUESTCODE.value;
if(reqcode.substring(3,8) == 'COVER') {
document.forms[0].REQUESTCODE.value = 'CPPCOVCLINQRq';
}
else {
document.forms[0].REQUESTCODE.value = 'CPPUNTCLINQRq';
}
var InsLine=document.getElementById('??_INSURANCE_LINE').value;
var RateState=document.getElementById('??_RATE_STATE').value;
var whereclause = " where A1AGTX >= '" + InsLine + "' A1ADCD >= '" + RateState + "'";
var url = "../jsp/ClassDefaultList.jsp?PageNumber=1&FirstCall=Yes&whereField="+whereclause;
window.open(url,"POINTGrid","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,status=yes");
}
// Function for State Defaults button
function doStateDefaults() {
var AddState = "";
if(document.getElementById('GU_RATE_STATE')) {
	AddState=document.getElementById('GU_RATE_STATE').value;
}
else {
	if(document.getElementById('GC_STATE')) {
		AddState=document.getElementById('GC_STATE').value;
	}
	else {
		AddState= '  ';
	}
}
if(document.getElementById('BC_EFFECTIVE_DATE')) {
	if(document.getElementById('BC_EFFECTIVE_DATE').value != 0) {
		PolEffDate = document.getElementById('BC_EFFECTIVE_DATE').value;
	}
	else {
		PolEffDate = 999999;
	}
}
else {
	PolEffDate = 999999;
}
var whereclause = " ((AAEJTX >= '" + AddState + "') AND (AAA2DT < " + PolEffDate + "))";
// PD Start SI # BAS1040130A0
//var url = "../jsp/StateDefaultList.jsp?PageNumber=1&FirstCall=Yes&whereField="+whereclause;
var url = "../servlet/POINTGridManager?REQUESTCODE=CppStateDefaultListGrid&WHERECLAUSE="+whereclause;
// PD End SI # BAS1040130A0
window.open(url,"POINTGrid","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,status=yes");
}
function do001Submit() { document.forms[0].submit(); }
function Confirm(str) { return confirm(str); }
function doWC04Search() {
var whereclause =document.getElementById('KEY_LOCATION').value+document.getElementById('KEY_MCO').value +document.getElementById('KEY_POLICY_SYMBOL').value+document.getElementById('KEY_POLICY_NUMBER').value+document.getElementById('KEY_POLICY_MODULE').value+document.getElementById('KEY_STATE_NUMBER').value;
var url = "../jsp/WC04Grid.jsp?PageNumber=1&FirstCall=Yes&whereField="+whereclause+"&FileName=PMSPSA15";
window.open(url,"POINTGrid","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,status=yes");
}
function doEmpLiabLimitsSearch() {
//NSV WAG366 EmpLiabLimits issue Start
var strSym = document.getElementById('KEY_POLICY_SYMBOL').value;
if (strSym.length > 0)
{
var symbollen = 3 - strSym.length;
var i = 0;
for( i = 0; i < symbollen; i++ )
{
strSym = strSym + " ";	
}
}
var whereclause =document.getElementById('KEY_LOCATION').value+document.getElementById('KEY_MCO').value +strSym+document.getElementById('KEY_POLICY_NUMBER').value+document.getElementById('KEY_POLICY_MODULE').value+document.getElementById('KEY_STATE_NUMBER').value;
//NSV WAG366 EmpLiabLimits issue End
// PD Start SI # BAS1040130A0
//var url = "../jsp/WC10Grid.jsp?PageNumber=1&FirstCall=Yes&whereField="+whereclause+"&FileName=PMSPWC10";
var url = "../servlet/POINTGridManager?REQUESTCODE=WcpEmpLiabLimitGrid&KEY="+whereclause+"&FileName=PMSPWC10";
// PD End SI # BAS1040130A0
window.open(url,"POINTGrid","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,status=yes");
}
function doVolCompLimitsSearch() {
var whereclause =document.getElementById('KEY_LOCATION').value+document.getElementById('KEY_MCO').value +document.getElementById('KEY_POLICY_SYMBOL').value+document.getElementById('KEY_POLICY_NUMBER').value+document.getElementById('KEY_POLICY_MODULE').value+document.getElementById('KEY_STATE_NUMBER').value;
// PD Start SI # BAS1040130A0
//var url = "../jsp/WC11Grid.jsp?PageNumber=1&FirstCall=Yes&whereField="+whereclause+"&FileName=PMSPWC11";
var url = "../servlet/POINTGridManager?REQUESTCODE=WcpVolCompLimitGrid&KEY="+whereclause+"&FileName=PMSPWC11";
// PD End SI # BAS1040130A0
window.open(url,"POINTGrid","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,status=yes");
}
function AddInterestList() {
var AddCode=document.getElementById('ADDLINT_KEY_USE_CODE').value;
//HDK -- passing MCO as parameter to Additional Interest List
var MCO=document.getElementById('ADDLINT_KEY_MASTER_COMPANY').value;
var whereclause = " USECD1KEY >= '" + AddCode + "'";
//var url = "../jsp/AddInterestList.jsp?PageNumber=1&FirstCall=Yes&whereField="+whereclause+"&FileName=TBRECU1";
//SI # BAS1040130A0 Start - Policy Processing SuperGrids conversion
//var url = "../jsp/AddInterestList.jsp?PageNumber=1&FirstCall=Yes&whereField="+whereclause+"&FileName=TBRECU1&MCO="+MCO;
var url = "../servlet/POINTGridManager?REQUESTCODE=PolAdditionalInterestGrid&WHERECLAUSE=" + whereclause + "&PAGENO=1&FIRSTTIME=Y&FileName=TBRECU1&MCO="+MCO;
//SI # BAS1040130A0 End - Policy Processing SuperGrids conversion
window.open(url,"POINTGrid","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,status=yes");
}
function doRateOptionListSearch() {
var url = "../jsp/RateOptionList.jsp?PageNumber=1&FirstCall=Yes&FileName=TBWC16";
window.open(url,"POINTGrid","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,status=yes");
}
function search_onload() {
	searchForm.reset();
	if(document.searchForm.SYMBOL != null && document.searchForm.SYMBOL.type != 'hidden' ) {
		document.searchForm.SYMBOL.focus();
	}
}
function doAddAdditionalClass() {
	if(document.forms[0].fullkey) {
		var keyvalue = document.forms[0].fullkey.value;
	} else {
		alert('Sorry this request cannot be completed. Please try again later!\n\n If this problem persists then, please contact your System Administrator.');
		return;
	}
//SI # BAS1040130A0 Start
	//var url = '../servlet/POINTManager?Refresh=No&target=jsp/WC04Grid.jsp&KEY="'+keyvalue+'"';
	var reqkey = document.forms[0].fullkey.value;
 	var policyLOC = reqkey.substring(0,2);
 	var policyMCO = reqkey.substring(2,4);
 	var policySymbol = reqkey.substring(4,7);
 	var policyNumber = reqkey.substring(7,14);
 	var policyModule = reqkey.substring(14,16);
 	var policystateno = reqkey.substring(93,95);
 	var KEY = policyLOC+policyMCO+policySymbol+policyNumber+policyModule+policystateno;
	var url = '../servlet/POINTGridManager?REQUESTCODE=WcpClassSearchGrid&KEY='+KEY+'&clascode='+clascode;
//SI # BAS1040130A0 End
	window.open(url,"POINTGrid","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,status=yes");
}
function doVINCheck() {
//AP - BAS1040404A0 - TREE-Inquiry mode shows VIN Check button
if (document.getElementById('REQUESTCODE').value.substring(8,11) != 'INQ')
{
//AP - BAS1040404A0 - TREE-Inquiry mode shows VIN Check button
	document.forms[0].TMPREQUESTCODE.value = document.forms[0].REQUESTCODE.value;
	document.forms[0].REQUESTCODE.value = 'PAPUNITSVINRq';
	UnFormatFields();
	document.forms[0].submit();
} //AP - BAS1040404A0 - TREE-Inquiry mode shows VIN Check button
}
function doStateLOBSearch() {
	var stateCode = "";
	var locCode = "";
	var mcoCode = "";
	if (document.getElementById('BC_RISK_STATE')) {
		stateCode = document.getElementById('BC_RISK_STATE').value;
	}
	if (document.getElementById('BC_KEY_LOCATION_COMPANY')) {
		locCode = document.getElementById('BC_KEY_LOCATION_COMPANY').value;
	}
	if (document.getElementById('BC_KEY_MASTER_COMPANY')) {
		mcoCode = document.getElementById('BC_KEY_MASTER_COMPANY').value;
	}
	var whereclause = " ((STATECDKEY = STCDNAMKEY) AND (STCDNAMKEY = TL17STATE) AND ( TL17LOC in ('99','" + locCode + "') ) AND (TL17MCO in ('99','" + mcoCode + "') ) AND (STATEABBRV >= '" + stateCode + "'))";
// PD -- Start SI # BAS1040130A0	
//var url = "../jsp/StateLOBSearch.jsp?PageNumber=1&FirstCall=Yes&whereField="+whereclause+"&FileName=TBTL17";
var url = "../servlet/POINTGridManager?REQUESTCODE=PolStateLobSearchGrid&WHERECLAUSE="+whereclause+"&FileName=TBTL17";
// PD -- End SI # BAS1040130A0
//*** UNI1040720A6 *** Begin. Code added to default Isseu Code On new Busuiness.
	var reqCode = document.getElementById("REQUESTCODE").value;
	//var url = "../jsp/StateLOBSearch.jsp?PageNumber=1&FirstCall=Yes&whereField="+whereclause+"&FileName=TBTL17";
var url = "../servlet/POINTGridManager?REQUESTCODE=PolStateLobSearchGrid&WHERECLAUSE="+whereclause+"&loc="+locCode+"&mco="+mcoCode+"&req="+reqCode+"&FileName=TBTL17";
//Modified url above for UNI code to work in FD2
	//var url = "../jsp/StateLOBSearch.jsp?PageNumber=1&FirstCall=Yes&whereField="+whereclause+"&loc="+locCode+"&mco="+mcoCode+"&req="+reqCode+"&FileName=TBTL17";
//*** UNI1040720A6 *** End. Code added to default Isseu Code On new Busuiness.

	window.open(url,"POINTGrid","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,status=yes");
}
function formattext(str) {
var i=0;
var replacechar = '\'\'';
if (!(str.indexOf('\'') == -1)) {
i=str.indexOf('\'',i);
var one=str.substring(0,i);
var two=formattext(str.substring(i+1,str.length));
str= one+replacechar+two;
}
return str;
}
function doReinsuranceCodeSearch() {
var whereclause = " HXALOCCD = '" + document.getElementById("POLICY_LEVEL_KEY_LOCATION_COMPANY").value + "' AND HXALODCD = '" + document.getElementById("POLICY_LEVEL_KEY_MASTER_COMPANY").value + "' ";
// PD -- Start SI # BAS1040130A0
//var url = "../jsp/REINSURANCECodeSearch.jsp?PageNumber=1&FirstCall=Yes&whereField="+whereclause+"&FileName=ALHXREP";
var url = "../servlet/POINTGridManager?REQUESTCODE=PolReinCodeSearchGrid&WHERECLAUSE="+whereclause+"&FileName=ALHXREP&PageNumber=1&FirstCall=Yes";
// PD -- End SI # BAS1040130A0
window.open(url,"POINTGrid","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,status=yes");
}
function callURL(strURL) { window.locaton=strURL; }
function doWCVStateSearch() {

var reqkey = document.forms[0].fullkey.value;
//var loc = document.getElementById("KEY_LOCATION").value;
//var mco = document.getElementById("KEY_MCO").value;
var loc = reqkey.substring(0,2);
var mco = reqkey.substring(2,4);
var lob = reqkey.substr(16,3);
var KEY = loc+mco+lob;
//SI # BAS1040130A0 Start - Policy Processing SuperGrids conversion
//var url = "../jsp/WCVAddState.jsp?PageNumber=1&FirstCall=Yes";
//var url = "../servlet/POINTGridManager?REQUESTCODE=WcpStateSelectGrid&PageNumber=1&FirstCall=Yes&reqkey="+document.forms[0].fullkey.value;
var url = '../servlet/POINTGridManager?REQUESTCODE=WcpStateSelectGrid&KEY='+KEY;
//SI # BAS1040130A0 End - Policy Processing SuperGrids conversion
window.open(url,"POINTGrid","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,status=yes");
}
function doWCVClassCodeSearch() {
var clascode=document.getElementById('KEY_EMP_CLASS_CODE').getAttribute("VALUE");
//SI # BAS1040130A0 Start
//var url = '../jsp/WC04Grid.jsp?PageNumber=1&FirstCall=Yes&reqkey='+document.forms[0].fullkey.value+'&clascode='+clascode;
 var reqkey = document.forms[0].fullkey.value;
 var policyLOC = reqkey.substring(0,2);
 var policyMCO = reqkey.substring(2,4);
 var policySymbol = reqkey.substring(4,7);
 var policyNumber = reqkey.substring(7,14);
 var policyModule = reqkey.substring(14,16);
 var policystateno = reqkey.substring(93,95);
 var KEY = policyLOC+policyMCO+policySymbol+policyNumber+policyModule+policystateno;

var url = '../servlet/POINTGridManager?REQUESTCODE=WcpClassSearchGrid&KEY='+KEY+'&clascode='+clascode;
//SI # BAS1040130A0 End
window.open(url,"POINTGrid","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,status=yes");
}
function doWCVGetClassDefaults() {
document.forms[0].TMPREQUESTCODE.value=document.forms[0].REQUESTCODE.value;
document.forms[0].REQUESTCODE.value="WCVCLASSDFTRq";
document.forms[0].submit();
}
function doWCVStateDefaults() {
document.forms[0].TMPREQUESTCODE.value=document.forms[0].REQUESTCODE.value;
document.forms[0].REQUESTCODE.value="WCVSTATEDFTRq";
document.forms[0].submit();
}
//For cancel next module
function doImmediateCancel() {
if(document.forms[0].REQUESTCODE.value=='CPPBCONTCNNRq') {
document.forms[0].REQUESTCODE.value='CPPBCONTCANRq';
}
if (!ValidatePage()) 
   	return false;
document.forms[0].submit();
}
function looptabback() {
	if(document.forms[0].elements[0]!=null) {
		var i;
		var numofelements = document.forms[0].length;
		for( i = 0; i < numofelements; i++ ) {
			//HDK 
			//if(document.forms[0].elements[ i ].type != "hidden" && !document.forms[0].elements[ i ].disabled && !document.forms[0].elements[ i ].readOnly ) {
			if(document.forms[0].elements[ i ].type != "hidden" && !document.forms[0].elements[ i ].disabled && !document.forms[0].elements[ i ].readOnly && document.forms[0].elements[i].parentNode.style.display != "none" ) {
				document.forms[0].elements[ i ].focus();
				break;
			}
		}
	}
}
function selectIt(field) { field.select(); }
//SNS -- changed th function to include code to put '/' too
function putmask(field,mask) {
var i;
if (field == '')
return field;
if (!(mask.indexOf('-') == -1 && mask.indexOf('/') == -1)) {
	i=mask.indexOf('-');
	if(i != -1) {
		mask=mask.substring(0,i)+'#'+mask.substring(i+1,mask.length);
		//AM 39954 added 1 line below
		if(field.length > i && field.substring(i,i+1) != '-')
			field=field.substring(0,i)+'-'+field.substring(i,field.length);
		field=putmask(field,mask);
	}else
	{
		i=mask.indexOf('/');
		mask=mask.substring(0,i)+'#'+mask.substring(i+1,mask.length);
		//AM 39954 added 1 line below
			if(field.length > i && field.substring(i,i+1) != '/')
		field=field.substring(0,i)+'/'+field.substring(i,field.length);
		field=putmask(field,mask);
	}

}
return field;
}
function reset_busy_icon() {
if (top.First != null) 
  if (top.First.document.getElementById("pointlogo")) 
    //images in new folder CVH
    top.First.document.getElementById("pointlogo").src = "../r/pointred.jpg";
}
function set_busy_icon() {
if (top.First != null) 
  if (top.First.document.getElementById("pointlogo")) 
    //images in new folder CVH
    top.First.document.getElementById("pointlogo").src = "../r/pointred-anim.gif";
}
function change_fullkey_pco(obj) {
//HDK - BAS1040405A1 - Start - Refresh after changing policy company
	var sw=0;
	var oldpco=(document.getElementById("fullkey").value).substring(19,21);
	if ( document.getElementById("fullkey") ) 
	{
	  if(((document.getElementById("fullkey").value).substring(19,23)) == "null" )
	  { 
	   if(obj.value != "")
	   {
	   	sw=1;
		document.getElementById("fullkey").value =   (document.getElementById("fullkey").value).substring(0,19) + obj.value +    (document.getElementById("fullkey").value).substring(23);	
	   }
	  }
	  else
	  {
	   if(oldpco != obj.value)
	   {
	    sw=1; 
	    if(obj.value == "" || obj.value == " " || obj.value == "  ")
	  	document.getElementById("fullkey").value =   (document.getElementById("fullkey").value).substring(0,19) + "null" +  (document.getElementById("fullkey").value).substring(21);
	    else
	  	document.getElementById("fullkey").value =   (document.getElementById("fullkey").value).substring(0,19) + obj.value +  (document.getElementById("fullkey").value).substring(21);
	   }
	  }
 	  if(sw==1)
 	  {
 	    document.getElementById("TMPREQUESTCODE").value = document.getElementById("REQUESTCODE").value;
	    document.getElementById("REQUESTCODE").value = "CPPBCONTRFRRq";
	    set_busy_icon();
  	    UnFormatFields();
  	    document.forms[0].submit();
 	  }
        }
//HDK - End 	
}
function doAdditionalInformation() {
if (!(document.getElementById("KEY_CLIENT_SEQUENCE_NUMBER").value == '0')) {
var HostKey;
var requestcode = document.getElementById("REQUESTCODE").value;
requestcode = requestcode.substring(0,requestcode.indexOf('NAMEA')) + 'NAMEB' + requestcode.substring(requestcode.indexOf('NAMEA')+5);
var keyval=document.getElementById("KEY_CLIENT_SEQUENCE_NUMBER").value+document.getElementById("KEY_ADDRESS_SEQUENCE_NUMBER").value;
HostKey='KEY_CLIENT_SEQUENCE_NUMBER='+document.getElementById("KEY_CLIENT_SEQUENCE_NUMBER").value+'&KEY_ADDRESS_SEQUENCE_NUMBER='+document.getElementById("KEY_ADDRESS_SEQUENCE_NUMBER").value+'&KEY_HISTORY_SEQUENCE_NUMBER='+document.getElementById("KEY_ADDRESS_SEQUENCE_NUMBER").value;
document.forms[0].action+='?KEY='+keyval+'&origin=E01Screen&target=jsp/POINT_ADDITIONAL_ADDRESS.jsp&REQUESTCODE='+requestcode+'&'+HostKey;
document.forms[0].submit();
}
else {
alert('Please Submit Client Information before adding Additional Addresses');
return false;
}
}
function doClientInformation()
{
var keyval=document.getElementById("KEY_CLIENT_SEQUENCE_NUMBER").value+document.getElementById("KEY_HISTORY_SEQUENCE_NUMBER").value;
document.getElementById("KEY_ADDRESS_SEQUENCE_NUMBER").value = document.getElementById("KEY_HISTORY_SEQUENCE_NUMBER").value;
var requestcode = document.getElementById("REQUESTCODE").value;
requestcode = requestcode.substring(0,requestcode.indexOf('NAMEB')) + 'NAMEA' + requestcode.substring(requestcode.indexOf('NAMEB')+5);
if (requestcode.indexOf('ADD') != -1) {
requestcode = requestcode.substring(0,requestcode.indexOf('ADD')) + 'CHG' + requestcode.substring(requestcode.indexOf('ADD')+3);
}
document.forms[0].action+='?KEY='+keyval+'&origin=E01Screen&target=jsp/CltClientInformation.jsp&REQUESTCODE='+requestcode;
//document.forms[0].action+='?KEY='+keyval+'&origin=E01Screen&target=jsp/POINT_CLIENT_INFO.jsp&REQUESTCODE='+requestcode;
document.forms[0].submit();
}
function closeNA() {
if (window.opener &&!window.opener.closed) {
	if (!(document.getElementById("KEY_CLIENT_SEQUENCE_NUMBER").value == '0')) {
	document.forms[0].reset();
	if(opener.document.getElementById('REQUESTCODE').value.substring(3,8)=='ADDIN')
	{
	opener.document.getElementById('ADDLINT_NAME').value = document.getElementById('A_LONG_NAME').value;
	opener.document.getElementById('ADDLINT_ADDRESS_LINE_1').value = document.getElementById('A_DOING_BUSINESS_AS').value;
	opener.document.getElementById('ADDLINT_ADDRESS_LINE_2').value =document.getElementById('A_ADDRESS_LINE_1').value;
	opener.document.getElementById('ADDLINT_CITY').value = document.getElementById('A_CITY').value;
	opener.document.getElementById('ADDLINT_STATE').value = document.getElementById('A_STATE').value;
	opener.document.getElementById('ADDLINT_ZIP_CODE').value = document.getElementById('A_ZIP_CODE').value;
	opener.document.getElementById('A_CLIENT_SEQUENCE_NUMBER').value = document.getElementById('KEY_CLIENT_SEQUENCE_NUMBER').value;
	opener.document.getElementById('A_ADDRESS_SEQUENCE_NUMBER').value = document.getElementById('KEY_ADDRESS_SEQUENCE_NUMBER').value;
	}else{
// BAS1030606A0 Start
	if (opener.document.getElementById('REQUESTCODE').value.substring(3,8) == 'CLMTI')	// CL30 Panel
	{		
		opener.document.getElementById('CLMT_BUSINESS_NAME').value = document.getElementById('A_LONG_NAME').value;
		opener.document.getElementById('CLMT_FIRST_NAME').value = document.getElementById('A_FIRST_NAME').value;
		opener.document.getElementById('CLMT_MIDDLE_NAME').value =document.getElementById('A_MIDDLE_NAME').value.substring(0,1);
		opener.document.getElementById('CLMT_LAST_NAME').value = document.getElementById('A_CLIENT_NAME').value;
		opener.document.getElementById('CLMT_SIR_NAME').value = document.getElementById('A_SUFFIX_NAME').value;
		opener.document.getElementById('CLMT_ADDRESS2').value = document.getElementById('A_DOING_BUSINESS_AS').value;
		opener.document.getElementById('CLMT_SEX').value = document.getElementById('A_SEX').value;
		opener.document.getElementById('CLMT_ADDRESS1').value = document.getElementById('A_ADDRESS_LINE_1').value;
		opener.document.getElementById('CLMT_CITY').value = document.getElementById('A_CITY').value;
		opener.document.getElementById('CLMT_STATE').value = document.getElementById('A_STATE').value;
		opener.document.getElementById('CLMT_ZIP').value = document.getElementById('A_ZIP_CODE').value;
		opener.document.getElementById('CLMT_PHONE').value = document.getElementById('A_PHONE_1').value;
		opener.document.getElementById('CLMT_SSN').value = document.getElementById('A_INDIVIDUAL_SSN').value;
		opener.document.getElementById('CLMT_CONTACT').value = document.getElementById('A_CONTACT_NAME').value;
		opener.document.getElementById('CLMT_CLIENTSEQ_NUM').value = document.getElementById('KEY_CLIENT_SEQUENCE_NUMBER').value;
		opener.document.getElementById('CLMT_ADDRSEQ_NUM').value = document.getElementById('KEY_ADDRESS_SEQUENCE_NUMBER').value;
		opener.document.getElementById('CLMT_CLIENT_TYPE').value = document.getElementById('A_NAME_TYPE').value;
		opener.document.getElementById('CLMT_CLIENT_TYPE').fireEvent("onblur");
	}
	else
	{
	opener.document.getElementById('BC_INSURED_ADDRESS_LINE_01').value = document.getElementById('A_LONG_NAME').value;
	opener.document.getElementById('BC_INSURED_ADDRESS_LINE_02').value = document.getElementById('A_DOING_BUSINESS_AS').value;
	opener.document.getElementById('BC_INSURED_ADDRESS_LINE_03').value =document.getElementById('A_ADDRESS_LINE_1').value;
	opener.document.getElementById('BC_INSURED_ADDRESS_CITY').value = document.getElementById('A_CITY').value;
	opener.document.getElementById('BC_INSURED_ADDRESS_STATE').value = document.getElementById('A_STATE').value;
	opener.document.getElementById('BC_ZIP_CODE').value = document.getElementById('A_ZIP_CODE').value;
	opener.document.getElementById('BC_CLIENT_SEQUENCE_NUMBER').value = document.getElementById('KEY_CLIENT_SEQUENCE_NUMBER').value;
	opener.document.getElementById('BC_ADDRESS_SEQUENCE_NUMBER').value = document.getElementById('KEY_ADDRESS_SEQUENCE_NUMBER').value;
	}
	}
// BAS1030606A0 End	
	window.close();
	} else {
	window.close();
	}
} else {
//AP - Start - HitDay Issue 25.Client file exit button usability issue  
       if (document.getElementById('REQUESTCODE').value.substring(8,11) == 'ADD'||document.getElementById('REQUESTCODE').value.substring(8,11) == 'CHG')
	{
		top.window.location.reload(true);
		history.back();
	}
       else {
        if(top.First.CommandCenterForm.document.getElementById("temdta") == null)
          {
			//BAS1040920A0 - Start
			//top.window.location='../servlet/CommandCenterServlet?Key=LOGIN';
			top.window.location='CommandCenter.jsp?Key=LOGIN';
			//BAS1040920A0 - End
          } else 
          {
            window.location = top.First.CommandCenterForm.document.getElementById("temdta").value;
          }   
        }
//AP - End - HitDay Issue 25.Client file exit button usability issue
}
}
function confirmNAChange() {
if(document.forms[0].REQUESTCODE.value == 'BASNAMEACHGRq') {
// Resolution# 39382 Start	(Issue# 40183)
//	 if(confirm("Should all records attached to this name-address be changed?")==true) {
	var qtext = "Click OK to change all records attached to this name-address. Click Cancel to create a new record with changes.";
	 if(confirm(qtext)) {
// Resolution# 39382 End	(Issue# 40183)
	 	document.forms[0].A_SWITCH.value='Y';
		} else {
		document.forms[0].A_SWITCH.value='N';
		}
	}
//AS - Start - Submit functionality
	 if (!ValidatePage()) 
        	return false;
	 document.forms[0].submit();
//AS - End - Submit functionality
}
function switchTree() {
str = new String(top.First.location);
mystr = str.substring(0,str.indexOf('&PolAction=')) + '&PolAction=IN' + str.substring(str.indexOf('&PolAction=')+13);
top.First.location=mystr;
str = new String(parent.Policy.location);
mystr = str.substring(0,str.indexOf('&PolAction=')) + '&PolAction=IN' + str.substring(str.indexOf('&PolAction=')+13);
parent.Policy.location=mystr;
//Value of Refresh is set to "No", to prevent reload() from getting executed during switchTree()
document.forms[0].Refresh.value = "No";
}
function cancelNextModule() {
var spaces = "   ";
var sym = document.forms[0].BC_KEY_SYMBOL.value;
sym = sym+spaces.substring(0,3-sym.length);
var target= '../servlet/FirstServlet?PolAction=CN&LOC='+document.forms[0].BC_KEY_LOCATION_COMPANY.value+'&MCO='+document.forms[0].BC_KEY_MASTER_COMPANY.value+'&Key='+sym+document.forms[0].BC_KEY_POLICY_NUMBER.value+document.forms[0].PROC_LDA_RENEWAL_MODULE.value;
parent.window.location=target;
//WAG4182 - WC6000569 & CPP6001379 - Cancellation Errors - Start
//if (!ValidatePage()) 
//   	return false;
//document.forms[0].submit();
//WAG4182 - WC6000569 & CPP6001379 - Cancellation Errors - End
}
function doDeleteClientInformation() {
var url ;
var keyval=document.getElementById("KEY_CLIENT_SEQUENCE_NUMBER").value+document.getElementById("KEY_ADDRESS_SEQUENCE_NUMBER").value;
if(confirm("Are you sure you want to delete ?")==true) {
		//url='../servlet/POINTManager?KEY='+keyval+'&origin=&REQUESTCODE=BASNAMEADLTRq&target=jsp/POINT_CLIENT_INFO.jsp';
url ='../servlet/POINTManager?KEY='+keyval+'&origin=&REQUESTCODE=BASNAMEADLTRq&target=jsp/CltClientInformation.jsp';
		window.location=url;
	 	return true;
		}
	 	else {
		 return false;
		}
}
function doAddAddition() {
document.forms[0].REQUESTCODE.value = 'BASNAMEBADDRq';
for(i=0;i<document.forms[0].elements.length;i++) {
	if (! (document.forms[0].elements[i].type == "button" || document.forms[0].elements[i].type == "reset" || document.forms[0].elements[i].type == "submit"  || document.forms[0].elements[i].type  == "hidden" ) ) {
		document.forms[0].elements[i].value='';
	}
}
}
// Function to retrieve customer details from Name & Address Grid for customer addition from Customer Search Grid
function doCustNASearch() {
var ClientName=formattext(document.getElementById('C_CLIENT_LAST_NAME').value);
var whereclause = " where LONGNAME >= '" + ClientName + "'";
var url = "../jsp/NAClientSearchwithlocate.jsp?PageNumber=1&FirstCall=Yes&FileName=RVM0CPP&whereField="+whereclause+"&CustFlag=true";
window.open(url,"POINTGridNew","height=500,width=800,left=100,top=50,menubar=no,toolbar=no,resizable=yes,scrollbars=yes,status=yes");
}
// Function to load the customer search grid
function doLoadCustomerSearch() {
//FSIT Res#39417 - start
//var url = "../jsp/PolCustomerSearchHeader.jsp?PageNumber=1&firstCall=Yes&";
var url = "../jsp/PolCustomerSearchHeader.jsp?PageNumber=1&firstCall=Yes&ReturnCall=Yes&";
//**** Two Lines below may need to come out.  B. Lay ***********************
var ClientName=formattext(document.getElementById('C_CUSTOMER_RECORD_NUMBER').value);
var whereclause = " where M0RVNMNB  >= '" + "'";
//FSIT Res#39417 - End
if ( parent.frames.length != 2)	// Not underwriting version
{
//URL WhereField added for conversion.  B Lay
	url = url + "whereField="+whereclause+"&FileName=PMSP0200";
	window.open(url,"POINTGrid","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,status=yes");
}
else
	window.location = url + "CommandCenter=Yes";	// URL tag to identify Underwriting version
}

function doLoadCustomerSearchNAOff() {
//FSIT Res#39417 - start
//var url = "../jsp/PolNAOffCustomerSearchHeader.jsp?PageNumber=1&firstCall=Yes&";
var url = "../jsp/PolNAOffCustomerSearchHeader.jsp?PageNumber=1&firstCall=Yes&ReturnCall=Yes&";
//FSIT Res#39417 - End
if ( parent.frames.length != 2)	// Not underwriting version
{
	if (window.location.href.indexOf("FileName=PMSP0200INS") != -1 )
		url = url + "FileName=PMSP0200INS";
	else
		url = url + "FileName=PMSP0200NAOFF";


	window.open(url,"POINTGrid","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,status=yes");
}
else
	window.location = url + "CommandCenter=Yes";	// URL tag to identify Underwriting version
}
// Customer Search Functionality
// Function to post the customer number to the BC screen after successful addition of customer record
function doPostCustNumber () {
if(document.forms[0].REQUESTCODE.value.substr (8,3) == "ADD")
{
 if(document.getElementById("A_COUNTRY"))
    if(document.getElementById("A_COUNTRY").value == "")
	document.getElementById("A_COUNTRY").value = "USA";
}
if(document.getElementById('PROC_LDA_ISSUE_CODE').value == 'Y')
{
	document.getElementById("C_CLIENT_STATE").disabled = true;
	document.getElementById("A_COUNTRY").disabled = true;
} 
if ((document.forms[0].REQUESTCODE.value.substr (8,3) == "ADD" || document.forms[0].REQUESTCODE.value.substr(8,3) == "CHG") && (document.getElementById('C_CUSTOMER_RECORD_NUMBER').value) && (document.getElementById('PROC_SUCCESS_INDIC').value == "Y")) {
	alert (document.getElementById('PROC_MESSAGE').value);	// show message sent from the host
	if (document.getElementById('PROC_LDA_TYPE_ACTIVITY').value != 'U' && parent.frames.length != 2)	// Not underwriting version
	{   if(opener){
		if (opener.document.getElementById('BC_CUSTOMER_NUMBER') && document.getElementById('C_CUSTOMER_RECORD_NUMBER')) 
//***KKB***UNI2764*** Begin.
	if (opener.document.getElementById('PROC_TRANSACTION_TYPE'))
		var procTranVal = opener.document.getElementById('PROC_TRANSACTION_TYPE').value;
	else
		var procTranVal = "";

	if (procTranVal  == "RI" || procTranVal  == "EN" || procTranVal == "CN" || procTranVal == "CR")
	{
	if (opener.document.getElementById('BC_CUSTOMER_NUMBER').value != document.getElementById('C_CUSTOMER_RECORD_NUMBER').value) 
		alert("Insureds name and Customer Number do not match.\n	Click OK & Submit to update.");
	}
	else
//***KKB***UNI2764*** Begin.
//[PS]-PCR039- FSIT# 128718 - Start
	{
//[PS]-PCR039- FSIT# 128718 - End	
		opener.document.getElementById('BC_CUSTOMER_NUMBER').value = document.getElementById('C_CUSTOMER_RECORD_NUMBER').value;
//[PS]-PCR039- FSIT# 128718 - Start		
		opener.document.getElementById("BC_PAY_BY_PLAN").disabled = false;
	}
//[PS]-PCR039- FSIT# 128718 - End	
			
	//HDK - found a problem
	   if(opener.document.getElementById("PROC_PANEL_MODE"))	
	   if (opener.document.getElementById("PROC_PANEL_MODE").value == 'I')
	   {
		if (opener.document.getElementById('BC_INSURED_ADDRESS_LINE_01') && document.getElementById('C_CLIENT_LAST_NAME')) 
			opener.document.getElementById('BC_INSURED_ADDRESS_LINE_01').value = document.getElementById('C_CLIENT_LAST_NAME').value;

		if (opener.document.getElementById('BC_SORT_NAME') && document.getElementById('C_CLIENT_SORT_NAME')) 
			opener.document.getElementById('BC_SORT_NAME').value = document.getElementById('C_CLIENT_SORT_NAME').value;

		if (opener.document.getElementById('BC_INSURED_ADDRESS_LINE_02') && document.getElementById('C_CLIENT_ADD_LINE2')) 
			opener.document.getElementById('BC_INSURED_ADDRESS_LINE_02').value = document.getElementById('C_CLIENT_ADD_LINE2').value;

		if (opener.document.getElementById('BC_INSURED_ADDRESS_LINE_03') && document.getElementById('C_CLIENT_ADD_LINE1')) 
			opener.document.getElementById('BC_INSURED_ADDRESS_LINE_03').value = document.getElementById('C_CLIENT_ADD_LINE1').value;

		if (opener.document.getElementById('BC_INSURED_ADDRESS_CITY') && document.getElementById('C_CLIENT_CITY')) 
			opener.document.getElementById('BC_INSURED_ADDRESS_CITY').value = document.getElementById('C_CLIENT_CITY').value;

		if (opener.document.getElementById('BC_INSURED_ADDRESS_STATE') && document.getElementById('C_CLIENT_STATE')) 
			opener.document.getElementById('BC_INSURED_ADDRESS_STATE').value = document.getElementById('C_CLIENT_STATE').value;

		if (opener.document.getElementById('BC_ZIP_CODE') && document.getElementById('C_CLIENT_ZIP')) 
			opener.document.getElementById('BC_ZIP_CODE').value = document.getElementById('C_CLIENT_ZIP').value;
	    }
		window.close ();}
	}
	else
	{
	 	if(document.getElementById('PROC_LDA_ISSUE_CODE').value == 'N')
	 	{
	 	    doLoadCustomerSearchNAOff ();
	 	} 
	 	else
	 	{
	 	    doLoadCustomerSearch ();	// return to grid for underwriting version
	 	}
	}	
}
//For underwriting change status-ind and eft status should be readonly 
if(document.forms[0].REQUESTCODE.value.substr(8,3) == "CHG"){
	if (document.getElementById('PROC_SUCCESS_INDIC').value != 'Y'){
		CheckVisibility();
		if(document.getElementById('ID_ADD_NEW_CLIENT_BUTTON')!=null)
		{
			document.getElementById('ID_ADD_NEW_CLIENT_BUTTON').firstChild.value ="Change Client";
		}	
	}
}
//**** Added for retrofit.  B. Lay
if(document.forms[0].REQUESTCODE.value.substr(8,3) == "CHG" && document.getElementById('PROC_SUCCESS_INDIC').value != 'Y')
	document.getElementById('PROC_SUCCESS_INDIC').value = 'A';
if( document.forms[0].REQUESTCODE.value.substr (8,3) == "ADD" && document.getElementById('PROC_LDA_TYPE_ACTIVITY').value == 'U' && document.getElementById('PROC_SUCCESS_INDIC').value != "Y" ){
		document.getElementById('PROC_LDA_TYPE_ACTIVITY').value = "";
		CheckVisibility();
}
		
if ((document.forms[0].REQUESTCODE.value.substr (8,3) == "DLT") && (document.getElementById('PROC_USER_FLAG').value == 'P')) {
	alert (document.getElementById('PROC_MESSAGE').value);	// show message sent from the host
	if(document.getElementById('PROC_LDA_ISSUE_CODE').value == 'Y')
	{
		doLoadCustomerSearch ();	// return to grid for underwriting version
	}	
	else
	{
		doLoadCustomerSearchNAOff ();
	}
}
/*This prevents fields under the heading EFT Bank Information from becoming editable under display mode, 
since they are dynamic fields controlled by the value of PROC_LDA_TYPE_ACTIVITY*/
if (document.forms[0].REQUESTCODE.value.substr (8,3) == "INQ")
     document.getElementById('PROC_LDA_TYPE_ACTIVITY').value = 'U';
/*The host formats the telephone numbers before sending to the panel. A call to UnformatFields is required to remove the unecessary formatting done by FormatFields when the fields are in Change mode.
However, FormatFields does not get called when the fields are read-only in Display/Delete mode.*/
if (document.forms[0].REQUESTCODE.value.substr(8,3) == "CHG")
	UnFormatFields ();
}
// Function to confirm the customer details from the user before making changes to the database
function doConfirmCustChange () {
if (document.forms[0].REQUESTCODE.value.substr (8,3) == "ADD") {
	if (confirm ("Are you sure you want to add the details as entered ?") == true)
	{	
	document.getElementById('PROC_USER_FLAG').value = "Y";
	//HDK - BAS1040421A1
	document.getElementById("C_CLIENT_STATE").disabled = false;
		if (!ValidatePage()) 
   		return false;
		document.forms[0].submit();
	}
	else
		{
		document.getElementById('PROC_USER_FLAG').value = "N";
		}
}
if (document.forms[0].REQUESTCODE.value.substr (8,3) == "CHG") {
	if (confirm ("Are you sure you want to make the changes permanent ?") == true)
		{
		document.getElementById('PROC_USER_FLAG').value = "Y";
		//HDK - BAS1040421A1
		document.getElementById("C_CLIENT_STATE").disabled = false;
		if (!ValidatePage()) 
   		return false;
		document.forms[0].submit();
		}
	else
		{
		document.getElementById('PROC_USER_FLAG').value = "N";
		}
}
//HDK - BAS1040421A1 - Start
if (document.forms[0].REQUESTCODE.value.substr (8,3) == "DLT") {
		if (!ValidatePage()) 
   		return false;
		document.forms[0].submit();
}
//HDK - end
	document.getElementById("C_CLIENT_STATE").disabled = false;
	if(document.getElementById("A_COUNTRY"))
		document.getElementById("A_COUNTRY").disabled = false;
//HDK - BAS1031231A1 - Start		
	if(document.getElementById("C_EFT_STATUS"))
		document.getElementById("C_EFT_STATUS").disabled = false;
//HDK - end
}
//#251 UNI- Ashish Vijay Gadre -- end
//***AFI1030826A0*** Begin"New search grid added to maintain the Dividend Plan on Application Information (BC)."
function doDividendCodeSearch() {
var mco = document.getElementById("P20E_KEY_LOCATION_COMPANY").value;
var lco = document.getElementById("P20E_KEY_MASTER_COMPANY").value;
var pco = document.getElementById("fullkey").value.substr(19,2);
var ste = document.getElementById("fullkey").value.substr(28,2);
var lob = document.getElementById("fullkey").value.substr(16,3);
var edt = document.getElementById("fullkey").value.substr(42,7);
var whereclause = mco+lco+pco+ste+lob+edt;
var url = "../jsp/DividendSearch.jsp?PageNumber=1&FirstCall=Yes&FileName=PMSP0200&whereField="+whereclause;
window.open(url,"POINTGrid","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,status=yes");
}
//***AFI1030826A0*** End.


//***AFI1040205A2*** Begin"New search grid (TBSIC1) added for Site Rating Information screen."
//RV - CLPD11 - SIC Code grid converted to work with POINTGridManager - Start
function doSICCodeSearch() 
{
	var whereclause = "";
	var State= document.getElementById("fullkey").value.substr(93,2);
	var SICCode= document.getElementById("SITE_SIC_CODE").value;

	if(State=='')
		whereclause += " STATE !=''";
	else
		whereclause += " STATE = '" + State + "' OR STATE = '99'";

	if(SICCode=='')
		whereclause += "";
	else
		whereclause = " NAICS = '" + SICCode + "'";
	

        whereclause += " FETCH FIRST 100 ROWS ONLY";
        //RV - WAG1883 - start
        //var url = "../servlet/POINTGridManager?REQUESTCODE=SICCodeGrid&WHERECLAUSE="+whereclause;
        var url = "../jsp/SICCodeSearchFrame.jsp?state=" +State+"&SICCode="+SICCode+"&whereClause="+whereclause;
	window.open(url,"POINTGrid","height=400,width=700,left=220,top=180,menubar=no,toolbar=no,resizable=yes,scrollbars=yes,status=yes");
	//RV - WAG1883 - end
}

/*
function doSICCodeSearch() {
var State=document.getElementById("fullkey").value.substr(28,2);
var whereclause = "";
var url = "../jsp/SICCodeSearch.jsp?PageNumber=1&FirstCall=Yes&whereField="+whereclause+"&FileName=PMSP0200&PolState="+State;
window.open(url,"POINTGrid","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,status=yes");
}
*/
//RV - CLPD11 - SIC Code grid converted to work with POINTGridManager - End
//***AFI1040205A2*** End.

function doClassSearchMR() {
var lob = document.getElementById("BC_LINE_OF_BUSINESS").value;
if(lob=='WCV'||lob=='WC'||lob=='WCA') {
//SI # BAS1040130A0 Start
//var link='../jsp/WC04TBGrid.jsp';
var link='../servlet/POINTGridManager';
var whereclause = document.getElementById("fullkey").value.substring(0,16)+document.getElementById("BC_STATE").value;
//var url = link+"?PageNumber=1&FirstCall=Yes&whereField="+whereclause+"&FileName=PMSPSA15";
var url = link+"?REQUESTCODE=WcpClassSearchMRGrid&KEY="+whereclause;
//SI # BAS1040130A0 End
window.open(url,"POINTGrid","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,status=yes");
}
else {
if (document.getElementById("SA15_SUBLINE").value == "") {
alert("Please select Subline first.");
return;
}
//SI # BAS1040130A0 Start - Policy Processing SuperGrid conversion
//var link='../jsp/ClassCodeDescGrid.jsp';
//var whereclause = " WHERE SUBLINE = '" + document.getElementById("SA15_SUBLINE").value + "' AND LOB = '" + document.getElementById("BC_LINE_OF_BUSINESS").value + "' ";
var whereclause = " SUBLINE = '" + document.getElementById("SA15_SUBLINE").value + "' AND LOB = '" + document.getElementById("BC_LINE_OF_BUSINESS").value + "' ";
//var url = link+"?PageNumber=1&FirstCall=Yes&SubLine="+document.getElementById("SA15_SUBLINE").value+"&whereField="+whereclause+"&FileName=PMSPSA15";
var sublineObj = document.getElementById("SA15_SUBLINE");
var url="../servlet/POINTGridManager?REQUESTCODE=PolClassCodeDescGrid&WHERECLAUSE=" + whereclause + "&PAGENO=1&FIRSTTIME=Y&FileName=TBPP005&Subline=" + document.getElementById("SA15_SUBLINE").value + "&SublineDesc=" + document.getElementById("SA15_SUBLINE").options[sublineObj.selectedIndex].innerText;
//SI # BAS1040130A0 End - Policy Processing SuperGrid conversion
window.open(url,"POINTGrid","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,status=yes");
}
}
function doCoverageSearch() {
// Begin UNI1040720A6 -- Code changed. Stored procedure used.
//var lob = document.getElementById("BC_LINE_OF_BUSINESS").value;
//if(lob=='CPP') {
//var whereclause = " WHERE  TBPP006.LOB ='"+ document.getElementById("BC_LINE_OF_BUSINESS").value+"' AND TBPP006.SUBLINE ='"+document.getElementById("SA15_SUBLINE").value +"' AND (TBTL29.TL29LOC = '"+ document.getElementById("SA15_KEY_LOCATION_COMPANY").value+"' OR TBTL29.TL29LOC IS NULL OR TBTL29.TL29LOC = '99') AND ( TBTL29.TL29MCO = '99' OR TBTL29.TL29MCO IS NULL OR TBTL29.TL29MCO = '"+document.getElementById("SA15_KEY_MASTER_COMPANY").value+"') AND TBPP006.EFFDATE <= '"+document.getElementById("BC_EFFECTIVE_DATE").value+"'";
//} else {
//var whereclause = " WHERE  TBPP006.LOB ='"+ document.getElementById("BC_LINE_OF_BUSINESS").value+"' AND TBPP006.SUBLINE ='"+document.getElementById("SA15_SUBLINE").value +"' AND (TBTL29.TL29LOC = '"+ document.getElementById("SA15_KEY_LOCATION_COMPANY").value+"' OR TBTL29.TL29LOC IS NULL ) AND ( TBTL29.TL29MCO IS NULL OR TBTL29.TL29MCO = '"+document.getElementById("SA15_KEY_MASTER_COMPANY").value+"') AND TBPP006.EFFDATE <= '"+document.getElementById("BC_EFFECTIVE_DATE").value+"'";
//}
var lco = document.getElementById("fullkey").value.substr(0,2);
var mco = document.getElementById("fullkey").value.substr(2,2);
var Subline = document.getElementById("SA15_SUBLINE").value;
var lob = document.getElementById("fullkey").value.substr(16,3);
var edt = document.getElementById("fullkey").value.substr(42,7);
var clsnum = document.getElementById("SA15_CLASSNUM").value;
var whereclause = lco+mco+Subline+lob+edt;
// End UNI1040720A6
if (Subline == "") {
alert("Please select Subline first.");
return;
}
// PD Start SI # BAS1040130A0
//var url = "../jsp/CoverageCodeListGrid.jsp?PageNumber=1&FirstCall=Yes&whereField="+whereclause+"&Subline="+Subline+"&lob="+lob+"&clsnum="+clsnum+"&FileName=PMSPSA15";
var url = "../servlet/POINTGridManager?REQUESTCODE=PolCoverCodeListGrid&WHERECLAUSE="+whereclause+"&Subline="+Subline+"&lob="+lob+"&clsnum="+clsnum+"&FileName=PMSPSA15";
// PD End SI # BAS1040130A0
window.open(url,"POINTGrid","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,status=yes");
}
function doBureauCodes() {
var tmptarget = document.getElementById("target").value;
var reqcode = document.getElementById("REQUESTCODE").value;
reqcode = reqcode.substring(0,reqcode.indexOf('SA15')) + 'SA35' + reqcode.substring(reqcode.indexOf('SA15')+4);
document.forms[0].action+='?KEY=0005&REQUESTCODE='+reqcode+'&tmptarget='+tmptarget+'&origin=E01Screen&target=jsp/Dynamicsa35.jsp';
var zeropad="00000";
var coverseq =document.forms[0].SA15_KEY_COVG_SEQ_NO.value;
coverseq=zeropad.substring(coverseq.length)+coverseq;
var transseq=document.forms[0].SA15_KEY_TRANS_SEQ_NO.value;
transseq=zeropad.substring(transseq.length)+transseq;
var restkey=document.forms[0].fullkey.value.substring(139,194);
document.forms[0].fullkey.value='"'+document.forms[0].fullkey.value.substring(0,123)+coverseq+'      '+transseq+restkey+'"';
document.forms[0].submit();
}
function doContractSearch() {
var fullkey =  document.getElementById('fullkey').value;
var LOC= fullkey.substring(0,2);
// PD -- Start SI # BAS1040130A0
//var whereclause = " where LOCATION = '" +LOC+ "' ";
var whereclause = " LOCATION = '" +LOC+ "' ";
//var url = "../jsp/ContractSearch.jsp?PageNumber=1&FirstCall=Yes&whereField="+whereclause+"&FileName=PMSPRE1100";
var url = "../servlet/POINTGridManager?REQUESTCODE=ReiContractSearchGrid&WHERECLAUSE="+whereclause+"&FileName=PMSPRE1100";
// PD -- End SI # BAS1040130A0
window.open(url,"POINTGrid","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,status=yes");
}
function doCloseAX() {
var mode = document.getElementById("REQUESTCODE").value;
var sucind = document.getElementById("PROC_SUCCESS_INDIC").value;
mode = mode.substring(8,11);
if (mode == "INQ" )
{
	history.back();
}
else
{	
	if (window.opener &&!window.opener.closed) {
	  if (sucind == 'Y') {
	    opener.document.getElementById('ADDLINT_NAME').value = document.getElementById('AUX_NAME').value;
	    opener.document.getElementById('ADDLINT_ADDRESS_LINE_1').value = document.getElementById('AUX_OPTIONAL1').value;
	    opener.document.getElementById('ADDLINT_ADDRESS_LINE_2').value =document.getElementById('AUX_ADDRESS').value;
	    opener.document.getElementById('ADDLINT_CITY').value = document.getElementById('AUX_CITY').value;
	    opener.document.getElementById('ADDLINT_STATE').value = document.getElementById('AUX_STATE').value;
	    opener.document.getElementById('ADDLINT_ZIP_CODE').value = document.getElementById('AUX_ZIPCODE').value;
	    opener.document.getElementById('ADDLINT_SORT_NAME').value = document.getElementById('KEY_INT_UNIQUE').value;
	    //HDK start 
	    top.opener.document.getElementById('ADDLINT_STATE').disabled=true;
	    top.opener.document.getElementById('PROC_LDA_RENEWAL_MODULE').value  = "YY";
	    top.opener.document.getElementById('ADDLINT_KEY_USE_LOCATION').focus();
	    //HDK end
	    window.close();
	   } else {
	    history.back();
	   }
	 }
}
}
//***AFI1031120A0*** Begin"PCR044-Agency Master Changes."
function doAgencyAddlInfo() {

if(document.forms[0].fullkey) {
	var keyvalue = document.forms[0].fullkey.value;
	
} else {
	alert('Sorry this request cannot be completed. Please try again later!\n\n If this problem persists then, please contact your System Administrator.');
	return;
}
var url = '../servlet/POINTManager?Refresh=No&REQUESTCODE=BASAGADLINQRq&target=jsp/AF_AGENCY_ADDITIONAL_INFORMATION.jsp&KEY="'+keyvalue+'"';
window.location=url;
}

function doAgencyFileInfo() {

if(document.forms[0].fullkey) {
	var keyvalue = document.forms[0].fullkey.value;
} else {
	alert('Sorry this request cannot be completed. Please try again later!\n\n If this problem persists then, please contact your System Administrator.');
	return;
}

var url = '../servlet/POINTManager?Refresh=No&REQUESTCODE=BASAGENTINQRq&target=jsp/POINT_AGENCY_INFORMATION.jsp&KEY="'+keyvalue+'"';
window.location=url;
}

//***AFI1031120A0*** End.

// FSIT# 47742 - EFT Enhancement - Start
function BackFromComments()
{

var loc = parent.First.CommandCenterForm.Location.value;
var mco = parent.First.CommandCenterForm.MasterCompany.value;
var destURL = '../jsp/AchTranControlFrame.jsp?LOC='+loc+'&MCO='+mco+'&SecurityIndic=N&pco=null&agency=';
top.location.href = destURL;
}
// FSIT# 47742 - EFT Enhancement - End

function doAgencyComments() {
if(document.forms[0].fullkey) {
	var keyvalue = document.forms[0].fullkey.value;
} else {
	alert('Sorry this request cannot be completed. Please try again later!\n\n If this problem persists then, please contact your System Administrator.');
	return;
}
var url = '../servlet/POINTManager?Refresh=No&target=jsp/AgencyComments.jsp&KEY="'+keyvalue+'"';
window.location=url;
}
function dropfunc() { doSubmit(''); }
function doCommentsList() {
var url = '../jsp/AgencyComments.jsp?PanelCall=Yes';
window.location=url;
}
function do001NASearchAux(FieldName,FileName) {
var ClientName=document.getElementById(FieldName).value;
var whereclause = " where LONGNAME >= '" + ClientName + "'";
//var url = "../jsp/NAClientSearchwithlocate.jsp?PageNumber=1&FirstCall=Yes&whereField="+whereclause+"&FileName="+FileName;
var url = "../jsp/NAClientSearchwithlocate.jsp?PageNumber=1&FirstCall=Yes&whereField="+whereclause+"&FileName="+FileName+"&ASW=Y";
var nawin = window.open(url,"POINTGridAux","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,status=yes");
nawin.focus();
}
function doIkeySearch()
{
var whereclause = " ";
//HDK
var MCO = document.getElementById('ADDLINT_KEY_MASTER_COMPANY').value
if (document.getElementById("ADDLINT_KEY_USE_CODE"))
 if ( document.getElementById("ADDLINT_KEY_USE_CODE").value != "")
	{
	var pirusecd = document.getElementById("ADDLINT_KEY_USE_CODE").value;
	//HDK - whereclause=" where PIRUSECD = '" + pirusecd + "'";
	whereclause=" PIRUSECD = '" + pirusecd + "'";
	}
 else
  {
   alert("Please enter valid Interest Type");
   return false;
  }
//HDK
whereclause += " AND PIRMCO = '" + MCO + "'";
//var url = "../jsp/AuxiliaryCodeSearch.jsp?PageNumber=1&FirstCall=Yes&whereField="+whereclause+"&FileName=PMSLPI01";
//HDK-renaming JSP as per standards.
//var url = "../jsp/CheckAuxiliaryCode.jsp?PageNumber=1&FirstCall=Yes&whereField="+whereclause+"&FileName=PMSLPI01"+"&AddCode="+pirusecd;
var url = "../jsp/PolNAOffCheckAuxiliaryCode.jsp?PageNumber=1&FirstCall=Yes&whereField="+whereclause+"&FileName=PMSLPI01"+"&AddCode="+pirusecd;
window.open(url,"POINTGrid","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,status=yes");
}

// BAS1030606A0 Begin
function doClaimDescSearch() 
{
	var claimtype=document.getElementById('CL_TYPE_OF_CLAIM').value;
	if ((claimtype == '') || (claimtype == ' '))
	{
		alert ("Please select a Claim Type first.");
		document.getElementById('CL_TYPE_OF_CLAIM').focus();
		return;
	}
	var whereclause = " CLAIMTYPE = '" + claimtype + "' ";
        reqcode = "ClmDescSearchGrid"; 
        var url = "../servlet/POINTGridManager?REQUESTCODE=ClmDescSearchGrid&WHERECLAUSE="+whereclause+"&FileName=PMSPCL20";
	window.open(url,"POINTGrid","height=400,width=500,left=220,top=180,menubar=no,toolbar=no,resizable=yes,scrollbars=yes,status=yes");
}
function doCatastropheSearch() 
{
        var url = "../servlet/POINTGridManager?REQUESTCODE=ClmCatDescSearchGrid&KEY=00&PAGENO=1&FIRSTTIME=Y";
	window.open(url,"POINTGrid","height=400,width=500,left=220,top=180,menubar=no,toolbar=no,resizable=yes,scrollbars=yes,status=yes");
}
function doLoadSpecialUse()
{
	var claimtype = document.getElementById("CL_TYPE_OF_CLAIM").value;
	if (document.forms[0].BC_LINE_OF_BUSINESS.value == claimtype)
		return;
	else	// to retain the previous claim type
	{
		if (document.forms[0].BC_LINE_OF_BUSINESS.value.length != 0)
		{	// clear out existing data if claim type has already been selected
			document.getElementById("CL_DESCRIPTION").value = "";
			document.getElementById("CL_DESCRIPTION_CODE").value = "";
			document.getElementById("CL_SPECUSE_1").value = "";
			document.getElementById("CL_SPECUSE_2").value = "";
			document.getElementById("CL_SPECUSE_3").value = "";
			document.getElementById("CL_SPECUSE_4").value = "";
		}
		document.forms[0].BC_LINE_OF_BUSINESS.value = claimtype;
	}
	var specialuse = document.getElementById("CL_SPECIAL_USE_LABELS");
	var numrows = specialuse.length;
	document.getElementById("PROC_SPEC_USE1").value = 'N';
	for (var i = 1;i < numrows;i++)
	{
		var labeltext = specialuse.options(i).text;
		var labelclaimtype = specialuse.options(i).value;
		if (labelclaimtype == claimtype)
		{
			document.getElementById("PROC_SPEC_USE1").value = 'Y';
			break;
		}
	}
	if (document.getElementById("PROC_SPEC_USE1").value == 'Y')
	{
		document.getElementById("CL_SPECUSE_LIT_1").value = labeltext.substring (0,labeltext.indexOf('*'));
		document.getElementById("CL_SPECUSE_LIT_2").value = labeltext.substring (labeltext.indexOf('*')+1,labeltext.indexOf('+'));
		document.getElementById("CL_SPECUSE_LIT_3").value = labeltext.substring (labeltext.indexOf('+')+1,labeltext.indexOf('$'));
		document.getElementById("CL_SPECUSE_LIT_4").value = labeltext.substring (labeltext.indexOf('$')+1,labeltext.length);
	}
	CheckVisibility ();
}
function doPolicySearchClaims(NameAddresInd)
{
	var LOC = document.getElementById ("KEY_LOCATION").value;
	var MCO = document.getElementById ("KEY_MASTER_COMPANY").value;
	var url;
//BAS1040506A4 Start
	var symbol = document.getElementById("KEY_SYMBOL").value;
	var policy = document.getElementById("KEY_POLICY_NUMBER").value;
	var module = document.getElementById("KEY_MODULE").value;
	// Launch policy search with the policy number available from the panel
	var query = "SYMBOL=" + symbol + "&POLICY0NUM=" + policy + "&MODULE=" + module;
	//RV -  Added changes for Underwriter search parameter retrofitted in Western Ag
	//query += "&LASTNAME=&FIRSTNAME=&ADD0LINE04=&STATE=&ZIP0POST=&PHONE1=&SSN=&CUST0NO=&GROUPNO=&AGENCY=&LINE0BUS=&SORT0NAME=&MASTER0CO=&whereField=+where+&PageNumber=1&FirstCall=No&TRANS0STAT=+&PolAction=CL&BranchSecurity=+&Company0no=+&Agnmnbr=+&getPolicy=0";
	query += "&LASTNAME=&FIRSTNAME=&ADD0LINE04=&STATE=&ZIP0POST=&PHONE1=&SSN=&CUST0NO=&GROUPNO=&AGENCY=&LINE0BUS=&UNDERWRITER=&SORT0NAME=&MASTER0CO=&whereField=+where+&PageNumber=1&FirstCall=No&TRANS0STAT=+&PolAction=CL&BranchSecurity=+&Company0no=+&Agnmnbr=+&getPolicy=0";
	query += "&LOC=" + document.getElementById("KEY_LOCATION").value + "&MCO=" + document.getElementById("KEY_MASTER_COMPANY").value + "&LASTNAMEBW=1&FIRSTNAMEBW=1&Title=Attach+Coverage+:+Policy+Search+Results&SelectOnly=Y&FileName=PMSPCL20&action=CL";
//BAS1040506A4 End
	if (NameAddresInd == 'N')
		url = "../jsp/FindPolicyForActionNAOff.jsp";
	else
		url = "../jsp/FindPolicyForAction.jsp";
//BAS1040506A4 Start
	if ((document.getElementById("KEY_SYMBOL").value != "")||(document.getElementById("KEY_POLICY_NUMBER").value != "")||(document.getElementById("KEY_MODULE").value != ""))
	{
		query = url+"?"+query;
		url = query;
	}
	else
//BAS1040506A4 End
	url += "?action=XX&LOC=" + LOC + "&MCO=" + MCO + "&SelectOnly=Y&FileName=PMSPCL20";
	window.open(url,"POINTGrid","height=400,width=500,left=220,top=180,menubar=no,toolbar=no,resizable=yes,scrollbars=yes,status=yes");
}
function doClmGetInsured()
{
	var InsuredSelection = document.getElementById("CLMT_INSURED").value;
	var InsuredAvailable = document.getElementById("PROC_SPEC_USE2").value;
	var PolicySymbol = document.getElementById("KEY_SYMBOL").value;
	for (var i = PolicySymbol.length;i < 3;i++)
	//HDK - BAS1040420B0 - Wrong message if Symbol not entered.
		if(PolicySymbol != "")
		PolicySymbol += " ";
	var PolicyNumber = document.getElementById("KEY_POLICY_NUMBER").value;
	var PolicyModule = document.getElementById("KEY_MODULE").value;

	// Insured is not available .. get info from default host module.
	
	if (InsuredSelection == "Y" && InsuredAvailable != "Y")
	{
		if ((PolicySymbol == "") || (PolicyNumber == "") || (PolicyModule == ""))
		{
			alert ("Please enter the policy number to retrieve insured's information.");
			document.getElementById("CLMT_INSURED").value = "N";
			document.getElementById("CLMT_INSURED").selectedIndex = 1;
			document.getElementById("KEY_SYMBOL").focus();
			return;
		}
		var Location = document.getElementById("KEY_LOCATION").value;
		var MasterCompany = document.getElementById("KEY_MASTER_COMPANY").value;
		var Claim = document.getElementById("KEY_CLAIM_NUMBER").value;
		var target = document.forms[0].target.value;
		var reqcode = document.forms[0].REQUESTCODE.value;
		var Claimant = "    ";
	//ATN - BAS1030820A9 start
		var spaces = "0000";
		if (reqcode == "BASCLMTICHGRq"){
			Claimant = document.getElementById("KEY_CLAIMANT_SEQ").value;
			Claimant = spaces.substring(0,4-Claimant.length)+Claimant;
			}
	//ATN - BAS1030820A9 end
		var url = "../servlet/POINTManager?REQUESTCODE=" + reqcode + "&target=" + target + "&KEY=\"";
		url += Location + MasterCompany + Claim + Claimant + PolicySymbol + PolicyNumber + PolicyModule + InsuredSelection + "\"&";
		set_busy_icon();
		window.location = url;
	}
	// Insured is available .. clear out all fields .. enable search buttons
	if (InsuredSelection == "N" && InsuredAvailable == "Y")
	{
		document.getElementById("CLMT_BUSINESS_NAME").value = "";
		document.getElementById("CLMT_FIRST_NAME").value = "";
		document.getElementById("CLMT_MIDDLE_NAME").value = "";
		document.getElementById("CLMT_LAST_NAME").value = "";
		document.getElementById("CLMT_SIR_NAME").value = "";
		document.getElementById("CLMT_ADDRESS2").value = "";
		document.getElementById("CLMT_SEX").value = "";
		document.getElementById("CLMT_AGE").value = "";
		document.getElementById("CLMT_ADDRESS1").value = "";
		document.getElementById("CLMT_CITY").value = "";
		document.getElementById("CLMT_STATE").value = "";
		document.getElementById("CLMT_ZIP").value = "";
		document.getElementById("CLMT_CONTACT").value = "";
		document.getElementById("CLMT_SSN").value = "";
		document.getElementById("CLMT_PHONE").value = "";
		document.getElementById("PROC_SPEC_USE2").value = "N";
		if (document.getElementById("CLMT_CLIENTSEQ_NUM"))
		{	// to be set for NA-on condition
			document.getElementById("CLMT_CLIENTSEQ_NUM").value = "0";
			document.getElementById("CLMT_ADDRSEQ_NUM").value = "0";
			document.getElementById("ID_CLAIMANT_SEARCH_INDIVIDUAL").style.visibility = 'visible';
			document.getElementById("ID_CLAIMANT_SEARCH_BUSINESS").style.visibility = 'visible';
		}
		else
			document.getElementById("CLMT_ZIP_EXTN").value = "";
	}	
}
function doGetPayeeDetails(payee)
{
	
	var payeevalue = payee.value;
	var payeedata;
	if (payee.name == "DRFT_MAILTOCODE")
		payeedata = payeevalue;
	else
			payeedata = document.getElementById("DRFT_PAYTOCODE1").options[payee.selectedIndex].value;
	var infoAvailable = false;
	var errorIndic = false;
	var adjSwitch = document.getElementById("PROC_SPEC_USE1").value;
	if ((payeedata.length >= 126 || payeedata.length == 0) && (adjSwitch != 'Y'))
	{
		infoAvailable = true;
		if (payeedata.length >= 132)
		{
			if (payeedata .substring(131,132) == "Y")
				errorIndic = true;
		}
	}
	if (payeevalue == "")
		payeevalue = " ";
	else
		payeevalue = payeevalue.substring(0,1);
	if (adjSwitch != "Y")
	{
		if ((payeevalue == "B" || payeevalue == "F" || payeevalue == "H" || payeevalue == "O") && !infoAvailable)
		{
			alert ("Please select a vendor first.");
			payee.value = ""
			doGetPayeeDetails(payee);
			return;
		}
		if (payee.name != "DRFT_MAILTOCODE")
		{
			var count = payee.name.substring(payee.name.length-1);
			if (payeevalue == " ")
			{
				document.getElementById("DRFT_PAYEENAME" + count).value = "";
				document.getElementById("DRFT_PAYEEADD" + count + "1").value = "";
				document.getElementById("DRFT_PAYEEADD" + count + "2").value = "";
				document.getElementById("DRFT_PAYEEADD" + count + "3").value = "";
				document.getElementById("DRFT_PAYEEZIP" + count).value = "";
				return;
			}
			if (!(payee.value == "P" || payee.value == "L" || payee.value == "M" || payee.value == "N" || payee.value == "T" || payee.value == "S"))
			{
				if (infoAvailable && !errorIndic)
				{		
					document.getElementById("DRFT_PAYEENAME" + count).value = payeedata.substring(1,31);
					document.getElementById("DRFT_PAYEEADD" + count + "1").value = payeedata.substring(31,61);
					document.getElementById("DRFT_PAYEEADD" + count + "2").value = payeedata.substring(61,91);
					document.getElementById("DRFT_PAYEEADD" + count + "3").value = payeedata.substring(91,121);
					document.getElementById("DRFT_PAYEEZIP" + count).value = payeedata.substring(121,131);
					return;
				}
				if (errorIndic)
				{
					alert (payeedata.substring(132));
					document.getElementById("DRFT_PAYTOCODE" + count).value = "";
					doGetPayeeDetails(payee);
					return;
				}
			}
		}
		else
		{
//FSIT Issue#50360 Resolution#39895 Start
//				if (payeevalue == " " || payeevalue == "S")
				if (payeevalue == "S")
//FSIT Issue#50360 Resolution#39895 End				
				return;
			if (!(payee.value == "P" || payee.value == "L" || payee.value == "M" || payee.value == "N" || payee.value == "T"))
			{
				if (infoAvailable && !errorIndic)
				{		
					document.getElementById("DRFT_MAILTONAME").value = payeedata.substring(1,31);
					document.getElementById("DRFT_MAILTOADD1").value = payeedata.substring(31,61);
					document.getElementById("DRFT_MAILTOADD2").value = payeedata.substring(61,91);
					document.getElementById("DRFT_MAILTOADD3").value = payeedata.substring(91,121);
					document.getElementById("DRFT_MAILTOZIP").value = payeedata.substring(121,131);
					return;
				}
				if (errorIndic)
				{
					alert (payeedata.substring(132));
					document.getElementById("DRFT_MAILTOCODE").value = "";
					return;
				}
			}
		}
	}
	if (!(payeevalue == 'A' || payeevalue == 'C' || payeevalue == 'I' || payeevalue == 'S') || adjSwitch == "Y")
	{
		var key = payeevalue + document.getElementById("KEY_LOCATION").value + document.getElementById("KEY_MASTER_COMPANY").value + document.getElementById("KEY_CLAIM_NUMBER").value + document.getElementById("KEY_CLAIMANT_SEQ").value;
		var spaces = "   ";
		var Symbol = document.getElementById("KEY_SYMBOL").value;
		var LOB = document.getElementById("BC_LINE_OF_BUSINESS").value;
		Symbol += spaces.substring(Symbol.length);
		LOB += spaces.substring(LOB.length);
		key += Symbol + document.getElementById("KEY_POLICY_NUMBER").value + document.getElementById("KEY_MODULE").value;
		key += LOB + document.getElementById("GEN_MAJ_PERIL").value + document.getElementById("GEN_UNIT").value;
		key += document.getElementById("KEY_ADJUSTOR_NUMBER").value;
		var styleval, url = "../jsp/";
		if ((payee.value == "P" || payee.value == "L" || payee.value == "M" || payee.value == "N" || payee.value == "T") && adjSwitch != "Y")
		{
			url += "../servlet/POINTGridManager?REQUESTCODE=ClmPayeeSelectionGrid&KEY=" + key + "&Payee=" + payee.name;
			styleval = "height=400,width=500,left=220,top=180,menubar=no,toolbar=no,resizable=yes,scrollbars=yes,status=yes";
			var windowname = "PayeeDetails"+payee.name.substring(payee.name.length-1,payee.name.length);
			window.open (url,windowname,styleval);
		}
		else
		{
//FSIT Issue#50360 Resolution#39895 Start
			document.getElementById("ID_SUBMIT_BUTTON").disabled = true;
//FSIT 39881 starts
			if(opener!=null&&opener.name=="RightWindow")
			{
			document.getElementById("PROC_SPEC_USE1").value = opener.top.First.frameBottomRight.location;
//FSIT Issue#50360 Resolution#39895 Start
//			url += "ClmGetPayeeDetails.jsp?Key='B" + key.substring(1,21) + key.substring(24,33) + key.substring(36,44) + document.getElementById("BC_LINE_OF_BUSINESS").value + " " + document.getElementById("KEY_SYMBOL").value + "  " + document.getElementById("KEY_ADJUSTOR_NUMBER").value + "      '";
			url += "ClmGetPayeeDetails.jsp?VendorNo="+ document.getElementById("KEY_ADJUSTOR_NUMBER").value;
//FSIT Issue#50360 Resolution#39895 End
			opener.top.First.frameBottomRight.opener=this;
			opener.top.First.frameBottomRight.location = url;

			
			}else
			{
//FSIT 39881 ends
			document.getElementById("PROC_SPEC_USE1").value = top.First.frameBottomRight.location;
//FSIT Issue#50360 Resolution#39895 Start
//			url += "ClmGetPayeeDetails.jsp?Key='B" + key.substring(1,21) + key.substring(24,33) + key.substring(36,44) + document.getElementById("BC_LINE_OF_BUSINESS").value + " " + document.getElementById("KEY_SYMBOL").value + "  " + document.getElementById("KEY_ADJUSTOR_NUMBER").value + "      '";
			url += "ClmGetPayeeDetails.jsp?VendorNo="+ document.getElementById("KEY_ADJUSTOR_NUMBER").value;
//FSIT Issue#50360 Resolution#39895 End
			top.First.frameBottomRight.location = url;
//FSIT 39881 starts
			}
//FSIT 39881 ends
		}
	}
}
//BAS1040107A1 
function doGetAdjustor(fileName)
{
// BAS1040513A7 Start
//    var url = "../servlet/POINTGridManager?REQUESTCODE=ClmAdjusterSelectionGrid&PAGENO=1&FIRSTTIME=Y&FileName=" + fileName;
	var whereclause = " ADNMADJNUM >= ' ' ORDER BY ADNMADJNUM";
//[PS]-Adjustor Search Grid has been modified - Start	
        whereclause += " FETCH FIRST 100 ROWS ONLY";
        var url = "../jsp/AdjustorSearch.jsp?PAGENO=1&FIRSTTIME=Y&FileName=" + fileName + "&WHERECLAUSE=" + whereclause;
//    var url = "../servlet/POINTGridManager?REQUESTCODE=ClmAdjusterSelectionGrid&PAGENO=1&FIRSTTIME=Y&FileName=" + fileName + "&WHERECLAUSE=" + whereclause;
//[PS]-Adjustor Search Grid has been modified - End
// BAS1040513A7 End
	window.open(url,"POINTGrid","height=400,width=500,left=220,top=180,menubar=no,toolbar=no,resizable=yes,scrollbars=yes,status=yes");
}
//BAS1040107A1-END
function doGetPayeePhrase()
{
	var url = "../servlet/POINTGridManager?REQUESTCODE=ClmPayeePhraseSearchGrid";
	window.open(url,"POINTGrid","height=400,width=500,left=220,top=180,menubar=no,toolbar=no,resizable=yes,scrollbars=yes,status=yes");
}
function doGetMemoPhrase()
{
	var url = "../servlet/POINTGridManager?REQUESTCODE=ClmMemoPhraseSearchGrid";
	window.open(url,"POINTGrid","height=400,width=500,left=220,top=180,menubar=no,toolbar=no,resizable=yes,scrollbars=yes,status=yes");
}
function doEditPayeeDetails(payeeNumber)
{
	if (document.getElementById("DRFT_PAYTOCODE"+payeeNumber).selectedIndex == 0)
	{
		alert ("Please select a payee first.");
		document.getElementById("DRFT_PAYTOCODE"+payeeNumber).focus();
		return;
	}
	var url = "../jsp/ClmEditPayeeAddress.jsp?Payee=" + payeeNumber;
	window.open (url, "PayeeAddress", "height=300,width=450,left=300,top=275,location=no,menubar=no,resizable=no,scrollbars=no,status=no,toolbar=no");
}
function RsvTablefocus()
{
	if (parent.frames.length > 1)
	{
		if(parent.frames[1].ReservePayments != null && parent.frames[1].ReservePayments.rows[0].cells[0].firstChild != null)
		{
			parent.frames[1].ReservePayments.rows[0].cells[0].firstChild.focus();
			parent.frames[1].ReservePayments.rows[0].cells[0].firstChild.select();
		}
	}
}
function do001NASearchClaim(FieldName,FileName)
{
	var ClientName=document.getElementById(FieldName).value;
	var whereclause = " where LONGNAME >= '" + ClientName + "'";
	var url = "../jsp/NAClientSearchwithlocate.jsp?PageNumber=1&FirstCall=Yes&whereField="+whereclause+"&FileName="+FileName+"&AddClient=Y&DeleteOption=N&ChangeOption=N";
// BAS1031024A1 Start
	if (document.getElementById("PROC_SPEC_USE3"))
	{
		if (document.getElementById("PROC_SPEC_USE3").value == "Y")
			url += "&NAMETYPE=I&RestrictNameType=Y";
	}
// BAS1031024A1 End	
	var nawin = window.open(url,"POINTGridClm","height=400px,width=650px,left=120px,top=180px,menubar=no,toolbar=no,resizable=yes,scrollbars=yes,status=yes");
	nawin.focus();
}
// BAS1030606A0 End

//BAS1030404A1 Begin
function adjustIFrameSize (iframeWindow) 
{
	if (iframeWindow.document.height) 
	{
    	var iframeElement = document.getElementById(iframeWindow.name);
    	iframeElement.style.height = iframeWindow.document.height + 'px';
    	iframeElement.style.width = iframeWindow.document.width + 'px';
  	}
  	else if (document.all) 
	{
    	var iframeElement = document.all[iframeWindow.name];
    	if (iframeWindow.document.compatMode && iframeWindow.document.compatMode != 'BackCompat') 
    	{
      		iframeElement.style.height = iframeWindow.document.documentElement.scrollHeight + 5 + 'px';
      		iframeElement.style.width = iframeWindow.document.documentElement.scrollWidth + 5 + 'px';
    	}
    	else 
		{
      		iframeElement.style.height = iframeWindow.document.body.scrollHeight + 5 + 'px';
		    iframeElement.style.width = iframeWindow.document.body.scrollWidth + 5 + 'px';
    	}
  	}
}
//BAS1030404A1 End

//BAS1020930A8 BEGIN
function doMGAContractDefaults() {
if(document.forms[0].REQUESTCODE.value!='MGACOVRDDFTRq')
{
document.forms[0].TMPREQUESTCODE.value=document.forms[0].REQUESTCODE.value;
document.forms[0].REQUESTCODE.value="MGACOVRDDFTRq";
document.forms[0].submit();
}
}
function doMGAContractSearch() {
var whereclause =document.getElementById('KEY_LOCATION').value+document.getElementById('KEY_MCO').value +document.getElementById('KEY_POLICY_SYMBOL').value+document.getElementById('KEY_POLICY_NUMBER').value+document.getElementById('KEY_POLICY_MODULE').value;
var url = "../jsp/MGAContractList.jsp?PageNumber=1&FirstCall=Yes&whereField="+whereclause+"&FileName=PMSPMG1100";
window.open(url,"POINTGrid","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,status=yes");
}
//BAS1020930A8 END

// BAS1021010A8 Start
function showAttachedClaim() {

	set_busy_icon();
	keyvalue=document.getElementById("KEY_CLIENT_SEQUENCE_NUMBER").value;
	whereclause = " CLTSEQNUM = " + keyvalue;
	var i;
	for(i = keyvalue.length;i< 10;i++) 
	{
	keyvalue = '0'+keyvalue; 
	}

	var url = "../servlet/POINTGridManager?REQUESTCODE=CltAttachedClaimsGrid&KEY="+keyvalue+"";
	window.open(url,"CNList","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,status=yes");

}

function showAttachedPolicy() {

	set_busy_icon();
	keyvalue=document.getElementById("KEY_CLIENT_SEQUENCE_NUMBER").value;
	whereclause = " CLTSEQNUM = " + keyvalue;
	var url = "../servlet/POINTGridManager?REQUESTCODE=CltAttachedPoliciesGrid&WHERECLAUSE="+whereclause+"&FileName=BASCLT1400";
	window.open(url,"CNList","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,status=yes");
}

function showAttachedAddIntInfo() {

	set_busy_icon();
	keyvalue=document.getElementById("KEY_CLIENT_SEQUENCE_NUMBER").value;
	whereclause = " CLTSEQNUM = " + keyvalue;
	var i;
		for(i = keyvalue.length;i< 10;i++) 
		{
		keyvalue = '0'+keyvalue; 
		}

//	var url = "../servlet/POINTGridManager?REQUESTCODE=CltAttachAdnlIntrstGrid&WHERECLAUSE="+whereclause+"&FileName=BASCLT1500";
	var url = "../servlet/POINTGridManager?REQUESTCODE=CltAttachAdnlIntrstGrid&KEY="+keyvalue+"";
	
	window.open(url,"CNList","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,status=yes");
}

function showAttachedCust() {

	set_busy_icon();
	keyvalue=document.getElementById("KEY_CLIENT_SEQUENCE_NUMBER").value;
	whereclause = " CLTSEQNUM = " + keyvalue;
	var url = "../servlet/POINTGridManager?REQUESTCODE=CltAttachedCustomersGrid&WHERECLAUSE="+whereclause+"&FileName=BASCLTJ004";
	window.open(url,"CNList","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,status=yes");
}

// BAS1021010A8 End


// BAS1030927A0 Start
function doClaimExaminerSearch()
{
// FSIT Issue# 40136 Start
//	var loc = document.getElementById("KEY_LOCATION").value;
//	var mco = document.getElementById("KEY_MASTER_COMPANY").value;
//  var whereclause = " D303LOC = '" + loc + "' AND D303MCO = '" + mco + "'";
//  var url = "../servlet/POINTGridManager?REQUESTCODE=ClmExaminerSearchGrid";
	var whereclause = " D303EXNO != ' ' AND D303EXNO != '**'";
    var url = "../servlet/POINTGridManager?REQUESTCODE=ClmExaminerSearchGrid&WHERECLAUSE=" + whereclause; 
// FSIT Issue# 40136 End
	window.open(url,"POINTGrid","height=400,width=500,left=220,top=180,menubar=no,toolbar=no,resizable=yes,scrollbars=yes,status=yes");
}
// BAS1030927A0 End
//BAS1030606A0 start --- for delete functionality
function doclmfinsdelete(){ 
var url,KEY;
var KEY = document.getElementById("fullkey").value;
//FSIT#88026 Resolution#42101  Start
	//if(document.getElementById("FINL_RESV_SW").value == "Y"){
	if(document.getElementById("FINL_RESERVE_PAYMENT_AMT").value != "0.00"){
//FSIT#88026 Resolution#42101  End	
// BAS1031124A0 Start		
		if(confirm("Do you want to delete the reserve record associated with this payment?")== true)
// BAS1031124A0 End
//FSIT#88026 Resolution#42101  Start
		{
//			url = "../servlet/ClaimsNavigationServlet?KEY="+KEY+"&DEL=Y&RESV=Y&";
			url = "../servlet/ClaimsNavigationServlet?KEY="+KEY+"&DEL=Y&RESV=Y&ReqCode=nextPanel&";
			window.location = url;
		}
		else
		{
//			url = "../servlet/ClaimsNavigationServlet?KEY="+KEY+"&DEL=Y&RESV=N&";	
			url = "../servlet/ClaimsNavigationServlet?KEY="+KEY+"&RESV=N&ReqCode=nextPanel&";	
			window.location = url;
		}		
	}else
		if(confirm("Do you want to cancel this payment?")== true)
		{
// FSIT 142118 WAG4829 Start
// FSIT 150545 Start
//			url = "../servlet/ClaimsNavigationServlet?KEY="+KEY+"&DEL=Y&RESV=N&";
			url = "../servlet/ClaimsNavigationServlet?KEY="+KEY+"&RESV=N&ReqCode=nextPanel&";
// FSIT 150545 End
// FSIT 142118 WAG4829 End
//FSIT#88026 Resolution#42101  End		
	window.location = url;	
//FSIT#88026 Resolution#42101  Start
		}
//FSIT#88026 Resolution#42101  End		
}
//BAS1030606A0 end ---for delete functionality

//BAS1030606A0 start --- for Notice-only functionality
function donoticeonlysubmit(){
var KEY = document.getElementById("fullkey").value;
if( KEY.length > 34 ) document.getElementById("fullkey").value = "'"+KEY.substring(0,32)+"'";
document.forms[0].tmptarget.value = "jsp/ClmFinancialsFrame.jsp";
document.forms[0].Refresh.value = "Yes";
if (ValidatePage())
	document.forms[0].submit();
}
//BAS1030606A0 end --- for Notice-only functionality//SNS
function setSuccessIndic()
{
var i;
if(document.getElementById("PROC_SUCCESS_INDIC"))
	document.getElementById("PROC_SUCCESS_INDIC").value = "A";
if(document.getElementById("C_CLIENT_STATE")){
	document.getElementById("C_CLIENT_STATE").disabled = false;
	if(document.getElementById('PROC_SUCCESS_INDIC').value != 'A')
	{
		document.getElementById("C_CLIENT_STATE").value = "";
	}
}
if(document.getElementById("A_COUNTRY")){
	document.getElementById("A_COUNTRY").disabled = false;
}
CheckVisibility();
if(  document.getElementById("REQUESTCODE").value == "BASCUSTIADDRq" )
{
	for(i=0;i<document.forms[0].elements.length;i++)
		if( document.forms[0].elements[i].type == "text" && document.forms[0].elements[i].name != "C_CUSTOMER_RECORD_NUMBER" && document.forms[0].elements[i].name != "C_STATUS_IND" && document.forms[0].elements[i].name != "C_EFT_TRANSITROUTING_NUMBER" && document.forms[0].elements[i].name != "C_EFT_TR_CHECK_DIGIT") 
		document.forms[0].elements[i].value = "";
	document.getElementById("C_CLIENT_FEDERAL_TAX_ID").focus();	
}
if(  document.getElementById("REQUESTCODE").value == "BASCUSTICHGRq" )
{
	document.getElementById("C_CLIENT_FEDERAL_TAX_ID").focus();	
}
return;
}
function doClmAdjusterStatusCodeSearch() {
var whereclause = "";
var url = "../servlet/POINTGridManager?REQUESTCODE=ClmVendorStatusCodeGrid&PAGENO=1&FIRSTTIME=Y&FileName=TBCL016";
window.open(url,"POINTAdjusterStatusGrid","height=400,width=500,left=220,top=180,menubar=no,toolbar=no,resizable=yes,scrollbars=yes,status=yes");
}
function doClmTaxIdCodeSearch() {
var whereclause = "";
var url = "../servlet/POINTGridManager?REQUESTCODE=ClmTaxIdCodeGrid&PAGENO=1&FIRSTTIME=Y&FileName=PMSLTX01";
window.open(url,"POINTTaxidCodeGrid","height=400,width=500,left=220,top=180,menubar=no,toolbar=no,resizable=yes,scrollbars=yes,status=yes");
}

function doClmClientInquiry()
{
// BAS1031008A0 renamed the panel everywhere var targetKey = 'jsp/POINT_CLIENT_INFO.jsp';
  var targetKey = 'jsp/CltClientInformation.jsp';	
  var clientseq = document.getElementById("CLMT_CLIENTSEQ_NUM").value;
  var addseq = document.getElementById("CLMT_ADDRSEQ_NUM").value;
  var HostKey = 'KEY_CLIENT_SEQUENCE_NUMBER='+clientseq+'&KEY_ADDRESS_SEQUENCE_NUMBER='+addseq;
  if( clientseq==0 || addseq==0)
	alert("Please select a claimant.");
  else
  {
	var reqcode = 'BASNAMEAINQRq';
	document.getElementById('TEMPHASHDATA').value='D';
	var url='../servlet/POINTManager?TEMPHASHDATA=C&REQUESTCODE='+reqcode+'&target='+targetKey+'&'+HostKey+'&KEY='+clientseq+addseq;
	window.open(url,"ClientDetails","resizable=yes,scrollbars=yes,status=yes");
  }	
}
//MA - BAS1030606A0 - Claim Activity
function doRedirectClaimActivity()
{
	var parm = 'CLAIM=\'' + document.forms[0].fullkey.value.substring(4,16) + '\'';
	window.location = '../servlet/POINTGridManager?REQUESTCODE=ClmClaimActivityGrid&WHERECLAUSE=' + escape(parm) + '&KEY="' + document.forms[0].fullkey.value;
}
//ARM - ALR Audits Enhancement
function rtCovgScrn()
{
var url = '../jsp/ALRAddCovg.jsp?LOC=' + document.forms[0].COVERAGE_KEY_LOCATION_COMPANY.value + '&MCO=' + document.forms[0].COVERAGE_KEY_MASTER_COMPANY.value + '&Polno=' + document.forms[0].COVERAGE_KEY_POLICY_NUMBER[0].value + '&module=' + document.forms[0].COVERAGE_KEY_MODULE[0].value + '&pco=' + document.forms[0].BC_POLICY_COMPANY.value + '&lob=' +document.forms[0].BC_LINE_OF_BUSINESS.value  + '&Sym=' + document.forms[0].COVERAGE_KEY_SYMBOL[0].value+ '&Product=' + document.forms[0].COVERAGE_KEY_PRODUCT[0].value + '&State=' +document.forms[0].BC_STATE.value + '&ins=' +document.forms[0].COVERAGE_KEY_INSURANCE_LINE[0].value +'&location='+document.forms[0].COVERAGE_KEY_RISK_LOCATION_NUMBER[0].value + '&subloc=' + document.forms[0].COVERAGE_KEY_RISK_SUBLOCATION_NUMBER.value + '&unit=' + document.forms[0].COVERAGE_KEY_UNIT_NUMBER.value + '&KEY="' +  document.forms[0].fullkey.value + ' "&btnCall=1';
location.href=url;
}
function rtAudCovgScrn()
{
var mylocation = '../jsp/ALRAcovgGrid.jsp?LOC=' + document.forms[0].COVERAGE_KEY_LOCATION_COMPANY.value + '&MCO=' +document.forms[0].COVERAGE_KEY_MASTER_COMPANY.value + '&Sym=' +document.forms[0].COVERAGE_KEY_SYMBOL[0].value + '&Polno='+document.forms[0].COVERAGE_KEY_POLICY_NUMBER[0].value+ '&module=' + document.forms[0].COVERAGE_KEY_MODULE[0].value + '&AuditKind=Final&lob=' +  document.forms[0].BC_LINE_OF_BUSINESS.value + '&pco=' +  document.forms[0].BC_POLICY_COMPANY.value + '&KEY="' +  document.forms[0].fullkey.value+ ' "&btnCall=1';
location.href=mylocation;
}	
//SNS start for indemnity
function doClmBenefitType(){
var lob = document.getElementById("BC_LINE_OF_BUSINESS").value;
while ( lob.length < 3) lob+= " ";
var state = document.getElementById("BC_STATE").value;
while ( state.length < 2) state+=" ";
var url = "../servlet/POINTGridManager?REQUESTCODE=ClmInjyCodeGrid&KEY="+lob+state;
window.open(url,"POINTGrid","height=400,width=500,left=220,top=180,menubar=no,toolbar=no,resizable=yes,scrollbars=yes,status=yes");
return;
}
//SNS end for indemnity
// BAS1031024A1 Start
function doClmClassCodeSearch()
{
	var keyVal = document.forms[0].KEY_LOCATION.value + document.forms[0].KEY_MASTER_COMPANY.value + document.forms[0].KEY_SYMBOL.value + document.forms[0].KEY_POLICY_NUMBER.value + document.forms[0].KEY_MODULE.value + document.forms[0].BC_STATE.value + document.forms[0].CLMT_WCADDL_CLASS_CODE.value;
	for (var i = document.forms[0].CLMT_WCADDL_CLASS_CODE.value.length;i < 6;i++)
		keyVal += " ";
	if (keyVal.length < 24)
	{
		alert ("The required information to search for Class Codes is not available on the panel.");
		return;
	}
	var url = '../jsp/ClmClassCodeSearchFrame.jsp?REQUESTCODE=ClmClassCodeSearchGrid&KEY=\"' + keyVal + '\"&FirstTime=Y';
	window.open(url,"POINTGrid","height=400,width=500,left=220,top=180,menubar=no,toolbar=no,resizable=yes,scrollbars=yes,status=yes");
}
function doClmAddlInfoNavigation(nxtPanelText)
{
	set_busy_icon();
	window.location = "../jsp/ClmAddtlClaimInsuredInfo" + nxtPanelText + ".jsp";
}
function doShowPrepaid()
{
if((document.getElementById("BC_SPECIAL_USE_C").value.substring(0,2) == "ND"))
      {
       document.getElementById("BC_SPECIAL_USE_C_PREPAID").style.visibility = "visible";
       document.getElementById("BC_SPECIAL_USE_C_PREPAID").value = "*PREPAID";
      }
      // ***UNI357*** Begin"Code Added for Display Do not Print for DP ."
      
       if((document.getElementById("BC_SPECIAL_USE_C").value.substring(0,2) == "DP"))
	  {
	   document.getElementById("BC_SPECIAL_USE_C_PREPAID").style.visibility = "visible";
	   document.getElementById("BC_SPECIAL_USE_C_PREPAID").value = "* Do Not Print";
      }
      
	//***UNI357*** End.      
else
      {
       document.getElementById("BC_SPECIAL_USE_C_PREPAID").style.visibility = "hidden";
       document.getElementById("BC_SPECIAL_USE_C_PREPAID").value = "";
      }
}
//***AFI1030822A0*** End.

//***AFI1030902A0*** Begin"Code Added for Integration on PMSP1200A in AFI System."
function doCatFEINID() 
{
//UNI4028 Start 
//*************** FSIt : 182800  PCR - Enhanced MCS-90   STARTS ***************
	       var AddCode = document.getElementById("ADDLINT_KEY_USE_CODE").value;  
//*************** FSIt : 182800  PCR - Enhanced MCS-90   Ends ***************
//*************** FSIT - 190519 - ---193017---Starts***************
/*
if (document.getElementById("ADDLINT_FEIN_NUMBER").value == "")
{
	document.getElementById("ADDLINT_FEIN_NUMBER").value = "000000000";
	
}
*/
//*************** FSIT - 190519 - ---193017---Ends***************
//UNI4028 End 
	   
//*************** FSIt : 182800  PCR - Enhanced MCS-90   STARTS ***************
if(AddCode == 'MC')
	{
		//*************** FSIT - 190519 - ---193017---Starts***************
		var strTmp = "";
		strTmp=trim(document.getElementById("ADDLINT_FEIN_NUMBER").value);
		if(strTmp.length==0 || strTmp.length=='undefined' || strTmp == "")
		{
			strTmp='0';
		}
			while(strTmp.length < 15)
			{
				strTmp = strTmp + ' ';
			}
			document.getElementById("ADDLINT_DESCRIPTION_LINE_5").value = strTmp + document.getElementById("ADDLINT_ID_NUM").value;
		
		//document.getElementById("ADDLINT_DESCRIPTION_LINE_5").value = document.getElementById("ADDLINT_FEIN_NUMBER").value + document.getElementById("ADDLINT_ID_NUM").value;	
		//*************** FSIT - 190519 - ---193017---Ends***************
	}
else
	{
	   // *************** FSIt : 196838  fein positions issue  Starts ***************
	var strTmp = "";
		strTmp=trim(document.getElementById("ADDLINT_FEIN_NUMBER").value);
		if(strTmp.length==0 || strTmp.length=='undefined' || strTmp == "")
		{
			strTmp='0';
		}
			while(strTmp.length < 9)
			{
				strTmp = strTmp + ' ';
			}

	   // *************** FSIt : 196838  fein positions issue  ends ***************
	   //*************** FSIt : 182800  PCR - Enhanced MCS-90   Ends ***************
	   // *************** FSIt : 196838  fein positions issue  Starts ***************
		//document.getElementById("ADDLINT_DESCRIPTION_LINE_5").value = "FEIN=" + document.getElementById("ADDLINT_FEIN_NUMBER").value + " ID=" + document.getElementById("ADDLINT_ID_NUM").value;
		document.getElementById("ADDLINT_DESCRIPTION_LINE_5").value = "FEIN=" +strTmp  + " ID=" + document.getElementById("ADDLINT_ID_NUM").value;
	// *************** FSIt : 196838  fein positions issue  ends ***************
	   //*************** FSIt : 182800  PCR - Enhanced MCS-90   STARTS ***************
	}
	   //*************** FSIt : 182800  PCR - Enhanced MCS-90   Ends ***************
}
function doBreakFEINID() 
{
	  //*************** FSIt : 182800  PCR - Enhanced MCS-90   STARTS ***************
	  var AddCode = document.getElementById("ADDLINT_KEY_USE_CODE").value;  
		if((AddCode == 'MC') )
		{
			document.getElementById("ADDLINT_FEIN_NUMBER").value = document.getElementById("ADDLINT_DESCRIPTION_LINE_5").value.substring(0,15);
			//*************** FSIT - 190519 - Starts ---193017---***************
			if(document.getElementById("ADDLINT_FEIN_NUMBER").value==0)
				document.getElementById("ADDLINT_FEIN_NUMBER").value = "";
			if(document.getElementById("ADDLINT_FEIN_NUMBER")!=null){
				document.getElementById("ADDLINT_FEIN_NUMBER").value=trim(document.getElementById("ADDLINT_FEIN_NUMBER").value);
			}

			//*************** FSIT - 190519 ----193017--- Ends***************
			document.getElementById("ADDLINT_ID_NUM").value = document.getElementById("ADDLINT_DESCRIPTION_LINE_5").value.substring(15,30);
			//*************** FSIT - 190519 - Starts ---193017---***************
			if(document.getElementById("ADDLINT_ID_NUM")!=null){
				document.getElementById("ADDLINT_ID_NUM").value=trim(document.getElementById("ADDLINT_ID_NUM").value);
			}
			//*************** FSIT - 190519 ----193017--- Ends***************
		}
		else
		{
			 //*************** FSIt : 182800  PCR - Enhanced MCS-90   Ends ***************
			document.getElementById("ADDLINT_FEIN_NUMBER").value = document.getElementById("ADDLINT_DESCRIPTION_LINE_5").value.substring(5,14);
	        // *************** FSIt : 196838  fein positions issue  Starts ***************
				if(document.getElementById("ADDLINT_FEIN_NUMBER").value==0)
					document.getElementById("ADDLINT_FEIN_NUMBER").value = "";
				if(document.getElementById("ADDLINT_FEIN_NUMBER")!=null)
				{
					document.getElementById("ADDLINT_FEIN_NUMBER").value=trim(document.getElementById("ADDLINT_FEIN_NUMBER").value);
				}
		   // *************** FSIt : 196838  fein positions issue  ends ***************
			document.getElementById("ADDLINT_ID_NUM").value = document.getElementById("ADDLINT_DESCRIPTION_LINE_5").value.substring(18,30);
			 //*************** FSIt : 182800  PCR - Enhanced MCS-90   STARTS ***************
		}
			//*************** FSIt : 182800  PCR - Enhanced MCS-90   Ends ***************
}
//***AFI1030902A0*** End.

//***AFI1030818A18*** Begin "Code Added for PIC/POCS mod to concat Emod Conf & Risk ID"
function doCatEscNo()
{
// UNIEMOD Start.
if(document.getElementById("STATE_EMOD_CONF").value == "")
	var eMod = " ";
else
	var eMod = document.getElementById("STATE_EMOD_CONF").value;
document.getElementById("STATE_EMP_SECURITY_COMM").value = "E" + eMod + "R"+ document.getElementById("STATE_RISKID").value;
//document.getElementById("STATE_EMP_SECURITY_COMM").value = document.getElementById("STATE_EMOD_CONF").value+document.getElementById("STATE_RISKID").value;
// UNIEMOD End.
}

function doClmIndemnityRates(){
UnFormatFields();
document.forms[0].TMPREQUESTCODE.value=document.forms[0].REQUESTCODE.value;
document.forms[0].REQUESTCODE.value="BASINDMSCALRq";
document.forms[0].Refresh.value="No";
document.forms[0].PROC_SPEC_USE1.value="YY";
document.forms[0].submit();
}
function doClmSetProc1(){
//Res #39329 starts
if(document.forms[0].REQUESTCODE.value.indexOf("INQ")>0)
{
var resvnum = document.forms[0].KEY_RESERVE_CATEGORY.value;
var resvsubnum=document.forms[0].KEY_RESERVE_SUB_NUMBER.value;
url ="../servlet/POINTManager?REQUESTCODE=BASINDMPINQRq&KEY='"+document.forms[0].fullkey.value+"'&target=jsp/ClmIndemnityCheckEntry.jsp&KEY_RESERVE_CATEGORY="+resvnum+"&KEY_RESERVE_SUB_NUMBER="+resvsubnum;
window.location = url;
return;
}else{
//Res #39329 ends
if(ValidatePage()){
document.forms[0].PROC_SPEC_USE1.value="NN";
	document.forms[0].tmptarget.value = "jsp/ClmIndemnityCheckEntry.jsp";
	document.forms[0].submit();
}
}
return;
}
function doClmSetProc2(){
//Res #39329 starts
if(document.forms[0].REQUESTCODE.value.indexOf("INQ")>0)
{
var resvnum = document.forms[0].KEY_RESERVE_CATEGORY.value;
var resvsubnum=document.forms[0].KEY_RESERVE_SUB_NUMBER.value;
url ="../servlet/POINTManager?REQUESTCODE=BASINDMPINQRq&KEY='"+document.forms[0].fullkey.value+"'&target=jsp/ClmIndemnityCheckEntry.jsp&KEY_RESERVE_CATEGORY="+resvnum+"&KEY_RESERVE_SUB_NUMBER="+resvsubnum;
window.location = url;
return;
}else{
//Res #39329 ends
if(ValidatePage()){
	document.forms[0].PROC_SPEC_USE1.value="NN";
	document.forms[0].PROC_SPEC_USE2.value="YY";
	document.forms[0].tmptarget.value = "jsp/ClmIndemnityCheckEntry.jsp";
	document.forms[0].submit();
}}
return;
}
// BAS1031024A1 End


//BAS1031215A1
function doClmAdjusterRedirect() {
	reqcode = "ClmAdjusterSelectionGrid";
// BAS1040513A7 Start
	var whereclause = " ADNMADJNUM >= ' ' ORDER BY ADNMADJNUM";
//	var url = "../servlet/POINTGridManager?REQUESTCODE=" + reqcode + "&PAGENO=1&FIRSTTIME=Y&FileName=" + document.forms[0].BC_AGENT_NAME.value;
//[PS]-Adjustor Search Grid has been modified - Start	
	//var url = "../servlet/POINTGridManager?REQUESTCODE=" + reqcode + "&PAGENO=1&FIRSTTIME=Y&FileName=" + document.forms[0].BC_AGENT_NAME.value + "&WHERECLAUSE=" + whereclause;
	whereclause += " FETCH FIRST 100 ROWS ONLY";
	var url = "../jsp/AdjustorSearch.jsp?PAGENO=1&FIRSTTIME=Y&FileName=" + document.forms[0].BC_AGENT_NAME.value + "&WHERECLAUSE="+whereclause;
//[PS]-Adjustor Search Grid has been modified - End	
// BAS1040513A7 End
//[PS]-Adjustor Search Grid has been modified - Start	
//window.location = url;
window.open(url,"POINTGrid","height=400,width=500,left=220,top=180,menubar=no,toolbar=no,resizable=yes,scrollbars=yes,status=yes");
//[PS]-Adjustor Search Grid has been modified - End	
}
//BAS1031215A1-END
//HDK function for Reinsurance
function doBreakEsoNo()
{
// UNIEMOD Start.
//document.getElementById("STATE_RISKID").value = document.getElementById("STATE_EMP_SECURITY_COMM").value.substring(1,10);
//document.getElementById("STATE_EMOD_CONF").value = document.getElementById("STATE_EMP_SECURITY_COMM").value.substring(0,1);
document.getElementById("STATE_RISKID").value = document.getElementById("STATE_EMP_SECURITY_COMM").value.substring(3,14);
document.getElementById("STATE_EMOD_CONF").value = document.getElementById("STATE_EMP_SECURITY_COMM").value.substring(1,2);
// UNIEMOD End.
}
////***AFI1030818A18*** End.

//***AFI1040415A0*** Begin "When user enters data and press enter we are adding 80-lenth black spaces Code Added for Policy Change Form to retain data in the order entered by user"
//NSV - For AFI Start
function spoolSearch_onload() {
	searchForm.reset();	
}
//NSV - For AFI End
//*** UNI136 *** Begin
function doVerifyFieldChange(aField, aStore, aDesc, aButton)
{
	////*** UNI234 *** Added for Copy Quote functionality - Begin
	if (document.forms[0].REQUESTCODE.value == 'QUTPROCSCNBRq' || document.forms[0].REQUESTCODE.value == 'QUTPROCSCRBRq' || document.forms[0].REQUESTCODE.value == 'QUTPROCSCPYRq')
		return;
	////*** UNI234 *** Added for Copy Quote functionality - End
	if (isBlank(document.getElementById(aStore).value) || isBlank(aField.value))
		return;
	if (document.getElementById(aStore).value == aField.value)
		return;
	document.getElementById(aDesc).value = '';
	document.getElementById("ID_" + aButton).style.display = "inline";
}

function doRefreshDesc(aField, aField2)
{
	document.getElementById("PROC_LDA_SYSTEM_DATE_OVERRIDE").value = top.First.frameBottomRight.location;
	var url = "../jsp/PolRetrieveDesc.jsp?Field=" + aField + "&FieldValue=" + document.getElementById(aField).value;
	if (aField2.length > 0)
	{
		var field2 = document.getElementById(aField2);
		if (!isBlank(field2.value))
			url += "&FieldValue2=" + field2.value;
		else
		{
			alert ("Key field required to retrieve description is missing.");
			return;
		}
	}
	set_busy_icon();
	top.First.frameBottomRight.location = url;
}
//*** UNI136 *** End

function ReinsRsvTablefocus()
{
	if (parent.frames.length > 1)
	{
		if(parent.frames[2].ReservePayments != null && parent.frames[2].ReservePayments.rows[0].cells[0].firstChild != null)
		{
			parent.frames[2].ReservePayments.rows[0].cells[0].firstChild.focus();
			parent.frames[2].ReservePayments.rows[0].cells[0].firstChild.select();
		}
	}
}

function doContractSearchReins() {
var url = "../servlet/POINTGridManager?REQUESTCODE=ClmReinsContractSearchGrid&WHERECLAUSE=";
window.open(url,"POINTGrid","height=300,width=550,left=220,top=180,menubar=no,toolbar=no,resizable=yes,scrollbars=yes,status=yes");
}
//HDK end

//HDK for additional interest
function AddInterestListNAOn() {
var AddCode=document.getElementById('ADDLINT_KEY_USE_CODE').value;
var MCO=document.getElementById('ADDLINT_KEY_MASTER_COMPANY').value;
//BAS1041109A0 - Start
// BAS1040617A2 - Start
var whereclause = " USECD1KEY >= '" + AddCode + "'";
//  var whereclause = " USECD1KEY = '" + AddCode + "'";
// BAS1040617A2 - End
//BAS1041109A0 - End
var url = "../servlet/POINTGridManager?REQUESTCODE=PolAdditionalInterestGrid&WHERECLAUSE=" + whereclause + "&PAGENO=1&FIRSTTIME=Y&FileName=TBRECU1&MCO="+MCO;
window.open(url,"POINTGrid","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,status=yes");
}

function AddInterestListNAOff() {
var AddCode=document.getElementById('ADDLINT_KEY_USE_CODE').value;
var MCO=document.getElementById('ADDLINT_KEY_MASTER_COMPANY').value;
//BAS1041109A0 - Start
// BAS1040617A2 - Start
 var whereclause = " USECD1KEY >= '" + AddCode + "'";
//  var whereclause = " USECD1KEY = '" + AddCode + "'";
// BAS1040617A2 - End
//BAS1041109A0 - End
var url = "../servlet/POINTGridManager?REQUESTCODE=PolNAOffAdditionalInterestGrid&WHERECLAUSE=" + whereclause + "&PAGENO=1&FIRSTTIME=Y&FileName=TBRECU1&MCO="+MCO;
window.open(url,"POINTGrid","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,status=yes");
}

function AddInt_onload() {
 var NAindic ;
 if(document.getElementById("PROC_LDA_ISSUE_CODE"))
    NAindic = document.getElementById("PROC_LDA_ISSUE_CODE").value;
 else
    NAindic = "Y";
 if(NAindic == "")
    NAindic = "N";
 var Auxswitch = "";
 if(document.getElementById("PROC_LDA_RECORD_IND"))
    Auxswitch = document.getElementById("PROC_LDA_RECORD_IND").value;
 var intType = document.getElementById("ADDLINT_KEY_USE_CODE").value 
 var check = document.getElementById("PROC_LDA_RENEWAL_MODULE").value;
 var state = document.getElementById("ADDLINT_STATE");
 if(state)
 {
// BAS1040423A2 Start 	
  if((document.forms[0].REQUESTCODE.value.substr(0,11) == "CPPADDINCHG" && NAindic == "N" && Auxswitch != "Y") || (document.forms[0].REQUESTCODE.value.substr(0,11) == "CPPADDINCHG" && document.forms[0].PROC_LDA_SET_TYPE_NUMBER.value != '8'))
		state.disabled = false;
// BAS1040423A2 End
  else
  {
   if(((state.value != "" || intType == "CR") && check == "YY")||(document.forms[0].REQUESTCODE.value.substr(0,11) == "CPPADDINCHG"))
	state.disabled = true;
  }
 }
}

function doSubmitAddInt() {
	if(document.getElementById("ADDLINT_STATE"))
		document.getElementById("ADDLINT_STATE").disabled = false;
//HDK - BAS1040317A0		
	if (!ValidatePage()) 
	     return false;
	document.forms[0].submit();
//HDK - end	
}
//HDK end
//BAS1040813A2 Start
function doChgMask()
{
 var tmpmask;
 if(document.forms[0].A_INDIVIDUAL_SSN)
 {
  if(document.forms[0].A_NAME_TYPE.value == "I")    
     tmpmask = "###-##-####";
  else    
     tmpmask = "##-#######";
  document.forms[0].A_INDIVIDUAL_SSN.mask = tmpmask;
 }
}
//BAS1040813A2 End

//SSN-FEIN FORMAT CHANGE
function ssn_fein(){
var tmpmask;
//BAS1040813A2 Start
if(document.forms[0].A_INDIVIDUAL_SSN)
{
//BAS1040813A2 End
var maskval = document.forms[0].A_INDIVIDUAL_SSN.mask;

  if (document.forms[0].A_NAME_TYPE.value == "I")    
     tmpmask = "###-##-####";
  else    
     tmpmask = "##-#######";

var del=MaskDelimiter(maskval);
document.forms[0].A_INDIVIDUAL_SSN.value=document.forms[0].A_INDIVIDUAL_SSN.value.split(del).join('');
document.forms[0].A_INDIVIDUAL_SSN.value=putmask(document.forms[0].A_INDIVIDUAL_SSN.value,tmpmask);    
document.forms[0].A_INDIVIDUAL_SSN.mask = tmpmask;
//BAS1040813A2 Start
}
//BAS1040813A2 End
}
function doClmIndmTarget(){
if(ValidatePage()){
//Res #39329 starts
	//if(document.forms[0].REQUESTCODE.value == "BASINDMPADDRq" || document.forms[0].REQUESTCODE.value == "BASINDMPCHGRq" || document.forms[0].REQUESTCODE.value == "BASCPCHKADDRq")

	if(document.forms[0].REQUESTCODE.value == "BASINDMPADDRq" )
		document.forms[0].tmptarget.value = "jsp/BasSuperGridRedirector.jsp"
if(document.forms[0].REQUESTCODE.value == "BASINDMPCHGRq")
document.forms[0].tmptarget.value = "HTML/BlankPanelClose.html"
if(document.forms[0].REQUESTCODE.value == "BASCPCHKADDRq")
{
document.forms[0].tmptarget.value = "HTML/BlankPanelTreeRefresh.html"
	//Resolution# 39959 Start
document.forms[0].PROC_SPEC_USE3.value = "C";
	//Resolution# 39959 ends
}

	//Resolution# 39959 Start
	if(document.forms[0].REQUESTCODE.value == "BASDRAFTCHGRq")
		document.forms[0].PROC_SPEC_USE3.value = "Y";
	//Resolution# 39959 ends
//Res #39329 ends

//RV - PCR128 -WAG2459 - Add Taxable field on Claim Check Entry screen - Start
// wag3412 start
//WAG3480 Start
//if(document.forms[0].REQUESTCODE.value.substr(0,8) == "BASDRAFT")
if(document.forms[0].REQUESTCODE.value.substr(0,8) == "BASDRAFT" || document.forms[0].REQUESTCODE.value == "BASCPCHKADDRq")
{
//WAG3480 End
// wag3412 end
var taxable = document.getElementById("INDM_TAXABLE").value;
document.getElementById("INDM_TAXABLE").value = "";
var note2 = document.getElementById("DRFT_NOTE2").value;
var note2len = note2.length;
var i;
var spc = "";
if (note2len == 0)
{
	note2 = '*';
}

var note2len1 = note2.length;
if (note2len < 71)
{
	for (i=1; i<(72 - note2len1); i++)
	{
		spc = spc + " ";
	}
	note2 = note2 + spc;
}

document.getElementById("DRFT_NOTE2").value = note2 + taxable;
// wag3412 start
}
// wag 3412 end
//RV - PCR128 -WAG2459 - Add Taxable field on Claim Check Entry screen - End

//FSIT: 48313 RESL: 40093 -Start         +-   
          var node = document.getElementsByTagName('DIV');    
         for (var i = 0; i< document.getElementsByTagName('DIV').length; i++)    
          {    
                 if (node[i].id == "ID_SUBMIT_BUTTON")    
                  {    
                         node[i].firstChild.disabled = true;    
                 }           
          }    
 //FSIT: 48313 RESL: 40093 -End   

document.forms[0].submit();
}
return;
}
//Res #39329 starts
//function doClmIndmContinue(){
//var resvnum = document.forms[0].KEY_RESERVE_CATEGORY.value;
//url ="../servlet/POINTManager?REQUESTCODE=BASINDMPINQRq&KEY='"+document.forms[0].fullkey.value+"'&target=jsp/ClmIndemnityCheckEntry.jsp&KEY_RESERVE_CATEGORY="+resvnum;
//window.location = url;
//return;
//}
//Res #39329 ends
function doClmBenefitInjury(){
var polcovseq = document.getElementById("KEY_POLICY_COV_SEQ").value;
while ( polcovseq.length < 4 ) polcovseq = "0" + polcovseq;
var resvno = document.getElementById("KEY_RESERVE_CATEGORY").value;
while ( resvno.length < 2 ) resvno = "0" + resvno;
var lob = document.getElementById("BC_LINE_OF_BUSINESS").value ;
while ( lob.length < 3 ) lob+= " ";
// FSIT 49658 Resolution 39811 - Begin - Added the missing parameter BC_STATE to the key value. Also adding the code to move blanks for claim number shorter than 12.
//var key = document.getElementById("KEY_LOCATION").value + document.getElementById("KEY_MASTER_COMPANY").value + document.getElementById("KEY_SYMBOL").value + document.getElementById("KEY_POLICY_NUMBER").value + document.getElementById("KEY_MODULE").value + polcovseq + resvno + document.getElementById("KEY_CLAIM_NUMBER").value + document.getElementById("KEY_CLAIMANT_SEQ").value + lob + document.getElementById("INDM_INJY_CODE").value;
  var key = document.getElementById("KEY_LOCATION").value + document.getElementById("KEY_MASTER_COMPANY").value + document.getElementById("KEY_SYMBOL").value + document.getElementById("KEY_POLICY_NUMBER").value + document.getElementById("KEY_MODULE").value + polcovseq + resvno + document.getElementById("KEY_CLAIM_NUMBER").value; 
  for (var len = document.getElementById("KEY_CLAIM_NUMBER").value.length; len < 12; len++)
	key += " ";
key += document.getElementById("KEY_CLAIMANT_SEQ").value + lob + document.getElementById("BC_STATE").value + document.getElementById("INDM_INJY_CODE").value;
// FSIT 49658 Resl 39811 - End
var url = "../servlet/POINTGridManager?REQUESTCODE=ClmIndemnityBenefitGrid&KEY="+key;
window.open(url,"POINTGrid","height=400,width=500,left=220,top=180,menubar=no,toolbar=no,resizable=yes,scrollbars=yes,status=yes");
}
// BAS1030820A5 Start
function doFormatClaimantFields()
{
	UnFormatFields();
	document.getElementById('CLMT_PHONE').value = putmask(document.getElementById('CLMT_PHONE').value,document.getElementById('CLMT_PHONE').mask);
	document.getElementById('CLMT_SSN').value = putmask(document.getElementById('CLMT_SSN').value,document.getElementById('CLMT_SSN').mask);
	if (document.forms[0].CLMT_CLIENT_TYPE.value == 'I')
	{
		document.forms[0].CLMT_CONTACT.value = "";
//WAG3576 - Start		
	//	if (document.forms[0].CLMT_LAST_NAME.value.length == 0)
	//		document.forms[0].CLMT_LAST_NAME.value = document.forms[0].CLMT_BUSINESS_NAME.value;
	//	document.forms[0].CLMT_BUSINESS_NAME.value = "";
//WAG3576 - End	
		document.forms[0].CLMT_FIRST_NAME.focus();
	}
	else
	{
//WAG3576 - Start	
	//   	document.forms[0].CLMT_FIRST_NAME.value = "";
	//   	document.forms[0].CLMT_MIDDLE_NAME.value = "";
	//   	document.forms[0].CLMT_SIR_NAME.value = "";
//WAG3576 - End
		document.forms[0].CLMT_SEX.value = "";
		document.forms[0].CLMT_AGE.value = "";
		document.forms[0].CLMT_SSN.value = "";
		if (document.forms[0].CLMT_BUSINESS_NAME.value.length == 0)
//WAG3576 - Start
//			document.forms[0].CLMT_BUSINESS_NAME.value = document.forms[0].CLMT_LAST_NAME.value ;
			document.forms[0].CLMT_BUSINESS_NAME.value = document.forms[0].CLMT_FIRST_NAME.value +" " + document.forms[0].CLMT_MIDDLE_NAME.value + " " + document.forms[0].CLMT_LAST_NAME.value;
//WAG3576 - End			
//		document.forms[0].CLMT_LAST_NAME.value = "";
		document.forms[0].CLMT_BUSINESS_NAME.focus();
	}
}
// BAS1030820A5 End
//  BAS1020828A5 -  Large CPP - Start

function switchtreespmode()
{
mystr = new String(parent.Policy.location);
// Large CPP Changes- Start
if ((document.forms[0].PROC_MESSAGE != null) && (document.forms[0].PROC_MESSAGE.value == ''))
{
	return;
}
// Large CPP Changes - End
if (document.forms[0].REQUESTCODE.value == 'CPPUNITSADMRq' || document.forms[0].REQUESTCODE.value == 'CPPUNITSADDRq')
	{
		if (mystr.indexOf("&SPMODE")!= -1)
 		mystr = mystr.substring(0,mystr.indexOf("&SPMODE"));
		var insline = document.getElementById("UNIT_KEY_INSURANCE_LINE").value;
		var product = document.getElementById("UNIT_KEY_PRODUCT").value;
		//Large CPP Changes - Start
		//var state   = document.getElementById("BC_STATE").value;
		var state   = document.forms[0].fullkey.value.substring(140,142);
		//Large CPP Changes - End
		insline+='   ';
		insline=insline.substring(0,3);
		product+='      ';
		product=product.substring(0,6);
		var key = insline+product+state;
		var numunits ='00001';
		var novaluefound = 'Y';
			switch(document.forms[0].REQUESTCODE.value)
		{
		case "CPPUNITSADDRq" :
		
								numunits = '00001';
								break;
								
		case "CPPUNITSADMRq" :
								if (document.getElementById("UNIT_KEY_RISK_SUBLOCATION_NUMBER").value != '0')
								{
									novaluefound = 'N';
									var zeropad  = '00000';
									numunits =document.getElementById("UNIT_KEY_RISK_SUBLOCATION_NUMBER").value;
									numunits = zeropad.substring(numunits.length)+numunits;
								}		
								break;
		
		}
		
//hht-0112		if (novaluefound == 'N')
//hht-0112		{
			mystr +='&SPMODE=ADD&FileName=ASB5CPP&StaticKey='+key+'&AddRequest=*ADD='+numunits;
			parent.Policy.location=mystr;
			//Value of Refresh is set to "No", to prevent reload() from getting executed during switchTree()
			document.forms[0].Refresh.value = "No";

//hht-0112		}
}
}
//  BAS1020828A5 -  Large CPP - End

//Legal-Logistics
 function doJurisdictionSearch()
 {
 var url = "../servlet/POINTGridManager?REQUESTCODE=ClmJurisdictionSearchGrid"; 
 window.open(url,"POINTGrid","height=400,width=500,left=220,top=180,menubar=no,toolbar=no,resizable=yes,scrollbars=yes,status=yes");
 }
 function doSubmitLegal()
 {
     
  if ((parseFloat(document.forms[0].LL_DEMAND_AMOUNT.value) < 0 ) || (parseFloat(document.forms[0].LL_SETTLEMENT_AMOUNT.value) < 0 ) || (parseFloat(document.forms[0].LL_D1_JUDGEMENT_AMOUNT.value) < 0 ) || (parseFloat(document.forms[0].LL_RETENTION_AMOUNT.value) < 0 ) || (parseFloat(document.forms[0].LL_D2_JUDGEMENT_AMOUNT.value) < 0 ))  
    {alert("Please enter a valid amount");}
  else
  {
    if (ValidatePage())
	document.forms[0].submit();
  }
 }
function doLegalAmountCheck()
 {
  if ((parseFloat(document.forms[0].LL_DEMAND_AMOUNT.value) < 0 ))  
   {
    alert("Please enter a valid value for  Demand Amount.");
    document.forms[0].LL_DEMAND_AMOUNT.focus();
    document.forms[0].LL_DEMAND_AMOUNT.select();
   } 

   if ((parseFloat(document.forms[0].LL_SETTLEMENT_AMOUNT.value) < 0 )) 
   {   
    alert("Please enter a valid value for Settlement Amount.");
    document.forms[0].LL_SETTLEMENT_AMOUNT.focus();
    document.forms[0].LL_SETTLEMENT_AMOUNT.select();
   } 

   if ((parseFloat(document.forms[0].LL_D1_JUDGEMENT_AMOUNT.value) < 0 )) 
   {   
    alert("Please enter a valid value for Judgement Amount for first Defendent.");
    document.forms[0].LL_D1_JUDGEMENT_AMOUNT.focus();
    document.forms[0].LL_D1_JUDGEMENT_AMOUNT.select();
   }

   if ((parseFloat(document.forms[0].LL_RETENTION_AMOUNT.value) < 0 )) 
   {   
    alert("Please enter a valid value for Retension Amount.");
    document.forms[0].LL_RETENTION_AMOUNT.focus(); 
    document.forms[0].LL_RETENTION_AMOUNT.select();
   }
  
   if ((parseFloat(document.forms[0].LL_D2_JUDGEMENT_AMOUNT.value) < 0 )) 
   {   
    alert("Please enter a valid value for Judgement Amount for Second Defendent.");
    document.forms[0].LL_D2_JUDGEMENT_AMOUNT.focus();
    document.forms[0].LL_D2_JUDGEMENT_AMOUNT.select();
   }
}
//Legal-Logistics-End
//AP - Start - BAS1020109A2
//DPS -start - BAS1040414A8
function EditManualPremium()
{
 if (document.getElementById('REQUESTCODE').value.substring(8,11) == 'ADD' || document.getElementById('REQUESTCODE').value.substring(8,11) == 'CHG')
 {
   if (document.getElementById("SA15_TOTALORIG").value.substring(0,1) == "-" )
   {
	var yesno = confirm('Caution: Premium entered as a credit. Please click Ok to continue.');
	if(yesno == false)
           { 
               document.getElementById("SA15_TOTALORIG").focus();
               return 0;
	   }
    }	
	      
    UnFormatFields();
    document.forms[0].submit();
    set_busy_icon();	
  } 
 else
 {
 	if(confirm("Are you sure you want to delete ?"))
	{	
     		UnFormatFields();
     		document.forms[0].submit();
		set_busy_icon();
	}
 }  
}
//AP - End - BAS1020109A2
//DPS -End - BAS1040414A8
function doClmAddlInfoSubmit(specUseInd)
{
	document.forms[0].PROC_SPEC_USE5.value = specUseInd;
	if (ValidatePage())
		document.forms[0].submit();
}
function doClmDisbursementsGrid()
{
	var locmco = document.forms[0].fullkey.value.substring(14,16) + document.forms[0].fullkey.value.substring(12,14);
	var key = locmco + document.forms[0].fullkey.value.substring(16,32) + locmco + document.forms[0].fullkey.value.substring(0,12) + document.forms[0].fullkey.value.substring(32,36);
	var modeURL = top.First.window.location.href;
	var mode = modeURL.substr (modeURL.indexOf('PolAction=') + 10, 2);
	window.location = '../servlet/POINTGridManager?REQUESTCODE=ClmPaymentsGrid&KEY=' + key + mode;
	set_busy_icon();
}

function rcvConfirm()
{
 if(confirm('Confirm?'))
 {
 if(!ValidatePage())
   return false;
 document.forms[0].submit();
 }else
 {
  return false;
 }
}
/* BAS1030718A3 - start CVH */
function setPayPlanCode() {
var payplan = "";
payplan=document.getElementById('BC_PAY_BY_PLAN').getAttribute("VALUE");
document.getElementById('BC_PAY_BY_CODE').value =payplan.substring(0,1);
return; 
}
/* BAS1030718A3 - end CVH */
function doClearFields() {

	document.getElementById("ENDT_IND_INSURED_NAME").checked = false;
	document.getElementById("ENDT_IND_INSURED_MAILING").checked = false;
	document.getElementById("ENDT_IND_INSURED_LEGAL_STATUS").checked = false;
	document.getElementById("ENDT_IND_POLICY_NUMBER").checked = false;
	document.getElementById("ENDT_IND_EFFECTIVE_DTEVAL").checked = false;
	document.getElementById("ENDT_IND_EXPIRATION_DTEVAL").checked = false;
	document.getElementById("ENDT_IND_INSURED_WORKPLACE").checked = false;
	document.getElementById("ENDT_IND_PRODUCER_NAME").checked = false;
	document.getElementById("ENDT_IND_CARRIER_SRVG_OFFICE").checked = false;
	document.getElementById("ENDT_IND_CARRIER_NUMBER").checked = false;
	document.getElementById("ENDT_IND_INTER_INTRA_NUMBER").checked = false;
	document.getElementById("ENDT_IND_INTERIM_ADJ_PREMIUM").checked = false;
	document.getElementById("ENDT_IND_EXPERIENCE_MOD").checked = false;
	document.getElementById("ENDT_IND_ITEM_3_A_STATES").checked = false;
	document.getElementById("ENDT_IND_ITEM_3_B_LIMITS").checked = false;
	document.getElementById("ENDT_IND_ITEM_3_C_STATES").checked = false;
	document.getElementById("ENDT_IND_ITEM_3_D_ENDT_NUMBER").checked = false;
	document.getElementById("ENDT_IND_ITEM_4_OTHER").checked = false;
	document.getElementById("ENDT_ENDORSEMENT_NUMBER").value = "";
	document.getElementById("ENDT_FREE_FORM_TEXT").value = "";
	document.getElementById("ENDT_ENDORSEMENT_NUMBER").focus();
	document.getElementById("ENDT_ENDORSEMENT_NUMBER").select();
}
function doClmAIACodeSearch(ReqCode)
{
	var whereclause = "CLMTYP='" + document.forms[0].CL_TYPE_OF_CLAIM.value + "'";
	var url = '../servlet/POINTGridManager?REQUESTCODE=' + ReqCode + '&WHERECLAUSE=' + whereclause;
	window.open(url,"POINTGrid","height=400,width=500,left=220,top=180,menubar=no,toolbar=no,resizable=yes,scrollbars=yes,status=yes");
}
function doClmCheckNotePhrase()
{
	var url = '../jsp/ClmCheckNotePhrase.jsp';
	window.open(url,"NotePhrase","height=175,width=800,left=120,top=300,menubar=no,toolbar=no,resizable=no,scrollbars=no,status=yes");
}
// FSIT Issue# 39598 Start
function doClmCheckMemoPhrase()
{
	var url = '../jsp/ClmCheckMemoPhrase.jsp';
	window.open(url,"MemoPhrase","height=175,width=800,left=120,top=300,menubar=no,toolbar=no,resizable=no,scrollbars=no,status=yes");
}
// FSIT Issue# 39598 End
//NR - BAS1040406A5 - Start
function doClaimGenExaminerSearch()
{
var keyVal = document.getElementById("KEY_LOCATION").value + document.getElementById("KEY_MASTER_COMPANY").value;
var url = "../servlet/POINTGridManager?REQUESTCODE=ClmGenExaminerSearchGrid&KEY=" + keyVal;
window.open(url,"POINTGrid","height=400,width=500,left=220,top=180,menubar=no,toolbar=no,resizable=yes,scrollbars=yes,status=yes");
}
//NR - BAS1040406A5 - End

//PK-BAS1040420A2 -Start
function doEnableStatefield()
{    
      if (!ValidatePage()) 
        	return false;
      if(document.forms[0].REQUESTCODE.value.substr(8,3) == 'ADD' || document.forms[0].REQUESTCODE.value.substr(8,3) == 'CHG')

         document.getElementById('ADDLINT_STATE').disabled=false;
      document.forms[0].submit();
      document.getElementById('ADDLINT_STATE').disabled=true;
}
//PK-BAS1040420A2 -END

//AP-BAS1030722A1 - Start - TREE-Class descript s/ display after Submitting
function doretrieve()
{    
if(document.forms[0].REQUESTCODE)
{
  var reqcode = document.forms[0].REQUESTCODE.value;
  document.forms[0].TMPREQUESTCODE.value = document.forms[0].REQUESTCODE.value;
}

var classcode;
if(reqcode.substring(3,8) == 'UNITS')
{ 
  classcode = document.getElementById("GU_CLASS_CODE").value;
} else if(reqcode.substring(3,8) == 'COVER')
 { 
   classcode = document.getElementById("GC_COVER_CLASS_CODE").value;
 } 
classcode = trim(classcode);

if (classcode.length==0)
{
 alert('Please enter a Class Code to retrieve information.');
 if(reqcode.substring(3,8) == 'UNITS')
 { 
   document.getElementById("GU_CLASS_CODE").focus();
 }  else if(reqcode.substring(3,8) == 'COVER')
  { 
    document.getElementById("GC_COVER_CLASS_CODE").focus();
  } 
return;
}

if(reqcode.substring(3,8) == 'UNITS')
{ 
  document.forms[0].REQUESTCODE.value = 'CPPUNTCLINQRq';
} else if(reqcode.substring(3,8) == 'COVER')
 { 
   document.forms[0].REQUESTCODE.value = 'CPPCOVCLINQRq';
 } 
// P00377B Accounting Date fix Start
document.forms[0].action=document.forms[0].action +"?PROC_LDA_ACCTG_DATE=0000000";
// P00377B Accounting Date fix End
// HDK - BAS1040526A5 - Start
UnFormatFields();
// HDK - End
document.forms[0].submit();
}

function trim(arg) {
	var trimvalue = "";
	arglen = arg.length;
	if (arglen < 1) return trimvalue;
		i = 0;
		pos = -1;
		while (i < arglen) {
// P00377a Trim Fix Start
			if (arg.charCodeAt(i) != 32 &&
!isNaN(arg.charCodeAt(i))&&arg.charCodeAt(i) != 160) {
// P00377a Trim Fix End
				pos = i;
				break;
			}
			i++;
		}

		var lastpos = -1;
		i = arglen;
		while (i >= 0) {
// P00377a Trim Fix Start
			if (arg.charCodeAt(i) != 32 &&
!isNaN(arg.charCodeAt(i))&&arg.charCodeAt(i) != 160) {
// P00377a Trim Fix End
				lastpos = i;
				break;
			}
			i--;
		}
		trimvalue = arg.substring(pos,lastpos + 1);
	return trimvalue;
}
//AP-BAS1030722A1 - End - TREE-Class descript s/ display after Submitting
//BAS1040521C6 start
function doPolPAVehicleSubstitute(){
document.forms[0].tmptarget.value = "jsp/PolPASubVehicleUpdateRedirect.jsp";
document.forms[0].submit();
return;
}
//BAS1040521C6 End
//HDK - BAS1040519A0 - Start
var key_code = 0;
function doReset_FocusShift()
{ 
keycode = window.event.keyCode;
   if (keycode == 9) {
       key_code = -1;	
       looptabback();	
   }
}
//HDK - End
// BAS1040623A8 Starts
function check_reason_susp(obj)
{
	var reason_susp = obj.value;
  	if(reason_susp == 'PC')

	{
               document.getElementById("COMMENT_KEY_SUSPENSE_DATE").disabled = true ;
	}
	else
	{
            document.getElementById("COMMENT_KEY_SUSPENSE_DATE").disabled= false ;
	}
}
// BAS1040623A8 Ends//BAS1040414A5 - Start
function Wcv_State_onload()
{
	var stateAbr = document.forms[0].STATE_ABBREVIATION;
	var premDisPerc = document.forms[0].STATE_PREM_DISC_PERCENTAGE_ARD;
	var premDisPerc12 = document.forms[0].STATE_PREM_DISC_PCT_ARD12;
	if(stateAbr)
	{
		if(stateAbr.value.length != 0)
		{
			if(premDisPerc)
				premDisPerc.style.visibility = 'visible';
			if(premDisPerc12)
				premDisPerc12.style.visibility = 'visible';
		}
		else
		{	if(premDisPerc)
				premDisPerc.style.visibility = 'hidden';
			if(premDisPerc12)
				premDisPerc12.style.visibility = 'hidden';
		}
	}
}
//BAS1040414A5 - End
//FSIT 39886 - Start
function check_optional(obj)
{
	set_busy_icon();
	var AddCode = obj.value;
	if(trim(AddCode) == '')
	{
		document.getElementById("ADDLINT_USE_CODE_OPT_HEADING").value = '' ;
		document.getElementById("ADDLINT_KEY_USE_CODE_DESC").value = '' ;
		document.getElementById('ADDLINT_DESCRIPTION_LINE_6').style.display = 'none';
//WAG4547 - Start
		document.getElementById("ADDLINT_DESCRIPTION_LINE_5A").value = '' ;
//WAG4547 - End
		reset_busy_icon();
		return;
	}
	var url = "../jsp/PolAddtlInterestTypeDetails.jsp?AddCode="+AddCode;
	top.First.frameTopLeft.location = url;
}
//FSIT 39886 - End
//FSIT 40126 - Start
function Wcv_Class_onload()
{
document.getElementById("KEY_EMP_CLASS_CODE").readOnly=true;
document.getElementById("KEY_EMP_CLASS_CODE").className='rf';
// FSIT Issue#:39890 Resolution#:39541  - Start 
//document.getElementById("KEY_EMP_CLASS_V_C_INDICATOR").disabled=true;
//document.getElementById("KEY_EMP_CLASS_V_C_INDICATOR").className='rf';
var obj = document.forms[0].KEY_EMP_CLASS_V_C_INDICATOR;
for (var i=0;i<obj.length;i++ )
{
	if (obj[i].type == "radio")
		obj[i].disabled = true ;				 

}
// FSIT Issue#:39890 Resolution#:39541  - End
document.getElementById("KEY_EMP_CLASS_DESCRIPTION_SEQ").readOnly=true;
document.getElementById("KEY_EMP_CLASS_DESCRIPTION_SEQ").className='rf';
document.getElementById("ID_CLASS_CODE_SEARCH").style.display='none';
document.getElementById("EMP_CLASS_PAYROLL_AMOUNT").focus();
}
//FSIT 40126 - End
//NSV - Added for Original Inception Date Start
function Format_dateMMYY(oCtl) {
  var strValue = oCtl.value;
  var strMask = oCtl.mask;
  var strDelimiter = MaskDelimiter(strMask);
  var arrMask = SplitMask(strMask);
  var arrValue = SplitMask(strValue);
  var strChar = '';
  var strDay = '';
  var strMonth = '';
  var strYear = '';
  var strDMY = '';
  var strFieldMask = FieldMaskTemplate(strMask) ;
  var iDay, iMonth, iYear;
  var resetYeartoZero;
  if(strValue ==' ' || arrValue.length <2) {
	oCtl.value = "";
  } else {
     for (var i=0; i < arrMask.length; i++) {
       for (var j=0; j < arrMask[i].length; j++) {
         strDMY = arrMask[i].charAt(0).toLowerCase();
         strChar = arrValue[i].charAt(j);
         if (strChar == strDelimiter) {
           break;
         }
         switch(strDMY) {
           case 'd':
             strDay += strChar;
             break;
           case 'm':
             strMonth += strChar;
             break;
           case 'y':
             strYear += strChar;
         }
       } /* end of inner for */
     } /* end of outer for */
     if(strYear.length == 2 && strYear == '00') {
     	resetYeartoZero = true;
     }
     else {
     	resetYeartoZero = false;
     }
     iYear  =  PParseInt(strYear);
     if(resetYeartoZero) {
     	iYear = 0;
     }
     iMonth =  PParseInt(strMonth);
     iDay   =  PParseInt(strDay);
     /* default century */
     if (strYear.length < 4 && strMask.toLowerCase().indexOf('yyyy') != -1) {
     // BAS1030402A8 - HHT - 04032003    iYear = iYear + 2000;
	//oCtl.value = "";
	alert("Please enter four digit year for the date.");
	oCtl.focus();
	return false;
     }
     iDay = '01';
     if(ValidMonthDayYear(iMonth, iDay, iYear)) {
       oCtl.value = FormattedDate(strMask, iMonth, iDay, iYear) ;
     } else {
	oCtl.value = "";
     }
  } /* end of first else else */
}

// FSIT Issue# 39943 Start
function doClearClaimVendor()
{
	document.getElementById("KEY_ADJUSTOR_NUMBER").value = '';
	document.getElementById("GEN_ADJUSTOR_NAME").value = '';
	document.getElementById("KEY_TAX_ID").value = '';
	var payee = document.getElementById("DRFT_MAILTOCODE");
	for (var i = 1;i <= 4;i++)
	{
		switch (payee.value.substring(0,1))
		{
			case 'B':
			case 'F':
			case 'H':
			case 'O': 	payee.value = '';
						payee.fireEvent("onblur");
		}
		if (i == 1 || i == 2)
		{
			for (var j = 0;j < payee.options.length;j++)
			{
				switch (payee.options[j].value.substring(0,1))
				{
					case 'B':
					case 'F':
					case 'H':
					case 'O': 	payee.options[j].value = payee.options[j].value.substring(0,1);
				}
			}
		}
		if (i <= 3)
			payee = document.getElementById("DRFT_PAYTOCODE" + i);
	}
}
// FSIT Issue# 39943 End
function chkRenewOfPol()
{
	if ((document.forms[0].REQUESTCODE.value == "CPPBCONTADDRq") || ((document.forms[0].REQUESTCODE.value == "CPPBCONTCHGRq")))
	{
		if ((document.forms[0].BC_RENEWAL_SYMBOL != null) && (document.forms[0].BC_RENEWAL_POLICY_NUMBER != null))
		{
			if ((document.forms[0].BC_RENEWAL_SYMBOL.value.length > 0) && (document.forms[0].BC_RENEWAL_POLICY_NUMBER.value.length > 0))
			{
				if ((document.forms[0].BC_ORIGINAL_INCEPTION_DATE != null) && (document.forms[0].BC_ORIGINAL_INCEPTION_DATE.value.length == 0))
				{
					alert("Please enter the Original Inception Date");
					return;
				}
			}
		}
	}
}

//FSIT Number:39655 - Start(Resoultion:39366)
function doRedirectTaskActivity()
{
	var key = document.forms[0].DRFT_PAYEEZIP2.value;
	window.location = "../servlet/POINTGridManager?KEY=" +key+ "&REQUESTCODE=ClmNewTaskNotificationGrid";
}
//FSIT Number:39655 - Start(Resoultion:39366)
//FSIT Issue#39616 Resolution#39941 Start
function doClaimNumberFill(oCtl,yearPrefix)
{
	if (isBlankOrZero(oCtl.value))
		return;
	yearPrefix = trim(yearPrefix);
	var strZeros = yearPrefix;
	var iDiff = 12 - oCtl.value.length - yearPrefix.length;
	if (iDiff >= 0)
	{
		for (var i=0; i < iDiff; i++)
			strZeros = strZeros + "0";
		strZeros += oCtl.value;
		oCtl.value = strZeros;
	}
}
function lastcheckassigned()
{
        var bankcd = document.getElementById('bankfld').value.substr(0,4);
        if(trim(bankcd) == "")
        {
		alert("Please enter the bank code.");
		document.forms[0].BANK.focus();
	}
        else
        {
		var url = "../jsp/PayLastCheckGridFrame.jsp?FirstCall=YES&BANKCODE="+bankcd;		
		window.open(url,"POINTGrid","left=120,top=120,width=790,height=510,menubar=no,toolbar=no,resizable=yes,scrollbars=yes,status=yes");
	}
}
//FSIT Issue#39616 Resolution#39941 End
// FSIT Issue# 39598 Start
function doclminvoice(obj)
{
    if (document.getElementById('DRFT_INVOICE_1').value == '' && document.getElementById('DRFT_INVOICE_2').value != '')
    {
     document.getElementById('DRFT_INVOICE_1').value = document.getElementById('DRFT_INVOICE_2').value;
     document.getElementById('DRFT_INVOICE_2').value = '';
    }
    if (document.getElementById('DRFT_INVOICE_2').value == '' && document.getElementById('DRFT_INVOICE_3').value != '')
    {
      if (document.getElementById('DRFT_INVOICE_1').value == '')
       {
         document.getElementById('DRFT_INVOICE_1').value = document.getElementById('DRFT_INVOICE_3').value;
         document.getElementById('DRFT_INVOICE_3').value = '';
       }
      else
       {
         document.getElementById('DRFT_INVOICE_2').value = document.getElementById('DRFT_INVOICE_3').value;
         document.getElementById('DRFT_INVOICE_3').value = '';
       }
    }
}
function doclmdateser(obj)
{
   if (document.getElementById('DRFT_CLMSER_DATE_TO').value == '')
    {
     document.getElementById('DRFT_CLMSER_DATE_TO').value = document.getElementById('DRFT_CLMSER_DATE_FROM').value;
    }
}
// FSIT Issue# 39598 End
// Resolution# 39959 Start
function doClmDupPaymentsGrid(dup)
{
	var obj;
	if (dup == '1')
	{
		obj = document;		
	}
	else 
	{
		obj = opener.document;
	}
	var locmco = obj.getElementById("KEY_LOCATION").value + obj.getElementById("KEY_MASTER_COMPANY").value;
	var symb = obj.getElementById("KEY_SYMBOL").value;
	var symblength = symb.length;
	if(symblength < 3)
	{
		symblength = 3 - symblength;
		for (i=1;i<=symblength;i++)
		{		
			symb += " ";
		}
	}
	var key = locmco + obj.getElementById("KEY_CLAIM_NUMBER").value + obj.getElementById("KEY_CLAIMANT_SEQ").value + locmco + symb + obj.getElementById("KEY_POLICY_NUMBER").value + obj.getElementById("KEY_MODULE").value;
	if(obj.forms[0].REQUESTCODE.value == "BASCPCHKADDRq")
		var PolCovSeq = obj.getElementById("KEY_POLICY_COV_SEQ").value;	
	else
		var PolCovSeq = obj.getElementById("KEY_TRANSACTION_SEQ").value;
	var pad = 4 - PolCovSeq.length;
	for(i=1;i<=pad;i++)
	{	
		key += "0";
	}
	key += PolCovSeq;
	var dates;
	if (obj.getElementById("DRFT_CLMSER_DATE_FROM") != null)
	{
		if (obj.getElementById("DRFT_CLMSER_DATE_FROM").value == "" || obj.getElementById("DRFT_CLMSER_DATE_FROM").value == "0" || obj.getElementById("DRFT_CLMSER_DATE_FROM").value == "00/00/00")
		{
			dates = "0000000";
		}
		else
		{
			if (obj.getElementById("DRFT_CLMSER_DATE_FROM").value.substring(6,8) <= 39)
			{
				dates = "1"+obj.getElementById("DRFT_CLMSER_DATE_FROM").value.substring(6,8);
			}
			else
			{
				dates = "0"+obj.getElementById("DRFT_CLMSER_DATE_FROM").value.substring(6,8);
			}
			dates += obj.getElementById("DRFT_CLMSER_DATE_FROM").value.substring(0,2)+obj.getElementById("DRFT_CLMSER_DATE_FROM").value.substring(3,5);
		}
	}
	else
	{
		dates = "0000000";
	}
	if (obj.getElementById("DRFT_CLMSER_DATE_TO") != null)
	{
		if (obj.getElementById("DRFT_CLMSER_DATE_TO").value == "" || obj.getElementById("DRFT_CLMSER_DATE_TO").value == "0" || obj.getElementById("DRFT_CLMSER_DATE_TO").value == "00/00/00")
		{
			dates += "0000000";
		}
		else
		{
			if (obj.getElementById("DRFT_CLMSER_DATE_TO").value.substring(6,8) <= 39)
			{
				dates += "1"+obj.getElementById("DRFT_CLMSER_DATE_TO").value.substring(6,8);
			}
			else
			{
				dates+= "0"+obj.getElementById("DRFT_CLMSER_DATE_TO").value.substring(6,8);
			}
			dates += obj.getElementById("DRFT_CLMSER_DATE_TO").value.substring(0,2)+obj.getElementById("DRFT_CLMSER_DATE_TO").value.substring(3,5);
		}
	}
	else
	{
		dates += "0000000";
	}
	var addkey = dates + obj.getElementById("DRFT_PAYEENAME1").value 
	var strSpaces = 44-addkey.length;
	for (i=1; i<= strSpaces; i++)
	{
		addkey += " ";
	}
	var from = 0;
	var pos = 0;
	while (addkey.indexOf("'", from) > -1)
	{
		pos = addkey.indexOf("'", from);
		addkey = addkey.substring(0,pos+1) + "'" + addkey.substring(pos+1);
		from = pos + 2;
	}
	var amt = obj.getElementById("DRFT_AMOUNT").value;
	amt = RemoveCommas(amt);
	var amtlen = 12 - amt.length;
	for(i=1; i<=amtlen ; i++)
	{
		addkey += "0";
	}
	var dec = amt.indexOf('.');
	addkey += amt.substring(0,dec);
	dec++;
	addkey += amt.substring(dec);
	var taxid = obj.getElementById("KEY_TAX_ID").value;
	pad = 11 - taxid.length;
	for(i=1; i<= pad; i++)
	{
		taxid += " ";
	}
	var adjno = obj.getElementById("KEY_ADJUSTOR_NUMBER").value;
	pad = 6 - adjno.length;
	for(i=1; i<= pad; i++)
	{
		adjno += " ";
	}
	var invoice1 = obj.getElementById("DRFT_INVOICE_1").value;
	pad = 20 - invoice1.length;
	for(i=1; i<= pad; i++)
	{
		invoice1 += " ";
	}
	var invoice2 = obj.getElementById("DRFT_INVOICE_2").value;
	pad = 20 - invoice2.length;
	for(i=1; i<= pad; i++)
	{
		invoice2 += " ";
	}
	var invoice3 = obj.getElementById("DRFT_INVOICE_3").value;
	pad = 20 - invoice3.length;
	for(i=1; i<= pad; i++)
	{
		invoice3 += " ";
	}
	var url = '../servlet/POINTGridManager?REQUESTCODE=ClmDupPaymentsGrid&KEY=' + escape(key) + escape(addkey) + escape(adjno) + escape(taxid) + escape(invoice1) + escape(invoice2) + escape(invoice3);
	if (dup == '1')
	{
		var popupwindow = window.open(url,"POINTGrid","height=640,width=800,left=100,top=50,menubar=no,toolbar=no,resizable=yes,scrollbars=yes,status=yes");
		if (window.focus) 
			popupwindow.focus();
	}
	else
		window.location=url;
	set_busy_icon();
}
// Resolution# 39959 End
function change_orig_incept(obj)
{
	var origincept;
	if (obj.value.length == 8)
	{	
		origincept = obj.value.substring(0,2) + "/" + obj.value.substring(6,8);
	//NSV 3853 Start
		if ((document.forms[0].BC_ORIGINAL_INCEPTION_DATE != null) && (document.forms[0].BC_ORIGINAL_INCEPTION_DATE.value == '/'))
	//NSV 3853 End
		{
			document.forms[0].BC_ORIGINAL_INCEPTION_DATE.value = origincept;
		}
	}

}
//NSV - Added for Original Inception Date End

//FSIT Issue#39616 Resolution#39941 Start
function doClaimAutoFill(oCtl,claimNumberGenerator,yearPrefix)
{
	if (claimNumberGenerator != 'Y')
	{
		doClaimNumberFill(oCtl,yearPrefix);
	}
	else
	{
		return;
	}
}
//FSIT Issue#39616 Resolution#39941 End
//FSIT Issue#50360 Resolution#39895 Start
function doGetVendorDetails(obj)
{
	var VendorNo = obj.value;
	var VendorNoHold = document.getElementById("ADJ_NUMBER_HOLD").value;
	if(isBlankOrZero(VendorNo))
	{
		if(document.getElementById("ID_SUBMIT_BUTTON").disabled == true)
			document.getElementById("ID_SUBMIT_BUTTON").disabled = false;
		if(document.getElementById("ADJ_ERROR_SWITCH").value == 'Y')
			document.getElementById("ADJ_ERROR_SWITCH").value = 'N';
  		document.getElementById("ADJ_NUMBER_HOLD").value = "";
		doClearClaimVendor();
		return;
	}
	if(VendorNo != VendorNoHold)
	{
		set_busy_icon();
		document.getElementById("ID_SUBMIT_BUTTON").disabled = true;
			if(opener!=null&&opener.name=="RightWindow")
			{
			document.getElementById("PROC_SPEC_USE1").value = opener.top.First.frameBottomRight.location;
			document.getElementById("ADJ_NUMBER_HOLD").value = VendorNo;
			var url = "../jsp/ClmGetPayeeDetails.jsp?VendorNo="+ VendorNo;
			opener.top.First.frameTopLeft.opener=this;	
			opener.top.First.frameTopLeft.location = url;
			}
			else
			{
			document.getElementById("PROC_SPEC_USE1").value = top.First.frameBottomRight.location;
  			document.getElementById("ADJ_NUMBER_HOLD").value = VendorNo;
			var url = "../jsp/ClmGetPayeeDetails.jsp?VendorNo="+ VendorNo;
			top.First.frameTopLeft.location = url;
			}
	}
}
//FSIT Issue#50360 Resolution#39895 End
//***KKB Start- UNI3336***New Function added for FREEFORM KeyUP.
function fieldLengthCheck(oCtl)
{
if (oCtl.name == "ENDT_FREE_FORM_TEXT")
{
	var FFText = oCtl.value.substring(0,400);
	if (oCtl.value.length > 400)
	{
   		document.forms[0].ENDT_FREE_FORM_TEXT.value = FFText;
   		alert("Maximum length allowed is 400 characters.");
	}
}
}
//***KKB End- UNI3336***.

//FSIT Issue#55774 Resolution#39941 Start
function switchToCons()
{
	location.href = '../jsp/PayConsolidatedPaymentSearchForm.jsp?FirstCall=Yes&ClearMessage=Y';
}
function switchToInd()
{
	location.href = "../jsp/PayCheckItemSearchForm.jsp?FirstCall=Yes&ClearMessage=Y";
}
//FSIT Issue#55774 Resolution#39941 End
//FSIT Issue#55774 Resolution#39941 End

//RV WAG Relationship field added to Add Interest Screen - Start
function doPopulateDesc5(obj)
{
//WAG4547 - Start
	var AddCode = document.getElementById("ADDLINT_KEY_USE_CODE").value;  
  
	if(AddCode=='AE')
	{
	document.getElementById("ADDLINT_DESCRIPTION_LINE_6").options[0].value = obj.value;
	}
	else
    {
//WAG4547 - End
	document.getElementById("ADDLINT_DESCRIPTION_LINE_5").value = obj.value;
	document.getElementById('ADDLINT_FEIN_NUMBER').value='';
	document.getElementById('ADDLINT_ID_NUM').value = '';
//WAG4547 - Start
	}
//WAG4547 - End
}
//RV WAG Relationship field added to Add Interest Screen - End
//NSV - Mem Split Commission PCR - Start
function PopulateData()
{
	var url = "../jsp/PolCountyCodeName.jsp?KEY_LOCATION_COMPANY=" + document.getElementById('KEY_LOCATION_COMPANY').value + "&KEY_MASTER_COMPANY=" + document.getElementById('KEY_MASTER_COMPANY').value + "&BC_POLICY_COMPANY=" + document.getElementById('BC_POLICY_COMPANY').value + "&PROC_STATE_CODE=" + document.getElementById('PROC_STATE_CODE').value + "&BC_LINE_OF_BUSINESS=" + document.getElementById('BC_LINE_OF_BUSINESS').value;
	top.First.frameTopLeft.location = url;
}
//NSV - Mem Split Commission PCR - End
//NSV - Mem Split Commission PCR Change - Start
function populateCountyName()
{
	var obj = document.getElementById("PROC_COUNTY_CODE");
	if (obj.selectedIndex != -1)
	{
		var strTemp = obj[obj.selectedIndex].text;
		var i = strTemp.indexOf('==');
		if (i != -1 )
		{
			document.getElementById("PROC_COUNTY_NAME").value = strTemp.substring(i+2,strTemp.length);
		}
		else
		{
			document.getElementById("PROC_COUNTY_NAME").value = '';
		}
	}
	else
	{
		document.getElementById("PROC_COUNTY_NAME").value = '';
	}
}
//NSV - Mem Split Commission PCR Change - End
//NSV - Combine fields AGPROF coverage - Start
function doAGPROFSubmit()
{
	var tmpStr = trim(document.getElementById("GC_CFI_1").value);
	var tmpInt = tmpStr.length;
	if (tmpInt == 0)
	{
		document.getElementById("GC_USER_TEXT_2").value = '';
		document.getElementById("GC_USER_TEXT_3").value = '';
		document.getElementById("GC_USER_TEXT_4").value = '';	
		document.getElementById("GC_USER_TEXT_5").value = '';	
	}
	else if (tmpInt <= 16)
	{
		document.getElementById("GC_USER_TEXT_2").value = tmpStr;
		document.getElementById("GC_USER_TEXT_3").value = '';
		document.getElementById("GC_USER_TEXT_4").value = '';	
		document.getElementById("GC_USER_TEXT_5").value = '';			
	}
	else if ((tmpInt > 16) && (tmpInt <= 32))
	{
		document.getElementById("GC_USER_TEXT_2").value = tmpStr.substring(0,16);
		document.getElementById("GC_USER_TEXT_3").value = tmpStr.substring(16,tmpStr.length);
		document.getElementById("GC_USER_TEXT_4").value = '';	
		document.getElementById("GC_USER_TEXT_5").value = '';			
	}
	else if ((tmpInt > 32) && (tmpInt <= 48))
	{
		document.getElementById("GC_USER_TEXT_2").value = tmpStr.substring(0,16);
		document.getElementById("GC_USER_TEXT_3").value = tmpStr.substring(16,32);
		document.getElementById("GC_USER_TEXT_4").value = tmpStr.substring(32,tmpStr.length);
		document.getElementById("GC_USER_TEXT_5").value = '';			
	}
	else if ((tmpInt > 48) && (tmpInt <= 64))
	{
		document.getElementById("GC_USER_TEXT_2").value = tmpStr.substring(0,16);
		document.getElementById("GC_USER_TEXT_3").value = tmpStr.substring(16,32);
		document.getElementById("GC_USER_TEXT_4").value = tmpStr.substring(32,48);	
		document.getElementById("GC_USER_TEXT_5").value = tmpStr.substring(48,tmpStr.length);	
	}	
	document.forms[0].submit();
}
//NSV - Combine fields AGPROF coverage - End

//AK -- Start -- Status Display on MemSplit Panel
function statusMemSplitDisp()
{
if (document.getElementById("COMMON_DESC_POLICY_STATUS_MEMBERSHIP").value == 'V')
{
	document.getElementById("COMMON_DESC_POLICY_STATUS_MEMBERSHIP").value = "Verified";	
}
else
	document.getElementById("COMMON_DESC_POLICY_STATUS_MEMBERSHIP").value = "Pending";
}

function doMemSplitReset()
{
document.forms[0].reset();
statusMemSplitDisp();
}
//AK -- End -- Status Display on MemSplit Panel

//RV - Plus Plus ++++ fix - start

function checkData(fieldstocheckcsv)
{	
	var fieldstocheck = new Array();
	var char;
	var field = "";
	var commacount = 0;
	for(i=0; i<fieldstocheckcsv.length; i++)
	{
		char = 	fieldstocheckcsv.charAt(i);
		if(char != '$')
		{
			field = field + char;
		}
		
		else if(char == '$' )
		{

			fieldstocheck[commacount] = field;
			commacount++;
			field = "";
		}
		
	}
	var isok = true;
	var incorrectind = 0;
	var valuetocheck;
	for (j=0 ;j < commacount; j++)
	{
		valuetocheck = document.getElementById(fieldstocheck[j]).value;
		if (!isNumeric(valuetocheck))
		{
			isok = false;
			incorrectind  = j;
		}
	}
	if(isok)
		document.forms[0].submit();
	else
		{
		alert("Incorrect data in fields. Please sumbit again.");
		document.getElementById(fieldstocheck[incorrectind]).value = "";
		document.getElementById(fieldstocheck[incorrectind]).focus();
		}
}

function isNumeric(sText)
{
   var ValidChars = "0123456789.,";
   var IsNumber=true;
   var Char;

 
   for (i = 0; i < sText.length && IsNumber == true; i++) 
      { 
      Char = sText.charAt(i); 
      if (ValidChars.indexOf(Char) == -1) 
         {
         IsNumber = false;
         }
      }
   return IsNumber;
   
}

//RV - Plus Plus ++++ fix - end

//[PS]-Canada-Start
function CanadaZIPCode()
{
 if (document.forms[0].REQUESTCODE.value == "BASAIAUXADDRq" || document.forms[0].REQUESTCODE.value == "BASAIAUXCHGRq")
  {	
  	var state = document.getElementById("AUX_STATE");
  	var outsideUS = state.options[state.selectedIndex].value;
  	
  	if (outsideUS == "XX")
  	{
  	document.getElementById("AUX_ZIPCODE").mask = 'x#x#x#';
  	document.getElementById("AUX_ZIPCODE").value = '';
  	}
  	else
  	{
  	document.getElementById("AUX_ZIPCODE").mask = '#####-####';
  	document.getElementById("AUX_ZIPCODE").value = '';
	}
  }
}

function doReset_Conditional()
{

document.forms[0].reset();

var state = document.getElementById("AUX_STATE");
var outsideUS = state.options[state.selectedIndex].value;

if (document.forms[0].REQUESTCODE.value == "BASAIAUXADDRq" || document.forms[0].REQUESTCODE.value == "BASAIAUXCHGRq")
  {	
 	if (outsideUS == "XX")
	{
	document.getElementById("AUX_ZIPCODE").mask = 'x#x#x#';
	}
	else
	{
	document.getElementById("AUX_ZIPCODE").mask = '#####-####';
	}	
  }  
}

//[PS]-Canada-End
//FSIT #100224 Resolution ID 44722 Start
function setActionBusy(form)
{
  for (var i=0; i < form.elements.length; i++)	
   {form.elements[i].disabled = true;
   }
}

function removeFormat(val)
{
   if (val.indexOf(",") > 0 || val.indexOf(".") > 0)
   {
	for(var m=0; m<val.length; m++)
	{
	  if (val.charAt(m) == "," || val.charAt(m) == ".")
	  {
		 val = val.substr(0,m) + val.substr(m+1,val.length)
	   }   
	 }
	}
	return val;
}	

function chkMoneyNumber(obj)
{
 var v = removeFormat(obj.value);
 if (v-0 > 99999999999)
 {
   alert("Value is to large.");
 }
}
//Format Phone Start
function FormatPhone(obj)
{
 var v = removeFormat(obj.value);
obj.value =  v.substr(0,3) + "-" + v.substr(3,3) + "-" + v.substr(6,4);

}
//Format Phone End
//FSIT #100224 Resolution ID 44722 End
//FSIT No:78572 Spool File Integration with Message Center-- <AK> -- Start
function validateEmail(email)
{
	var mail=email;
	at_pos=mail.indexOf("@");
	dot_pos=mail.indexOf(".");
	if(at_pos<1 || dot_pos<1) {
		alert("Please check position of '@' and '.' in email address.");
		return 0;
		}
	else {
		condition="yes";
		var at_count=0;
		var dot_count=0;
		var temp=0;
		for(var i=0;i<mail.length;i++)
			if((mail.charCodeAt(i)>0 && mail.charCodeAt(i)<48)||(mail.charCodeAt(i)>57 && mail.charCodeAt(i)<65)||(mail.charCodeAt(i)>91 && mail.charCodeAt(i)<97)||mail.charCodeAt(i)>122) {
					if(mail.charAt(i)=="@"||mail.charAt(i)==".") {
							if(mail.charAt(i)=="@"){at_count++;}else{dot_count++;} // counts the no. of times @ and . appears in email
					}
					else {
						condition="no"
						i=mail.length
					}
				}
		if(condition=="no")	{
				alert("Your email contains a blank space or special character.")
				return 0;
			}
			else {
				if(at_count>1) {
					alert("E-mail contains extra @ ");
					return 0;
				}
				
				
			      }
				
			}
}
//FSIT No:78572 Spool File Integration with Message Center-- <AK> -- End


//FSIT No:78572 Spool File Integration with Message Center <NA> Start
// validate userid and email on submit
function validateRecipient()
{
	if(ValidatePage()) 
	{
	    if(validateEmail(document.forms[0].EMAILADDRESS.value) == 0) 
	    {
		return false;
	    }
	    else
	    { 
		document.forms[0].submit();
		return true;
	    }
	 }   
	else {
		return false;
	     }
}	      

//FSIT No:78572 Spool File Integration with Message Center <NA> End


//[PS]-WAG2728 AGMax_Form-Start

function AGMax_Form()
{

	var unit = trim(document.getElementById("A_FORM_UNIT_NUMBER").value);

	if (isBlank(unit))	
		{
			alert("Unit Number is required");
			document.getElementById("A_FORM_UNIT_NUMBER").value = "";
			return false;
		}

	if (!ValidatePage())
		{
			return false;
		}	
	else
		{
			document.forms[0].submit();
		}	

}


function AGMax_Form_check()
{	

	var unit = document.getElementById("A_FORM_UNIT_NUMBER");
	
	EditNumericDecimalEntry(unit);
	
	var check1 = trim(unit.value).length;

	if (check1 >5 )
		{
		
			document.getElementById("A_FORM_UNIT_NUMBER").value = (unit.value).substring(0,5);
			return;
		}
}


//[PS]-WAG2728 AGMax_Form-End
//[PS]-WAG4076 BASP0200E-Start
function disableSubmitButtons()
{
	var buttons = document.getElementsByTagName("input");
	for (var i=0; i < buttons.length; i++) 
	{
	  if (buttons[i].getAttribute("type") == "button" || buttons[i].getAttribute("type") == "submit" || buttons[i].getAttribute("type") == "reset" ) 
	  {
	   buttons[i].disabled = true;
	  }
	}
}
//[PS]-WAG4076 BASP0200E-End
//SNS - FSIT#48420 - Driver Screen for Commercial Auto - Start
function doDCATab(){
if(document.getElementById("DRVDTL_FIRST_NAME").parentNode.style.display != "none" ) 
	document.getElementById("DRVDTL_FIRST_NAME").focus();
else
	document.getElementById("DRVDTL_FULLNAME").focus();
}
//SNS - FSIT#48420 end

//[PS]-WAG3490 - Start

function form_reset_Driver()
{
document.forms[0].reset();
if (document.forms[0].REQUESTCODE.value != "")
{
	if (document.forms[0].REQUESTCODE.value == "PAPDCADTADDRq")
	{
		
				var driverStatus = document.getElementById("DRVDTL_EXCLUDED_DRIVER_IND");
				for ( var j = driverStatus.options.length - 1; j >= 0; j-- ) 
				{
				 	if (driverStatus.options[j].value == 'I')
					 	{
					 		driverStatus.selectedIndex = j;
					 		break;
					 	}	
				}
	}
}
}

function form_submit_Driver()
{
if (!ValidatePage()) 
   	return false;
var yrLicensed = document.getElementById("DRVDTL_USER_NUMBER_1");  

if (yrLicensed != null)
{
var len = yrLicensed.value.length;
if (len != '4')
{
alert ("Yr Licensed should be four digit long");
return false;
}
}

document.forms[0].submit();
}

//[PS]-WAG3490 - End

//WAG3899 ( Pulled FSIT#93327 Resolution id 42412) - Start

function UndDecReason_onLoad()
{
	if(parent.footer.document.footerForm.rsnKey)
        {
 
          if(parent.footer.document.footerForm.rsnKey.value != '')
	  {
             var len1=0;
             val= parent.footer.document.footerForm.rsnKey.value;
		try
		{
			len1 = document.headerForm.selection.length;
			
		
		}catch(ErrorObject)
		{
			len1=0;
		}
		
	     if(len1==1)
	     {
	   	  if (val.indexOf(document.headerForm.selection.value)>-1)
		  {
			document.headerForm.selection.checked=true;
		  }
	     }
	   
	     else
	      {
		   for(i=0;i<len1;i++)
		   { 
			 if(val.indexOf(document.headerForm.selection[i].value)>-1)
			 	 document.headerForm.selection[i].checked=true;
				
		   }
	      }
           }
	  				
        }

}

//WAG3899 ( Pulled FSIT#93327 Resolution id 42412) - End

//[PS]-PCR039- FSIT# 128718 - Start
function checkXCD()
{
	if (document.forms[0].REQUESTCODE.value == "CPPBCONTCHGRq")
	{
		var reqkey = document.forms[0].fullkey.value;
		var reqCode = document.forms[0].REQUESTCODE.value;
		var custNum = document.getElementById("BC_CUSTOMER_NUMBER").value;
		var loc = document.getElementById("BC_KEY_LOCATION_COMPANY").value;
		var mco = document.getElementById("BC_KEY_MASTER_COMPANY").value;
		var sym = "";
		var policy = document.getElementById("BC_KEY_POLICY_NUMBER").value;
		var mod = document.getElementById("BC_KEY_MODULE").value;
		var typeAct = "";
			if (reqkey != null)
			{
				typeAct = reqkey.substring(30,32);
				sym = reqkey.substring(4,7);
			}
		var state = "";
		var lob	= document.getElementById("BC_LINE_OF_BUSINESS").value;
		var effDate = document.getElementById("BC_POLICY_EFFECTIVE_DATE").value;
		state = document.getElementById("BC_RISK_STATE").value;
		if (typeAct != "RB")
		return;
// FSIT 133688 Start
		var issueCode = document.getElementById("BC_ISSUE_CODE").value;
		var bcPayPlan = document.getElementById("BC_PAY_BY_PLAN").value;	
	        var bcRenPayPlan = document.getElementById("BC_RENEWAL_PAY_BY_PLAN").value;
		document.getElementById('ID_Submit_Button').style.display = 'none';
		document.getElementById('ID_Reset_Button').style.display = 'none';
		   var url = "../jsp/PolGetPayPlan.jsp?CUSTNUMBER="+custNum +"&LOC="+ loc +"&MCO=" + mco + "&STATE=" + state + "&LOB=" +lob +"&EFFECTIVE_DATE="+effDate + "&REQ_CODE=" + reqCode + "&TYPEACT=" + typeAct + "&SYMBOL=" + sym + "&POLICYNUM=" + policy + "&MODULE=" + mod+"&fullkey=" + reqkey+"&issueCode=" + issueCode+"&bcPayPlan=" + bcPayPlan+"&bcRenPayPlan=" + bcRenPayPlan;
// FSIT 133688 End
		top.First.frameTopRight.location = url;
	}
}
function enablePayPlan()
{
//FSIT 144888 WAG4997 - Start
try
	{
if (document.forms[0].REQUESTCODE.value == "CPPBCONTCHGRq" || document.forms[0].REQUESTCODE.value == "CPPBCONTADDRq")
{
document.getElementById("BC_RENEWAL_CODE").disabled = true;
}
	}
	catch(e){}
//FSIT 144888 WAG4997 - End

// XCD Jira 597 - Start
var flagPayPlanDisbled = false;
if(document.getElementById("BC_PAY_BY_PLAN").disabled == true)
{ flagPayPlanDisbled = true; }
// XCD Jira 597 - End

document.getElementById("BC_PAY_BY_PLAN").disabled = false;
var payPlan = document.getElementById("BC_PAY_BY_PLAN");
if (((document.forms[0].REQUESTCODE.value == "CPPBCONTCHGRq")||(document.forms[0].REQUESTCODE.value == "CPPBCONTRENRq")) &&(payPlan != null) && ((payPlan.options[payPlan.selectedIndex].value == "") || (payPlan.options[payPlan.selectedIndex].value == " ")))
{
alert("Please enter the value for the Pay Plan");
// XCD Jira 597 - Start
if(flagPayPlanDisbled == true)
{document.getElementById("BC_PAY_BY_PLAN").disabled = true;}
//document.getElementById("BC_PAY_BY_PLAN").disabled = true;
// XCD Jira 597 - End
return false;
}

if (!ValidatePage()) 
// XCD Jira 597 - Start
{
if(flagPayPlanDisbled == true)
{  document.getElementById("BC_PAY_BY_PLAN").disabled = true; }
return false;
}
// XCD Jira 597 - End
document.forms[0].submit();
}
function enableGLQQPayPlan()
{
document.getElementById("BC_PAY_BY_PLAN").disabled = false;
document.getElementById('ID_Next_Button').disabled = true;
document.getElementById('ID_B_Reset').disabled = true;
}
//[PS]-PCR039- FSIT# 128718 - End

// WAG PCR042 FSIT 129573 Start
function AmtPostXML()
{
var check = checkZeros();
if(!check)
{
	alert('No Reverse Amount Entered');
	return;
}
// JKS XCD 259 (PCR42 FSIT 129573) - Start
//var url = '../jsp/WaiveSelectBoxCheck.jsp';
var LOC = top.First.document.forms[0].LOC.value ;
var MCO = top.First.document.forms[0].MCO.value ;
var polSymbol = top.First.document.forms[0].polSymbol.value ;
var polNumber = top.First.document.forms[0].polNumber.value ;
var polModule = top.First.document.forms[0].polModule.value ;
var url = "../jsp/WaiveSelectBoxCheck.jsp?LOC="+LOC+"&MCO="+MCO+"&polSymbol="+polSymbol+"&polNumber="+polNumber+"&polModule="+polModule+"";
//JKS XCD 259 (PCR42 FSIT 129573) - End
window.open(url,"WaiveSelectBoxCheck","height=225,width=800,left=120,top=300,menubar=no,toolbar=no,resizable=yes,scrollbars=yes,status=yes");
}

function InstPostXML()
{
var check = checkZeros();
if(!check)
{
	alert('No Waives Entered');
	return;
}
//JKS XCD 259 (PCR42 FSIT 129573) - Start
//var url = '../jsp/WaiveSelectBoxCheck.jsp';
var LOC = top.First.document.forms[0].LOC.value ;
var MCO = top.First.document.forms[0].MCO.value ;
var polSymbol = top.First.document.forms[0].polSymbol.value ;
var polNumber = top.First.document.forms[0].polNumber.value ;
var polModule = top.First.document.forms[0].polModule.value ;
var url = "../jsp/WaiveSelectBoxCheck.jsp?LOC="+LOC+"&MCO="+MCO+"&polSymbol="+polSymbol+"&polNumber="+polNumber+"&polModule="+polModule+"";
//JKS XCD 259 (PCR42 FSIT 129573) - End
window.open(url,"WaiveSelectBoxCheck","height=225,width=800,left=120,top=300,menubar=no,toolbar=no,resizable=yes,scrollbars=yes,status=yes");
}
// WAG PCR042 FSIT 129573 End
//FSIT#112850 Res#47746 removal  - Start
/*
//FSIT#112850 Res#47746 -Start
function doPayToName()
{   
	var payephrase = document.getElementById('DRFT_PAYEPHRASE').value;
    var amount = document.getElementById('DRFT_AMOUNT').value;
	var payee1 = document.getElementById('DRFT_PAYEENAME1').value;
	var payee2 = document.getElementById('DRFT_PAYEENAME2').value;
    var payee3 = document.getElementById('DRFT_PAYEENAME3').value;
    var lossdate = document.getElementById('CL_DATE_OF_LOSS').value;
	var paytoname = document.getElementById('DRFT_PAYTONAME').value;
	var literal = document.getElementById('DRFT_AMT_LITERAL').value;
	var policyno = document.getElementById('KEY_POLICY_NUMBER').value;
	var symbol = document.getElementById('KEY_SYMBOL').value;
	var module = document.getElementById('KEY_MODULE').value;
	var claimno = document.getElementById('KEY_CLAIM_NUMBER').value;
	var entrydate = document.getElementById('KEY_CLM_ENTRY_DATE').value;
	var ParentReq = document.getElementById('REQUESTCODE').value;
	var drftnumber = document.getElementById('DRFT_NUMBER').value;
    
	var url = "../jsp/ClmCheckImage.jsp?DRFT_PAYEPHRASE="+ escape(payephrase) + "&DRFT_AMOUNT=" + amount + "&DRFT_PAYEENAME1="+escape(payee1) + "&DRFT_PAYEENAME2=" + escape(payee2) + "&DRFT_PAYEENAME3=" + escape(payee3) + "&CL_DATE_OF_LOSS=" + lossdate + "&DRFT_PAYTONAME=" + escape(paytoname) + "&DRFT_AMT_LITERAL=" + escape(literal) + 
		"&KEY_POLICY_NUMBER=" + policyno + "&KEY_SYMBOL=" + symbol + "&KEY_MODULE=" + module + "&KEY_CLAIM_NUMBER=" +  claimno + "&KEY_CLM_ENTRY_DATE="+ entrydate+ "&DRFT_NUMBER="+ drftnumber+"&PARENT_REQ=" +ParentReq + "&FromClaims=Y&FromPayables=N" ;
    window.open(url,"ClaimCheck","height=400,width=720,left=200,top=200,menubar=no,toolbar=no,resizable=no,scrollbars=no,status=yes");
    
}

function doEvaluatePayToField()
{ 
	
    var payee1 = document.getElementById("DRFT_PAYEENAME1").value;
    var payee2 = document.getElementById("DRFT_PAYEENAME2").value; 
    var payee3 = document.getElementById("DRFT_PAYEENAME3").value;
    
	if (payee1.length == 0)
      {       paytoname = "";
      }
    else if (payee2.length == 0  && payee3.length == 0)
	  { paytoname = payee1;
	  }
    else if (payee3.length == 0  && payee2.length != 0)
	  { paytoname = payee1 + " AND " + payee2;
	  }
	else if (payee2.length == 0 && payee3.length != 0)
	  { paytoname = payee1 + " AND " + payee3;
	  }
	else 
	  { paytoname = payee1 + ", " + payee2 + " AND " + payee3; 
	  }
    document.getElementById("DRFT_PAYTONAME").value = paytoname;
	for(i=0;i<document.getElementsByTagName("input").length;i++)
		if (document.getElementsByTagName("input").item(i).value == "Check Image" && document.getElementsByTagName("input").item(i) != null && document.getElementsByTagName("input").item(i).type == "button" )
			{document.getElementsByTagName("input").item(i).style.backgroundColor = "";
			 break;
			}
}
function doEditSpecialPayee(payeeNumber)
 {
	if (document.getElementById("DRFT_PAYTOCODE"+payeeNumber).selectedIndex == '12')
	{   
		document.getElementById("ID_PAYEE" +payeeNumber+ "_EDIT").style.visibility = 'visible';
	    var url = "../jsp/ClmEditPayeeAddress.jsp?Payee=" + payeeNumber;
 	    window.open (url, "PayeeAddress", "height=350,width=480,left=300,top=275,location=no,menubar=no,resizable=no,scrollbars=no,status=no,toolbar=no");
	}
	else
	{
		document.getElementById("ID_PAYEE" +payeeNumber+ "_EDIT").style.visibility = 'hidden';
	}

}
function docancelindpymt()
{
	if (confirm ("Are you sure you want to cancel this transaction?") == true)
	{
		window.location.href = "../HTML/BlankPanel.html";
	}
}
//FSIT#112850 Res#47746 - End
*/
//FSIT#112850 Res#47746 removal  - End	
//FSIT 150645 (FSIT#116070 Resolution #49457 ) - Jacada Code conversion -  Start
function valspchars(str)
{
	var iChars = "~`!@#$%^&*()_-+={}[]|\\:;\"\'<>,.?\/";
	for(i=0;i < str.length;i++)
	{
	  if(iChars.indexOf(str.charAt(i)) > -1)
	  return true;
	}
	return false;
}

function formattextdecode(s)
{
s= s.replace(/&amp;/g,'\&');
s= s.replace(/&lt;/g,'\<');
s= s.replace(/&gt;/g,'\>');
s= s.replace(/&quot;/g,'\"');
s= s.replace(/&apos;/g,'\'');
return s;
}

function formattextencode(s)
{
s= s.replace(/&/g,"&amp;");
s= s.replace(/</g,"&lt;");
s= s.replace(/>/g,"&gt;");
s= s.replace(/"/g,"&quot;");
s= s.replace(/'/g,"&apos;");
return s;
}
//FSIT 150645 (FSIT#116070 Resolution #49457 - ) - Jacada Code conversion - End



// FSIT 150645 (FSIT 116322 Resolution ID 49776 ) - Jacada Code conversion - Start
function doSearchReinBusDef(){
	if (document.getElementById("contractID").value == "")
	{
		alert("Please enter a value for Contract.");
		document.getElementById("contractID").focus();
		return false;
	}
	if (document.getElementById("contractEffDate").value == "" || document.getElementById("contractEffDate").length < 9)
	{
		alert("Please enter a valid value for Contract Effective Date.");
		document.getElementById("contractEffDate").value = "";
		document.getElementById("contractEffDate").focus();
		return false;
	}
	disableSubmitButtons();
	set_busy_icon();
	var url = "../jsp/ReinDispBusDefFrame.jsp?contractID=" +escape(document.getElementById("contractID").value) + "&contractEffDate=" + escape(document.getElementById("contractEffDate").value);
	parent.location.href = url;
	}

function doResetReinBusDef(){	
	if(! ((document.getElementById("originalContractID").value == document.getElementById("contractID").value) &&
	  (document.getElementById("originalContractEffDate").value == document.getElementById("contractEffDate").value)) )
	{
		set_busy_icon();
		disableSubmitButtons();
		var url = "../jsp/ReinDispBusDefFrame.jsp?contractID=" +escape(document.getElementById("originalContractID").value) + "&contractEffDate=" + escape(document.getElementById("originalContractEffDate").value);	
		parent.location.href = url;
	}
}

function doSearchReinParticipant(){
	if (document.getElementById("contractID").value == "")
	{
		alert("Please enter a value for Contract.");
		document.getElementById("contractID").focus();
		return false;
	}
	if (document.getElementById("contractEffDate").value == "" || document.getElementById("contractEffDate").length < 9)
	{
		alert("Please enter a valid value for Contract Effective Date.");
		document.getElementById("contractEffDate").value = "";
		document.getElementById("contractEffDate").focus();
		return false;
	}
	disableSubmitButtons();
	set_busy_icon();
	var url = "../jsp/ReinDispParticipantFrame.jsp?contractID=" +escape(document.getElementById("contractID").value) + "&contractEffDate=" + escape(document.getElementById("contractEffDate").value);
	parent.location.href = url;
}

function doResetReinParticipant(){
	if(! ((document.getElementById("originalContractID").value == document.getElementById("contractID").value) &&
	  (document.getElementById("originalContractEffDate").value == document.getElementById("contractEffDate").value)) )
	{
		set_busy_icon();
		disableSubmitButtons();
		var url = "../jsp/ReinDispParticipantFrame.jsp?contractID=" +escape(document.getElementById("originalContractID").value) + "&contractEffDate=" + escape(document.getElementById("originalContractEffDate").value);	
		parent.location.href = url;
	}
}

function doSubmitEdits(){
		var TempMessage='';
		if (document.forms[0].REQUESTCODE.value == "BASRICONCANRq") {
		 	
		 	if(trim(document.getElementById('RE_CANCEL_DATE').value) == '') {
		 		TempMessage = 'Please enter a value for Cancel Date.\n';
		 		document.getElementById('RE_CANCEL_DATE').focus();
		 	}
		 	if(trim(document.getElementById('RE_CANCEL_REASON').value) == '')
		 	{
		 		if (TempMessage == '') {
	    			document.getElementById('RE_CANCEL_REASON').focus();
	    		}
		 		TempMessage = TempMessage + 'Please enter the Reason for Cancellation.\n';		 		
		 	}
		 	if(TempMessage != ''){
	    		alert(TempMessage);
	    		return false;
	    	}
		 
		}
		else {
		    if(trim(document.getElementById('RE_KEY_CONTRACT_ID').value) == ''){
		    	TempMessage = 'Please enter a value for Contract.\n';
		    	document.getElementById('RE_KEY_CONTRACT_ID').focus();
		    }
		    if(trim(document.getElementById('RE_KEY_CONTRACT_EFFECTIVE_DATE').value) == ''){
		    	if (TempMessage == '') {
		    		document.getElementById('RE_KEY_CONTRACT_EFFECTIVE_DATE').focus();
		    	}
		    	TempMessage = TempMessage + 'Please enter a value for Effective Date.\n';	    	
		    }
		    if(trim(document.getElementById('RE_CONTRACT_EXPIRATION_DATE').value) == ''){
		    	if (TempMessage == '') {
		    		document.getElementById('RE_CONTRACT_EXPIRATION_DATE').focus();
		    	}
		    	TempMessage = TempMessage + 'Please enter a value for Expiration Date.\n'
		    }
		    if(trim(document.getElementById('RE_TYPE').value) == ''){
		    	if (TempMessage == '') {
		    		document.getElementById('RE_TYPE').focus();
		    	}
		    	TempMessage = TempMessage + 'Please select a value for Type.\n'
		    }
		    if(trim(document.getElementById('RE_OBLIGNON').value) == ''){
		    	if (TempMessage == '') {
		    		document.getElementById('RE_OBLIGNON').focus();
		    	}
		    	TempMessage = TempMessage + 'Please select a value for Obligation/Non Obligation.\n'
		    }
		    if(trim(document.getElementById('RE_WRITTEN_EARNED').value) == ''){
		    	if (TempMessage == '') {
		    		document.getElementById('RE_WRITTEN_EARNED').focus();
		    	}
		    	TempMessage = TempMessage + 'Please select a value for Written/Earned Premium.\n'
		    }
		    if(TempMessage != ''){
		    	alert(TempMessage);
		    	return false;
		    }
		var centuryIndic;
		var effectiveDate = trim(document.getElementById('RE_KEY_CONTRACT_EFFECTIVE_DATE').value);
		if (effectiveDate.substring(6,8) > '39')
			centuryIndic = '0';
		else
			centuryIndic = '1';
		var effectiveDateCYYMMDD = centuryIndic + effectiveDate.substring(6,8) + effectiveDate.substring(0,2) + effectiveDate.substring(3,5);
		var expirationDate = trim(document.getElementById('RE_CONTRACT_EXPIRATION_DATE').value);
		if (expirationDate == '')
		{
			alert('Please enter a valid value for the contract expiration date.');
			document.getElementById('RE_CONTRACT_EXPIRATION_DATE').focus();			
			return false;
		}
		if (expirationDate.substring(6,8) > '39')
			centuryIndic = '0';
		else
			centuryIndic = '1';
		var expirationDateCYYMMDD = centuryIndic + expirationDate.substring(6,8) + expirationDate.substring(0,2) + expirationDate.substring(3,5);
	
		if (effectiveDateCYYMMDD >= expirationDateCYYMMDD)
		{
			alert('Please enter a valid value for the effective date and the expiration date.')
			document.getElementById('RE_KEY_CONTRACT_EFFECTIVE_DATE').focus();
			document.getElementById('RE_CONTRACT_EXPIRATION_DATE').select();
			return false;
		}
		var obligNonoblig = document.getElementById('RE_OBLIGNON').value;
		var premPartPercent = document.getElementById('RE_PREM_PARTIC').value;
		if ((obligNonoblig == 'O') && ((premPartPercent <= '0.000')))
		{
			alert('Please enter Premium Participant% for an obligatory treaty.');
			document.getElementById('RE_PREM_PARTIC').focus();
			document.getElementById('RE_PREM_PARTIC').value="";
			return false;
		}
		var premSubject = document.getElementById('RE_PREM_SUBJECT').value;
		var lossSubject = document.getElementById('RE_LOSS_SUBJECT').value;
		if ((premSubject <= '0.000') && (lossSubject <= '0.000'))
		{
			alert('Please enter a valid value for either Premium Subject or Loss Subject.');
			document.getElementById('RE_PREM_SUBJECT').focus();
			document.getElementById('RE_PREM_SUBJECT').value="";
			return false;
		}
		var claim = trim(document.getElementById('RE_CLAIM').value);
		var claimant = trim(document.getElementById('RE_CLAIMANT').value);
		var coverage = trim(document.getElementById('RE_COVERAGE').value);
		var expense = trim(document.getElementById('RE_EXPENSE').value);
		if ((claim == '') && (claimant == '') && (coverage == '') && (expense == ''))
		{
			alert('Please enter a valid value for the excess key.')
			document.getElementById('RE_CLAIM').focus();
			return false;
		}
		
		var upperLimit = document.getElementById('RE_UPPER_LIMITS');
		var lowerLimit = document.getElementById('RE_LOWER_LIMITS');
		if ((upperLimit.value > '0.000') && (lowerLimit.value > '0.000')) {
			if(parseFloat(lowerLimit.value) >= parseFloat(upperLimit.value)) {
				alert('Please enter a valid value for the Upper Limit. ' + document.getElementById('RE_UPPER_LIMITS'));
				document.getElementById('RE_UPPER_LIMITS').focus();
				document.getElementById('RE_UPPER_LIMITS').value="";
				return false;
			}
		}
    }//end of else
		set_busy_icon();
		disableSubmitButtons();
		document.forms[0].submit();
}

function effectiveExpirationDateValidate(effdate, expdate){
	var effdateParts = effdate.split("/");
	var effdateCYYMMDD = '';
	if (effdateParts[2] <= 39)
		effdateCYYMMDD = '1' + effdateParts[2] + effdateParts[0] + effdateParts[1];
	else
		effdateCYYMMDD = '0' + effdateParts[2] + effdateParts[0] + effdateParts[1];

	var expdateParts = expdate.split("/");
	var expdateCYYMMDD = '';
	if (expdateParts[2] <= 39)
		expdateCYYMMDD = '1' + expdateParts[2] + expdateParts[0] + expdateParts[1];
	else
		expdateCYYMMDD = '0' + expdateParts[2] + expdateParts[0] + expdateParts[1];

	if (Number(expdateCYYMMDD) <= Number(effdateCYYMMDD))
	{
		alert('Effective Date should be less than Expiration Date.');
		return false;
	}
}
//FSIT 152315 -- Start
/*
function returnToContractListPage(){
		var mco = top.First.document.CommandCenterForm.MasterCompany.value;
		loc = top.First.document.CommandCenterForm.Location.value;
	//	top.FrameMain.location = "../jsp/BasReinsContractList.jsp?&LOC="+ loc + "&MCO=" + mco;		
    top.First.location = "../jsp/BasReinsContractList.jsp?&LOC="+ loc + "&MCO=" + mco;	
}
*/
/*
function returnToContractListPage(){
	set_busy_icon(); 		
	var formRef = document.getElementById("Reinsurance_Contract_1_0");
	var actionURL = "../jsp/BasReinsContractList.jsp?&LOC="+ top.First.document.getElementById("Location").value + "&MCO=" + top.First.document.getElementById("MasterCompany").value;
	formRef.action= actionURL;			
	formRef.submit();	
*/
function returnToContractListPage(){
	set_busy_icon(); 		
        var continueOrNot = "";
	if (parent.First != null && parent.First.document.getElementById("continueOrNot") != null)
		continueOrNot = parent.First.document.getElementById("continueOrNot").value;
	if (continueOrNot == "Y")
		parent.location = parent.First.document.getElementById("parentLocation").value;
	else
	        parent.location = "../jsp/BasReinsContractList.jsp?&LOC="+ top.First.document.getElementById("Location").value + "&MCO=" + top.First.document.getElementById("MasterCompany").value;
	return false;	
}
//FSIT 152315 -- End

function displayReinsurancePage(reqCode) {
		if(reqCode == "BASRICONCHGRq") {
			document.getElementById("RE_CONTRACT_EXPIRATION_DATE").focus();
			document.getElementById("RE_KEY_CONTRACT_ID").readOnly=true;
			document.getElementById("RE_KEY_CONTRACT_ID").className='rf';
			document.getElementById("RE_KEY_CONTRACT_EFFECTIVE_DATE").readOnly=true;
			document.getElementById("RE_KEY_CONTRACT_EFFECTIVE_DATE").className='rf';
			document.getElementById("ID_RE_DATE_ENTRY").style.top  = 410;
			document.getElementById("RE_DATE_ENTRY").readOnly=true;
			document.getElementById("RE_DATE_ENTRY").className='rf';
			document.getElementById("ID_L_DATE_ENTRY").style.top  = 410;
			document.getElementById("ID_RE_UPDATE_DATE").style.top  = 410;
			document.getElementById("RE_UPDATE_DATE").readOnly=true;
			document.getElementById("RE_UPDATE_DATE").className='rf';
			document.getElementById("ID_L_LAST_UPDATE").style.top  = 410;
			document.getElementById("ID_L_CANCEL_DATE").style.visibility = 'hidden';
			document.getElementById("ID_L_REASON").style.visibility = 'hidden';
			document.getElementById("RE_CANCEL_DATE").style.visibility = 'hidden';
			document.getElementById("RE_CANCEL_REASON").style.visibility = 'hidden';
			document.getElementById("ID_Reset_Button").style.top  = 470;
			document.getElementById("ID_Submit_Button").style.top  = 470;
			document.getElementById("ID_Return_Button").style.top  = 470;
			document.getElementById("ID_Return_BusinessDef").style.top  = 470;
		} 
		if(reqCode == "BASRICONADDRq") {
			document.getElementById("RE_CONTRACT_EXPIRATION_DATE").focus();
			document.getElementById("ID_L_CANCEL_DATE").style.visibility = 'hidden';
			document.getElementById("ID_L_LAST_UPDATE").style.visibility = 'hidden';
			document.getElementById("ID_L_DATE_ENTRY").style.visibility = 'hidden';
			document.getElementById("ID_L_REASON").style.visibility = 'hidden';
			document.getElementById("RE_CANCEL_DATE").style.visibility = 'hidden';
			document.getElementById("RE_CANCEL_REASON").style.visibility = 'hidden';
			document.getElementById("ID_RE_DATE_ENTRY").style.visibility = 'hidden';
			document.getElementById("RE_UPDATE_DATE").style.visibility = 'hidden';
			document.getElementById("ID_L_BLACK_LINE_3").style.visibility = 'hidden';
			document.getElementById("ID_Reset_Button").style.top  = 440;
			document.getElementById("ID_Submit_Button").style.top  = 440;
			document.getElementById("ID_Return_Button").style.top  = 440;
		    var status = trim(document.getElementById("RE_STATUS_FLAG").value);		    
		    if (status == 'Y'){
		    	document.getElementById("ID_Return_BusinessDef").style.top  = 450;
		    }else {
		    	document.getElementById("ID_Return_BusinessDef").style.visibility  = 'hidden';
		    	document.getElementById("ID_Return_Button").style.left  = 530;
		    }						
		}
		if(reqCode == "BASRICONINQRq") {	
			if( ((trim(document.getElementById('RE_CANCEL_DATE').value)) != '') && 
			(trim(document.getElementById('RE_CANCEL_REASON').value) != '')) {	
				document.getElementById("ID_Return_Button").style.top = 475;	
				document.getElementById("ID_Return_BusinessDef").style.left = 490;	
				document.getElementById("ID_Return_BusinessDef").style.top = 475;		
			}
			else {
				document.getElementById("ID_RE_DATE_ENTRY").style.top  = 410;
				document.getElementById("ID_L_DATE_ENTRY").style.top  = 410;
				document.getElementById("ID_RE_UPDATE_DATE").style.top  = 410;
				document.getElementById("ID_L_LAST_UPDATE").style.top  = 410;
				document.getElementById("ID_L_CANCEL_DATE").style.visibility = 'hidden';
				document.getElementById("ID_L_REASON").style.visibility = 'hidden';
				document.getElementById("RE_CANCEL_DATE").style.visibility = 'hidden';
				document.getElementById("RE_CANCEL_REASON").style.visibility = 'hidden';
				document.getElementById("ID_Return_Button").style.top = 475;	
				document.getElementById("ID_Return_BusinessDef").style.left = 490;	
				document.getElementById("ID_Return_BusinessDef").style.top = 475;							
			}
			document.getElementById("ID_Return_Button").style.left  = 370;
			document.getElementById("ID_Proc_Message").style.visibility = 'hidden';
			document.getElementById("PROC_MESSAGE").style.visibility = 'hidden';
		}		
		if(reqCode == "BASRICONCANRq") {
			if( ((trim(document.getElementById('RE_CANCEL_DATE').value)) != '') && (trim(document.getElementById('RE_CANCEL_REASON').value) != '')){
				document.getElementById("RE_CANCEL_DATE").readOnly = true;
				document.getElementById("RE_CANCEL_DATE").className='rf';
				document.getElementById("RE_CANCEL_REASON").readOnly = true;
				document.getElementById("RE_CANCEL_REASON").className='rf';
				document.getElementById("ID_Submit_Button").style.visibility = 'hidden';
				document.getElementById("ID_Return_Button").style.left = 370;
				document.getElementById("ID_Return_Button").style.top = 505;
				document.getElementById("ID_Return_BusinessDef").style.left = 500;				
			} else {
				document.getElementById("RE_CANCEL_DATE").readOnly = false;
				document.getElementById("RE_CANCEL_DATE").className='ef';
				document.getElementById("RE_CANCEL_REASON").readOnly = false;
				document.getElementById("RE_CANCEL_REASON").className='ef';
				document.getElementById("RButton").style.visibility = 'visible';				
	    	}			
		}
		reset_busy_icon();		
}
function returnToBusinessDefinitionPage() {
	var fullName = trim(document.getElementById('RE_FULL_NAME').value);
	var contractID = trim(document.getElementById('RE_KEY_CONTRACT_ID').value);
	var contractEffDate = trim(document.getElementById('RE_KEY_CONTRACT_EFFECTIVE_DATE').value);
	var loc = trim(document.getElementById('BC_KEY_LOCATION_COMPANY').value);
	var mco = trim(document.getElementById('BC_KEY_MASTER_COMPANY').value);
	var reqCode = document.forms[0].REQUESTCODE.value;
	var urlFormed ="";
	if(reqCode == "BASRICONCANRq")
	{
		if( ((trim(document.getElementById('RE_CANCEL_DATE').value)) != '') && (trim(document.getElementById('RE_CANCEL_REASON').value) != ''))
		{
			urlFormed = "../jsp/ReinDispBusDefFrame.jsp?contractID=" + contractID + "&contractEffDate=" + contractEffDate + "&firstTime=Y&reqCode=" + reqCode;
	    } else {
	        urlFormed = "../jsp/ReinAddBusDef.jsp?contractID=" + contractID + "&contractEffDate=" + contractEffDate + "&LOC=" + loc + "&MCO=" + mco + "&fullName=" + fullName + "&reqCode=" + reqCode;
	    }
	} else if(reqCode == "BASRICONINQRq")  {
			urlFormed = "../jsp/ReinDispBusDefFrame.jsp?contractID=" + contractID + "&contractEffDate=" + contractEffDate + "&firstTime=Y&reqCode=" + reqCode;
	} 
	else 
	{
	   	urlFormed = "../jsp/ReinAddBusDef.jsp?contractID=" + contractID + "&contractEffDate=" + contractEffDate + "&LOC=" + loc + "&MCO=" + mco + "&fullName=" + fullName + "&reqCode=" + reqCode;
	}	
	window.location = urlFormed;
	disableSubmitButtons(); 
	set_busy_icon();   
}
function hideElement(arg) {
	var type = typeof(arg);
	var obj = (type == 'string') ? document.getElementById(arg) : arg;
	var objName = obj.name;
	var p = obj.parentNode

	obj.style.display = 'none';

	if((p.id == 'ID_' + objName) || obj.type == 'submit' || obj.type == 'reset') {
		p.style.display = 'none';
	}
}
// FSIT 150645 (FSIT 116322 Resolution ID 49776 ) - Jacada Code conversion - End

//FSIT 155567 Start
function submitPTCppGAUSUnitZip() 
{
if (!ValidatePage()) 
return false;

	if( (document.getElementById('GU_RATE_STATE').value == "NM") && (document.getElementById('GU_USER_NUMBER_1').value == 0) )
	{
	alert("Please enter the value of the field Num Of Plates (New Mexico Only)");
	document.getElementById("GU_USER_NUMBER_1").focus();
	reset_busy_icon();
	   	return false;
	}

	document.forms[0].submit();
}
//FSIT 155567 End
// FSIT 156605 - WAG - BOP Plus: Additional Interest Requirement - Start
function doSelectIAddInt()
{
var AISelecturl = "../jsp/PP11AttachItemCovGrid.jsp?KEY="+document.forms[0].fullkey.value;
window.open(AISelecturl,"POINTAISelectGrid","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,status=yes");
}
// FSIT 156605 - WAG - BOP Plus: Additional Interest Requirement - End
// FSIT 138338 - Start
function ChckCountyCde()
{

	if(document.getElementById("COMMON_DESC_POLICY_EFFECTIVE_DATE").value >= "1150201")
	{
		 if (document.getElementById("GU_INDICATOR_19").value == "")
		{
			alert("Wiring Type is required. Please enter and submit.");
			document.getElementById("GU_INDICATOR_19").focus();
			reset_busy_icon();
				return false;
		}
		else  if (document.getElementById("GU_INDICATOR_20").value == "")
		{
			alert("Heating Type is required. Please enter and submit.");
			document.getElementById("GU_INDICATOR_20").focus();
			reset_busy_icon();
				return false;
		}
		else if (document.getElementById("GU_USER_CODE_9").value == "")
		{
			alert("Heating Year is required. Please enter and submit.");
			document.getElementById("GU_USER_CODE_9").focus();
			reset_busy_icon();
				return false;
		}

		else if (document.getElementById("GU_USER_CODE_20").value == "")
		{
			alert("Roofing Year is required. Please enter and submit.");
			document.getElementById("GU_USER_CODE_20").focus();
			reset_busy_icon();
				return false;
		}
		else if (document.getElementById("GU_USER_DOLLAR_14").value == "")
		{
			alert("Total Building Square Footage is required. Please enter and submit.");
			document.getElementById("GU_USER_DOLLAR_14").focus();
			reset_busy_icon();
				return false;
		}
		 if (document.getElementById("GU_USER_CODE_9").value.length < 4)
		{
			alert("Heating Year should be of 4 digit ");
			document.getElementById("GU_USER_CODE_9").focus();
			reset_busy_icon();
			return false;
		}
		 if (document.getElementById("GU_USER_CODE_20").value.length < 4)
		{
			alert("Roofing Year should be of 4 digit ");
			document.getElementById("GU_USER_CODE_20").focus();
			reset_busy_icon();
			return false;
		}

		 if (document.getElementById("GU_USER_DOLLAR_14").value == 0 || document.getElementById("GU_USER_DOLLAR_14").value < 0)
		{
			alert("Total Building Square Footage should be greater than 0 ");
			document.getElementById("GU_USER_DOLLAR_14").focus();
			reset_busy_icon();
			return false;
		}
	}
		
		


	 if (document.getElementById("GU_COUNTY_TAX_CODE").value == "")
    {
	alert("*County is required. Please enter and submit.");
	document.getElementById("GU_COUNTY_TAX_CODE").focus();
	reset_busy_icon();
	   	return false;
    }
	if (!ValidatePage()) 
    {
       return false;
    }
document.forms[0].submit();
}

// FSIT 138338 - End 
// FSIT 152315 (FSIT 86266 Resolution ID 42313) Jacada Code conversion DMV Manual Submission - Start
function showInsuredOrVehicleRecord(RecordStatus){
	  var symbol = document.getElementById('PA_KEY_SYMBOL').getAttribute("VALUE");
	  if (symbol == null || symbol.length == 0)
	  {
	  	symbol = symbol + "   ";
	  }
	  else if(symbol.length == 2)
	  {
	        symbol = symbol + " ";
	  }
	  else if (symbol.length == 1)
	  {
		symbol = symbol + "  ";
	  }
	  //FSIT 210453 - Start
	  var drvdtl_reporting_state = document.getElementById('DRVDTL_USER_CODE_5').value;
	  var drvdtl_trans_code = document.getElementById('DRVDTL_USER_CODE_6').value;
	  var drvdtl_license_date = document.getElementById('DRVDTL_LICENSE_DATE').value;
	  var drvdtl_first_name = document.getElementById('DRVDTL_FIRST_NAME').value;
	  var drvdtl_last_name = document.getElementById('DRVDTL_LAST_NAME').value;
	  var drvdtl_full_name = document.getElementById('DRVDTL_FULLNAME_1').value;
  	  //FSIT 210453 - End
	  //FSIT Issue # 111500 Resolution ID 45822 - Start
	  var unitNo = document.getElementById('PA_KEY_UNIT_NUMBER').getAttribute("VALUE");
	  unitNo = (unitNo == null) ? "" : trim(unitNo);
	  for (var i = unitNo.length; i < 5; i++) {
			  unitNo = "0" + unitNo;
	  }
	  var driverID = document.getElementById('PA_KEY_DRIVER_ID').getAttribute("VALUE");
	  driverID = (driverID == null) ? "" : trim(driverID);
	  for (var i = driverID.length; i < 5; i++) {
			  driverID = "0" + driverID;
	  }
	  /*var key = '"' + document.getElementById('PA_KEY_LOCATION_COMPANY').getAttribute("VALUE")
	                + document.getElementById('PA_KEY_MASTER_COMPANY').getAttribute("VALUE")
	                + symbol
	                + document.getElementById('PA_KEY_POLICY_NUMBER').getAttribute("VALUE")
	                + document.getElementById('PA_KEY_MODULE').getAttribute("VALUE")
	                + document.getElementById('PA_KEY_UNIT_NUMBER').getAttribute("VALUE")
	                + document.getElementById('PA_KEY_DRIVER_ID').getAttribute("VALUE")
	                + RecordStatus +'"';*/
	  var key = '"' + document.getElementById('PA_KEY_LOCATION_COMPANY').getAttribute("VALUE")
	                + document.getElementById('PA_KEY_MASTER_COMPANY').getAttribute("VALUE")
	                + symbol
	                + document.getElementById('PA_KEY_POLICY_NUMBER').getAttribute("VALUE")
	                + document.getElementById('PA_KEY_MODULE').getAttribute("VALUE")
	                + unitNo
	                + driverID
	                + RecordStatus +'"';
	  //FSIT Issue # 111500 Resolution ID 45822 - End
	  var targeturl = 'jsp/CppDMVProcessing.jsp?';
	  //FSIT 210453 - Start
	  //url = '../servlet/POINTManager?KEY='+escape(key)+'&target='+escape(targeturl) +'&REQUESTCODE=CPPDMVPRADDRq';
	  url = '../servlet/POINTManager?KEY='+escape(key)+'&target='+escape(targeturl) +'&REQUESTCODE=CPPDMVPRADDRq'+'&DRVDTL_USER_CODE_6='+drvdtl_trans_code+'&DRVDTL_USER_CODE_5='+drvdtl_reporting_state+'&DRVDTL_LICENSE_DATE='+drvdtl_license_date+'&DRVDTL_FULLNAME_1='+drvdtl_full_name+'&DRVDTL_FIRST_NAME='+escape(drvdtl_first_name)+'&DRVDTL_LAST_NAME='+escape(drvdtl_last_name);
	  //FST 210453 - End
	  window.location=url;
	  set_busy_icon();
}
function backTab(input){
 if (input.value.length == input.maxLength){	 
	input.focus();
	input.select();
 }
}
function checkFields(currField) {
  if(!currField.value == '') {
    fieldsValidated = true;
  }
}

function checkSpecialChar()
{
	var reportDesc = document.getElementById("REPORT_DESC").value;
	var spclChars = "!@#$%^&*()+=-[]\\\';,./{}|\":<>?";
	for(var i = 0; i < reportDesc.length; i++)
	{
		if (spclChars.indexOf(reportDesc.charAt(i)) != -1)
		{
			alert("Special charcters are not allowed.");
			document.getElementById("REPORT_DESC").value = "";
			document.getElementById("REPORT_DESC").focus(); 
			return false;
		}
	}

}
//FSIT 152315 (FSIT 86266 Resolution ID 42313) Jacada Code conversion DMV Manual Submission - End

// FSIT 185424 - Zip code Issue ( Error 8 digits in zipcode getting submitted) - Starts
function ValZipCode()
{
var strMaskDelimiter = "-";


var zipCode = document.getElementById("BC_ZIP_CODE").value;
zipCode=zipCode.replace(/\s/g, '');
zipCode=zipCode.replace(strMaskDelimiter, '');

if(((zipCode.length > 5 ) && (zipCode.length <9))  || (zipCode.length < 5 ))
	{
			alert("Please enter Zipcode in correct format");
			document.getElementById("BC_ZIP_CODE").focus();
			return false;
	}
	else
	{
		if(document.forms[0].target.value == "jsp/Cancellation_N_A_Off.jsp")
			doImmediateCancel();
		else
		{
			if(document.forms[0].target.value != "jsp/ISSUE_QUOTE.jsp" && document.forms[0].target.value != "jsp/Reinstatement.jsp")
			enablePayPlan();
		}
	}
}

// FSIT 185424  - Ends 

// FSIT 150645 (FSIT 116322 Resolution ID 49776 ) - Jacada Code conversion - Start WAG FSIT#152315 Start

function adjustContainer() {
	var procMessageArray;
	var procMessageEl;


	//Check for text area / input tag for Processing Message(must be part of form)
	//The if statements allow for assigning variables and checking for existence of an object at the same time.
	if(document.forms[0]) {
		if(procMessageEl = document.forms[0].PROC_MESSAGE);
		else if(procMessageEl = document.forms[0].Message);
		else if(procMessageEl = document.forms[0].msg);
		else if(procMessageEl = document.forms[0].PAY_ERROR_MSG);
	}

	//Move message to display
	if(procMessageEl && procMessageEl.value && (procMessageEl.value.length > 1)) {
		displayProcMessage(procMessageEl.value);
	}

	//If there is an iframe containing a grid on the screen, automatically adjust dimensions.  Also, on every resize, do the same.
	if(document.getElementById('grid') && (document.getElementById('grid').tagName.toLowerCase() == 'div')) {
		adjustIFrameSize();

		//Resize grid container when the window is resized (ie user presses F11 to go to fullscreen)
		if(window.attachEvent) {
			window.attachEvent('onresize', adjustIFrameSize);
		}
		else if(window.addEventListener) {
			window.addEventListener('resize', adjustIFrameSize);
		}

		//Resize grid on collapse/expand processing message
		var ce;
		if(ce = document.getElementById('ceicon')) {
			if(ce.attachEvent) {
				ce.attachEvent('onclick', adjustIFrameSize);
			}
			else if(ce.addEventListener) {
				ce.addEventListener('click', adjustIFrameSize);
			}
		}
	}
	
 }	
function adjustIFrameSize() {
 	var iframeDiv = document.getElementById('grid');
 	var background = document.getElementById('PageBackground');
 	var riserOffset = 0;
 	var gridOffsetTop = iframeDiv.offsetTop;
	var inputList = document.getElementsByTagName("input");
	var input;
	var foundNode = false;

 	if (document.getElementById('shortriser')) {
 		 riserOffset = document.getElementById('shortriser').offsetTop;
 	} else if (document.getElementById('riser')) {
 		riserOffset = document.getElementById('riser').offsetTop;
 	}

 	//for block looks for any buttons below the grid.
	for(i=0; inputList[i] && !foundNode; i++) {
		input = inputList[i];
		if((input.type == 'button' || input.type == 'submit') || (input.type == 'reset')) {
			//Compare offset top with grid's offset top.  Try button's offset first, if zero then use its parent element.
			var iOffset = (input.offsetTop == 0) ? input.parentNode.offsetTop : input.offsetTop;
			if(iOffset > gridOffsetTop) {
				foundNode = true;
			}
		}
	}

// FSIT 156045 -This piece of code is commented out(pulled for Jacada Project- Start
	//if buttons are found below the grid, we do not want to resize the height as they will be overlayed.
	
	//if(!foundNode) {
	//	var newHeight = background.offsetHeight - gridOffsetTop - riserOffset - 5;
	//	if(newHeight > 50) {
	//		iframeDiv.style.height = newHeight + 'px';
	//	}
	// }

	//iframeDiv.style.width = (background.offsetWidth - 30) + 'px';
// FSIT 156045 -This piece of code is commented out(pulled for Jacada Project- End
}

/*
 * Function:	procMessage
 * param:		state: Integer, display state; 1: Display Processing Message Area, 2: Hide Processing Message Area, 3: Leave Processing Message Area display state
 * param:		pmh: Integer, Processing Message Area height in pixels.
 * Desciption:	Sets display and height of Processing Message Area.  Used to display, collapse or expand Processing Message Area.
 */
function procMessage(state, pmh) {
	var procMessage = document.getElementById('PROC_MESSAGE_PARENT');
	var procMessageDisplay;

	switch(state) {
	case 1:
		procMessageDisplay = 'block';
		break;
	case 2:
		procMessageDisplay = 'none';
		break;
	default:
		procMessageDisplay = procMessage.style.display;
	}

	//Set height of processing message container.
	if(pmh > -1) {
		document.getElementById('proc_message_trow').style.height = pmh + 'px';
	}

	//Display processing message.
	procMessage.style.display = procMessageDisplay;
}



/*
 * Function:	displayProcMessage
 * param:		message: Message to display.  If null value, the Processing Message will be hidden.
 * Desciption:	Displays a string in the Processing Message Area.  Linebreaks are converted to <br> tags
 * 				and consecutive spaces are reduced to a single space just like the HTML DOM does.
 * 				This is done so a new message can be compared to the existing message accurately.
 * 				If the string is identical to the old message, the method does not do anything.
 */
function displayProcMessage(message) {
	var procMessageDisplay = document.getElementById('PROC_MESSAGE_DISPLAY');
	var icon = document.getElementById('ceicon');

/*	if(message == null) {
		procMessage(2, 0);
		return;
	}
*/	message = message.replace(/(\r\n|[\r\n])/g, '<br>');
	message = message.replace(/\s+/g, ' ');

	if((message != '') && (message != ' ') && (procMessageDisplay.innerHTML != message)) {
		procMessageDisplay.innerHTML = message;
		icon.className = 'expand_icon';
		expandProcMessage(icon);
	}
}



/*
 * Function:	expandProcMessage
 * param:		icon: HTML DOM element that triggered the function.
 * Desciption:	If the collapse icon is showing on the screen, collapse the Processing Message body, change the corner images and reduce
 *				Processing Message Area container's height.
 *				If the expand icon is showing on the screen, expand the Processing Message body, change the corner images and increase
 *				Processing Message Area container's height.
 */
function expandProcMessage(icon) {

	if(icon.className == 'collapse_icon') {
		icon.className = 'expand_icon';
		//Collapse Processing Message area
		procMessage(1, 33);
		document.getElementById('proc_message_tl').className = 'proc_message_tl_closed';
		document.getElementById('proc_message_tr').className = 'proc_message_tr_closed';
		document.getElementById('proc_message_body').style.display = 'none';
		icon.nextSibling.nodeValue = 'Show Processing Message';
	} else {
		//Expand Processing Message area
		icon.className = 'collapse_icon';
		procMessage(1, 120);
		document.getElementById('proc_message_tl').className = 'proc_message_tl_open';
		document.getElementById('proc_message_tr').className = 'proc_message_tr_open';
		document.getElementById('proc_message_body').style.display = 'block';
		icon.nextSibling.nodeValue = 'Hide Processing Message';
	}
}
// FSIT 150645 (FSIT 116322 Resolution ID 49776 ) - Jacada Code conversion - Start WAG FSIT#152315 End

//PCR 321 - Rahul T ... Starts
function OnSubLivStockSuff()
{
	var objHDN1 = document.getElementById("GC_USER_NUMBER_HDN1_3");
	if(objHDN1.value == "" || objHDN1.value == null)
	{
		alert("Building Description is required.  Please enter and submit.");
		objHDN1.focus();
		return false;
	}
	var SelectedIndex = objHDN1.selectedIndex;
	if(SelectedIndex != 0)
	{
		var riskSbLoc = objHDN1.options[SelectedIndex].value;
		document.getElementById("GC_USER_NUMBER_3").value = riskSbLoc;
	}
	 if (!ValidatePage()) 
	{
		return false;
	}
	else
	{
		 document.forms[0].submit();
	}
}
//PCR 321 - Rahul T ... Ends
//FSIT # 203341 starts
function disableButtonAndSubmit()
{
	if (!ValidatePage()) 
			{
				reset_busy_icon();
				return false;
			}
			else
			{
				disableSubmitButtons();
				document.forms[0].submit();
			}
}
//FSIT # 203341 ends

// FSIT claim button issue - 196057 - starts 
function openFBLClaimSys()
{

		var reqkey = document.getElementById('fullkey').value;
		var pn1 = reqkey.substring(4,16);
		url = "https://qwserv.fblfinancial.com/ClaimViewWeb/lossRequestForm.htm?policyNumber="+pn1;
		window.open(url,"FBLCLAIMSSYSTEM","toolbar=no,fullscreen=no,height=550,width=600,scrollbars=yes,resizable=yes");
}

// FSIT claim button issue - 196057 - Ends 

//FSIT 212052 - Secondary Agent - Start
function validateSecondaryAgent()
{
	var secndryagnt = document.getElementById("EX02_USERTEXT_3").value ;
	if (secndryagnt.length > 7 )
	{
		for (var i=7; i < secndryagnt.length; i++) 
		{
			var sbstrsagent = secndryagnt.charAt(i);
			if (CharacterIsANumber(sbstrsagent))
			{
				alert("This is incorrect  secondary agent number");
				document.getElementById("EX02_USERTEXT_3").focus();
				return  false;
			}
		}			
	}
	else if(secndryagnt.length <= 7)
	{
		var b = 7-secndryagnt.length;
		for(i=0;i <b;i++)
		{
			secndryagnt = '0'+secndryagnt;
		}
		document.getElementById("EX02_USERTEXT_3").value = secndryagnt;
	}

	if (!ValidatePage()) 
	{
		return false;
	}
	else
	{
		 document.forms[0].submit();
	}
}

//FSIT 212052 - Secondary Agent - End

// git testing 