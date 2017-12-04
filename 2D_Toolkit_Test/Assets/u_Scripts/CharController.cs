using UnityEngine;
using System.Collections;

public class CharController : MonoBehaviour
{
    private float m_speed = .25f;
    private Facing m_facing = Facing.Down;
    private bool m_idle = true;

    private tk2dAnimatedSprite m_anim;

    private void Awake()
    {
        m_anim = GetComponent<tk2dAnimatedSprite>();
    }

    // Use this for initialization
    private void Start ()
    {

    }

    // Update is called once per frame
    private void Update ()
    {
        float horizontal = Input.GetAxis("Horizontal");
    	float vertical = Input.GetAxis("Vertical");
    	float horizontalAbs = Mathf.Abs(horizontal);
    	float verticalAbs = Mathf.Abs(vertical);

    // Instead of updating both directions on a single frame, we limit it to movement on a single axis by updating x or z.
    	if (horizontalAbs > verticalAbs)
    	{
       		transform.Translate(new Vector3(horizontal * m_speed * Time.deltaTime, 0.0f, 0.0f), Space.World);
    	}
    	else
    	{
        	transform.Translate(new Vector3(0.0f, 0.0f, vertical * m_speed * Time.deltaTime), Space.World);
    	}

    	if (horizontal < 0.0f && m_facing != Facing.Left) //Only update to left facing if we are not already facing left.
    	{
        	m_idle = false;
        	//Set the new facing.
        	m_facing = Facing.Left;
        	UpdateFacing();
    	}
    	else if (horizontal > 0.0f && m_facing != Facing.Right)//Only update to Right facing if we are not already facing Right.
    	{
        	m_idle = false;
        	//Set the new facing.
        	m_facing = Facing.Right;
        	UpdateFacing();
    	}
    	else if (vertical > 0.0f && m_facing != Facing.Up)//Only update to Up facing if we are not already facing Up.
    	{
        	m_idle = false;
        	//Set the new facing.
        	m_facing = Facing.Up;
        	UpdateFacing();
    	}
    	else if (vertical < 0.0f && m_facing != Facing.Down)//Only update to Down facing if we are not already facing Down.
    	{
        	m_idle = false;
        	//Set the new facing.
        	m_facing = Facing.Down;
        	UpdateFacing();
    	}

    	if (m_idle == false && horizontal == 0.0f && vertical == 0.0f) //This is an edge case. This will happen when horizontal and vertical are equal (which is basically when we stop moving since both axis will return 0.0f).
    	{
        	m_idle = true;
        	PlayIdleAnimation();
        	//***Key to starting the correctly-facing walking animation again.
        	m_facing = Facing.Idle;
    	}
	}

    /// <summary>
    /// Plays the correct walking animation depending on the current facing.
    /// </summary>
    private void UpdateFacing()
    {
        switch (m_facing)
        {
            case Facing.Down:
                m_anim.Play("Walk_Down");
                break;
            case Facing.Left:
                m_anim.Play("Walk_Left");
                break;
            case Facing.Right:
                m_anim.Play("Walk_Right");
                break;
            case Facing.Up:
                m_anim.Play("Walk_Up");
                break;
        }
    }

    /// <summary>
    /// Plays the correct idle animation depending on the current facing.
    /// </summary>
    private void PlayIdleAnimation()
    {
        switch (m_facing)
        {
            case Facing.Down:
                m_anim.Play("Down_Idle");
                break;
            case Facing.Left:
                m_anim.Play("Left_Idle");
                break;
            case Facing.Right:
                m_anim.Play("Right_Idle");
                break;
            case Facing.Up:
                m_anim.Play("Up_Idle");
                break;
        }
    }

    enum Facing
    {
        Up,
        Right,
        Down,
        Left,
        Idle//***New variable used when we go into Idle so that we can update our facing correctly once we start moving again.
    }
}