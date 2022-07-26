//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  const trimmed_message = message.trim();
  if(trimmed_message.slice(-1)==='?' && (trimmed_message.match(/^[A-Z]*$/)))
    return "Calm down, I know what I'm doing!";
  if(trimmed_message.slice(-1)==='?')
    return "Sure.";
  if(!(/[a-zA-Z]/.test(trimmed_message)) && !(/\d/. test(trimmed_message)) )
    return "Fine. Be that way!";
  if(trimmed_message.match(/^[A-Z]*$/))
    return  "Whoa, chill out!";

  return "Whatever.";
};
