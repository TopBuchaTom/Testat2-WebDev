<!DOCTYPE html>

<html>
  <head>
    <meta charset="utf-8" />
    <meta name="author" content="Clemens Ottmair, Sebastian Dorn & Thomas Zacher">
    <meta name="description" content="Testat 2 - Gru&szlig;karteneditor">
    <title>Testat 2 - Gru&szlig;karteneditor</title>
    <link rel="stylesheet" href="General_Settings.css">
  </head>

  <body>
    <header title="Werkzeuge/Tools">
      <div class="leiste1">
        <!--hier mach ich PHP draus-->
        <img src="images/roller.png" id="roller" class="pict" />
        <img src="images/bicycle.png" id="bicycle" class="pict" />
        <img src="images/flugzeug.png" id="flugzeug" class="pict" />
        <img src="images/tee.png" id="tee" class="pict" />
        <img src="images/saxophon.png" id="saxophon" class="pict" />
        <img src="images/text.png" id="atext" class="pict" />
        <input type="color" value="{color}" onChange="{setColor}" />
      </div>
    </header>

    <main title="Vorschau/Preview">
      <svg id="svg"></svg>
    </main>

    <aside>
      <div class="leiste2">
        <img src="images/back1.jpg" class="back" draggable="false" />
        <img src="images/back2.jpg" class="back" draggable="false" />
        <img src="images/back3.jpg" class="back" draggable="false" />
        <img src="images/back4.jpg" class="back" draggable="false" />
        <img src="images/back5.jpg" class="back" draggable="false" />
        <img src="images/back6.jpg" class="back" draggable="false" />
        <img src="images/back7.jpg" class="back" draggable="false" />
        <img src="images/back8.jpg" class="back" draggable="false" />
      </div>
    </aside>

    <nav>
      <input type="text" id="textf" class="tf" disabled="disabled" />
      <label for="text">Text:</label>
      <input
        type="range"
        min="12"
        max="180"
        step="2.0"
        class="slider"
        id="size"
        value="150"
        disabled="disabled"
      />
      <select
        name="font"
        class="schrift"
        id="ff"
        onchange="fontf()"
        disabled="disabled"
      >
        <option value="arial">arial</option>
        <option value="verdana">verdana</option>
        <option value="Georgia">georgia</option>
        <option value="Palatino Linotype">Palatino Linotype</option>
        <option value="Book Antiqua">Book Antiqua</option>
        <option value="Helvetica">Helvetica</option>
        <option value="Arial Black">Arial Black</option>
        <option value="Impact">Impact</option>
        <option value="times new roman">times new roman</option>
      </select>
      <button onclick="load2()" class="load">Speichern in DB</button>
      <button onclick="load2()" class="load">Senden</button>
      <button onclick="load2()" class="load">&Ouml;ffnen</button>
    </nav>

    <script type="text/javascript" src="Logic.js"></script>
  </body>
</html>