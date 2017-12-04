var dest: Transform; // drag the destination object here
var sound: AudioClip; // define a teleport sound, if you want

function OnTriggerEnter(other: Collider){
  if (other.tag == "Player"){
    // move the player and align it to the dest object:
    other.transform.position = dest.position;
    other.transform.rotation = dest.rotation;
    // if some sound defined, play it at the destination:
    if (sound) AudioSource.PlayClipAtPoint(sound, dest.position);
  }
}