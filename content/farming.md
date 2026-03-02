### What is TP Farming?
This is a lazy farming method for Demon Slayer that utilizes the `Chaos Lock` skill and `Infernal Concussion`.

- **Chaos Lock**: Set to `CTRL`
- **Infernal Concussion**: Set to `ALT`

Note that we have seen in the past some players need to reverse it; it seems to depend on your exact keyboard. If it's not working try swapping the keybinds.

Once you have the keybinds set-up, switch your keyboard language to any language which supports AltGr. The most commonly used ones are Spanish (which is where the name Spanish farming comes from) or English (United Kingdom). Using English UK makes you not type weird characters like a weirdo so I would recommend that.

After this, you can just hold down AltGr and your character will be zipping across the map killing all the mobs while your pets automatically loot. Your character will automatically stop attacking every minute which requires releasing and repressing the key. Methods to bypass this are strictly against ToS and you may be met with a ban if you try.

We'll reference keyboard settings a few more times in this section. You can acess this on your comptuer by pressing your windows key -> searching keyboard -> click Keyboard. It will bring up a screen like this:

![Keyboard Settings](keyboard.png)

You will want to set repeat delay to the shortest possible. Repeat rate can be tuned with various guidance in the upcoming sections.

### Do I need a vac pet while TP Farming?

No. Most maps in the game a vac pet improves your rates by under 5%, with some being close to 0%. However, maps with dense platform layouts may exhibit larger differences. Anecdotally Tallahart has many of these, but otherwise it doesnt seem very common.

### Do I need to pop a green pot while TP Farming?

Maybe. It will generally lead to higher rates, but depending on map layout it may have no impact. You will need to test for your map if it benefits you or not.

### Why am I running out of Demon Force (DF)?
- **Cooldown Skip**: If your Inner Ability or Artifacts have Cooldown Skip, you will sometimes chaos lock twice in a row. This consumes extra DF, so you should spec out of CD skip if you are having issues.
- **One-Shotting**: If you kill mobs on the first hit of infernal concussion, you will not regain enough DF.
- **Bad Map Layout**: Many early game maps are not very good for TP farming due to low mob density. The method only really starts to shine in Grandis maps.
- **Repeat Rate**: Higher repeat rate makes you teleport more frequently which can cause you to run out of DF faster. It's possible decreasing your rate will fix your issues.

### Should I use HEXA Infernal Concussion?
The HEXA version of infernal concussion removes the two part attack, guaranteeing almost all your mob skills will fall in the 0.7s DF lockout from chaos lock. However, the tradeoff is the damage requirement to farm becomes significantly lower as well as your hitbox on infernal concussion is much improved. In order to fix the issues, you will need to utilize `Boundless Rage` to sustain your DF. To increase the uptime you can utilize the Relentless special node and stacking buff duration. I find that ~130% buff duration is enough to sustain near 100% uptime.

### Should I use Sol Janus?
Yes! Dusk mode is extremely overpowered with TP farming. It allows you to basically full clear maps with no effort.

### Why is my game crashing/mem leaking?
There appear to be some auto DC measures in the game such as chaos locking to a monster which is already dead. So if your internet connection is even slightly unstable, you will frequently crash. There is no remedy to this other than ensuring your connection to the game is extremely stable. 

We have observed that holding down the AltGr key leads to a slow memory leak in the game. This manifests as "Committed" memory rather than traditional memory. There are some weird implications of this, but in summary to combat this you can:
- Decrease your repeat rate. We observe that higher repeat rates lead to mem leaking much faster.
- Free up hard drive space on your machine. You will start experiencing memory corruption issues when your committed memory exceeds the spare disk space on your machine, with a crash guaranteed at around ~64 GB.
