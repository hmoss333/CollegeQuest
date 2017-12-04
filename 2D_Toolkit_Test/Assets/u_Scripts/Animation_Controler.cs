using UnityEngine;
using System.Collections;

public class Animation_Controler : MonoBehaviour 
{
	tk2dAnimatedSprite anim;
	float speed = 0.25f;
	int lastButtonPress = 0;
	bool isTalking = false;
	bool isTalking2 = false;
	bool hasTalked = false;
	bool SGuyTalked = false;

    float horizontal;
    float vertical;
	
	// Use this for initialization
	void Start () 
	{
		anim = GetComponent<tk2dAnimatedSprite>();
	}
	
	void OnTriggerEnter(Collider collision)
	{
		if ((collision.gameObject.tag == "Event")) 
    	{
			isTalking = true;
    	}
		if ((collision.gameObject.tag == "SGuy" && SGuyTalked == false))
		{
			anim.Play("Up_Idle");
			lastButtonPress = 0;
			isTalking2 = true;
		}
	}
	
	void Wait()
	{
		isTalking = false;
		//hasTalked = true;
	}
	
	void Wait2()
	{
		isTalking2 = false;
		//SGuyTalked = true;
	}

	// Update is called once per frame
	void FixedUpdate () 
	{	
		if (isTalking == true)
		{
			Invoke("Wait", 20);
			//isTalking = false;
		}
		else if (isTalking2 == true)
		{
			Invoke("Wait2", 20);
		}
		
		//Normal movement conditions
		else 
		{
            horizontal = Input.GetAxisRaw("Horizontal");
            vertical = Input.GetAxisRaw("Vertical");
            
            //Moving Animations
			//Move Up
			if (vertical > 0)
   			{
   				transform.Translate(0,0,speed * Time.deltaTime,Space.World);
                //if (Input.GetKeyDown(KeyCode.UpArrow))
                //{
                anim.Play("Walk_Up");
				//}
				lastButtonPress = 0;
   				return;
   			}
			//Move Left
			else if (horizontal > 0)
			{
				transform.Translate(-speed * Time.deltaTime,0,0,Space.World);
				//if (Input.GetKeyDown(KeyCode.LeftArrow))
				//{
				anim.Play("Walk_Left");
				//}
				lastButtonPress = 1;
				return;
			}
			//Move Down
			else if (vertical < 0)
			{
				transform.Translate(0,0,-speed * Time.deltaTime,Space.World);
                //if (Input.GetKeyDown(KeyCode.DownArrow))
                //{
                anim.Play("Walk_Forward");
				//}
				lastButtonPress = 2;
				return;
			}
			//Move Right
			else if (horizontal < 0)
			{
				transform.Translate(speed * Time.deltaTime,0,0,Space.World);
                //if (Input.GetKeyDown(KeyCode.RightArrow))
                //{
                anim.Play("Walk_Right");
				//}
				lastButtonPress = 3;
				return;
			}



            //Idle Animations
            if (horizontal == 0 && vertical == 0)
            {			
                if (lastButtonPress == 0)
                {
                    anim.Play("Up_Idle");
                }

                else if (lastButtonPress == 1)
                {
                    anim.Play("Left_Idle");
                }

                else if (lastButtonPress == 2)
                {
                    anim.Play("Forward_Idle");
                }

                else if (lastButtonPress == 3)
                {
                    anim.Play("Right_Idle");
                }
            }
		}
	}		
}