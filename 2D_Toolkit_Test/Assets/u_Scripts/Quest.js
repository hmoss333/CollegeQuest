var radishes : int;
var notes : int;
//var message1 : boolean = false;
var message2 : boolean = false;
var message3 : boolean = false;
var noteMessage : boolean = false;
var radishMessage : boolean = false;
//var doorCheck : boolean = false;
//var stringMessage  = " ";
//var altStringMessage = " ";
var professorMessage1 = " ";
var professorMessage2 = " ";
var professor2Message1 = " ";
var professor2Message2 = " ";
var noteMessageString = " ";
var radishMessageString = " ";
//var quest1 : boolean = false;
var quest2 : boolean = false;
var quest3 : boolean = false;
var gui_Skin : GUISkin;


function OnTriggerEnter( other : Collider ) {    
    //If player picks up a collectable
    if (other.tag == "Trigger") 
    {
        radishes += 1;
        Destroy(other.gameObject);
        radishMessage = true;
    }
    if (other.tag == "Notes")
    {
    	notes += 1;
    	Destroy(other.gameObject);
    	noteMessage = true;
    }
    
    //if player talks to an important NPC
    if (other.tag == "Quest")
    {
    	//message1 = true;
    }
    if (other.tag == "Quest 2")
    {
    	message2 = true;
    }
    if (other.tag == "Quest 3")
    {
    	message3 = true;
    }
    
    //check door
    if ((other.tag == "Door_Lock") && (quest3 == true))
    {
    	Destroy(other.transform.parent.gameObject);
    }
}

function OnTriggerExit( other : Collider )
{
	if (other.tag == "Quest")
	{
		//message1 = false;
	}
	if (other.tag == "Quest 2")
	{
		message2 = false;
	}
	if (other.tag == "Quest 3")
	{
		message3 = false;
	}
}

function Wait()
{
	//set anything that uses wait back to false
	radishMessage = false;
	noteMessage = false;
}

function OnGUI()
{
	GUI.skin = gui_Skin;
	if (message2 == true)
	{
		//if notes are found
		if (notes == 1 || quest2 == true)
		{
			GUI.Label (Rect(0, Screen.height - 100, Screen.width, 50), professorMessage2);
   			quest2 = true;
   			notes = 0;
		}
		//if notes not found
		else
		{
			GUI.Label (Rect(0, Screen.height - 100, Screen.width, 50), professorMessage1);
		}
	}
	if (message3 == true)
	{
		if (radishes == 4 || quest3 == true)
		{
			GUI.Label (Rect(0, Screen.height - 100, Screen.width, 50), professor2Message2);
   			quest3 = true;
   			radishes = 0;
		}
		
		else
		{
			GUI.Label (Rect(0, Screen.height - 100, Screen.width, 50), professor2Message1);
		}
	}
	
	if (radishMessage == true)
	{
		GUI.Label (Rect(0, Screen.height - 100, Screen.width, 50), radishMessageString);
		Invoke("Wait", 3);
	}
	if (noteMessage == true)
	{
		GUI.Label (Rect(0, Screen.height - 100, Screen.width, 50), noteMessageString);
		Invoke("Wait", 3);
	}
}