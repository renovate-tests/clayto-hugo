import PFElement from "../pfelement/pfelement.js";

class PfeIconSet {
  /**
   * Run the icon set's name resolver to turn an icon name into an icon path, id, etc.
   */
  parseIconName(iconName) {
    return this._parseIconName(iconName, this.name, this.path);
  }

  /**
   * Create a new icon set.  Icon sets have a name (ie, a namespace).  For
   * example, an icon with a name of "rh-logo" represents a "logo" icon from the
   * "rh" set.  Icon set names are always separated from the rest of the icon
   * name with a hyphen `-`.  This means that set names cannot contain a hyphen.
   *
   * @param {String} name the namespace of the icon set
   * @param {String} path the web-accessible path to the icon set (for instance, a CDN)
   * @param {Function} parseIconName an optional function to combine the path and an icon name into a final path.  The function will be passed the namespaced icon name (for example, "rh-api" where rh is the namespace and api is the individual icon's name)
   * @returns {Object} an object with the status of the icon set installation, such as `{ result: true, text: 'icon set installed' }` or `{ result: false, text: 'icon set is already installed' }`
   */
  constructor(name, path, parseIconName) {
    this.name = name;
    this.path = path;
    this._parseIconName = parseIconName;
  }
}

/**
 * An icon name parser for the PFE built-in icon sets.
 */
function parseIconName(name, iconSetName, iconSetPath) {
  const [, , iconName] = /^([^-]+)-(.*)/.exec(name);

  const iconId = `${iconSetName}-icon-${iconName}`;
  const iconPath = `${iconSetPath}/${iconId}.svg`;

  return {
    iconSetName,
    iconName,
    iconId,
    iconPath
  };
}

/**
 * An 'init' function to add the PFE built-in icon sets to the current page.
 */
function addBuiltIns(PfeIcon) {
  [
    {
      name: "web",
      path: "https://access.redhat.com/webassets/avalon/j/lib/rh-iconfont-svgs"
    },
    {
      name: "rh",
      path: "https://access.redhat.com/webassets/avalon/j/lib/rh-iconfont-svgs"
    }
  ].forEach(set => PfeIcon.addIconSet(set.name, set.path, parseIconName));
}

/*!
 * PatternFly Elements: PfeIcon 1.0.0-prerelease.17
 * @license
 * Copyright 2019 Red Hat, Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */

class PfeIcon extends PFElement {
  static get version() {
    return "1.0.0-prerelease.17";
  }

  get html() {
    return `<style>:host{--pfe-icon--spacing:var(--pfe-theme--container-spacer, 1rem);--pfe-icon--size:var(--pfe-theme--icon-size, 1em);--pfe-icon--color--bg:transparent;--pfe-icon--color--border:transparent;display:inline-block;vertical-align:middle;border-radius:50%;background-color:var(--pfe-icon--color--bg);border:var(--pfe-icon--color--border);position:relative}:host,:host svg{width:1em;height:1em}@media screen and (-ms-high-contrast:active),screen and (-ms-high-contrast:none){:host{background-color:#fff!important}:host svg filter feFlood{flood-color:#000!important}}@supports (-ms-accelerator:true){:host{background-color:#fff!important}:host svg filter feFlood{flood-color:#000!important}}@supports (-ms-ime-align:auto){:host{background-color:#fff!important}:host svg filter feFlood{flood-color:#000!important}}:host([data-block]){display:block;margin-bottom:var(--pfe-icon--spacing);margin-top:var(--pfe-icon--spacing)}:host([data-block]):first-child{margin-top:0}@media screen and (-ms-high-contrast:active),screen and (-ms-high-contrast:none){:host svg image{-webkit-filter:none;filter:none}}:host svg image.load-failed{display:none}:host svg filter feFlood{flood-color:var(--pfe-broadcasted--color--text)}:host([size="2x"]),:host([size="2x"]) svg{width:2em;height:2em}:host([size="3x"]),:host([size="3x"]) svg{width:3em;height:3em}:host([size="4x"]),:host([size="4x"]) svg{width:4em;height:4em}:host([size=xl]),:host([size=xl]) svg{width:100px;height:100px}:host([size=lg]),:host([size=lg]) svg{width:64px;height:64px}:host([size=md]),:host([size=md]) svg{width:32px;height:32px}:host([size=sm]),:host([size=sm]) svg{width:14px;height:14px}:host([color=base]){--pfe-broadcasted--color--text:var(--pfe-theme--color--ui-base, #0477a4)}:host([color=complement]){--pfe-broadcasted--color--text:var(--pfe-theme--color--ui-complement, #464646)}:host([color=accent]){--pfe-broadcasted--color--text:var(--pfe-theme--color--ui-accent, #fe460d)}:host([color=critical]){--pfe-broadcasted--color--text:var(--pfe-theme--color--feedback--critical, #bb0000)}:host([color=important]){--pfe-broadcasted--color--text:var(--pfe-theme--color--feedback--important, #d73401)}:host([color=moderate]){--pfe-broadcasted--color--text:var(--pfe-theme--color--feedback--moderate, #ffc024)}:host([color=success]){--pfe-broadcasted--color--text:var(--pfe-theme--color--feedback--success, #2e7d32)}:host([color=info]){--pfe-broadcasted--color--text:var(--pfe-theme--color--feedback--info, #0277bd)}:host([color=default]){--pfe-broadcasted--color--text:var(--pfe-theme--color--feedback--default, #606060)}:host([circled]){--pfe-icon--color--bg:transparent;--pfe-icon--color--border:var(--pfe-theme--color--surface--border, #d2d2d2);padding:.05em}:host([circled=base]){--pfe-icon--color--bg:var(--pfe-theme--color--surface--base, #dfdfdf);--pfe-icon--color--border:transparent;--pfe-broadcasted--color--text:var(--pfe-theme--color--surface--base--text, #333)}:host([circled=lightest]){--pfe-icon--color--bg:var(--pfe-theme--color--surface--lightest, #fff);--pfe-icon--color--border:transparent;--pfe-broadcasted--color--text:var(--pfe-theme--color--surface--lightest--text, #333)}:host([circled=light]){--pfe-icon--color--bg:var(--pfe-theme--color--surface--lighter, #ececec);--pfe-icon--color--border:transparent;--pfe-broadcasted--color--text:var(--pfe-theme--color--surface--lighter--text, #333)}:host([circled=dark]){--pfe-icon--color--bg:var(--pfe-theme--color--surface--darker, #464646);--pfe-icon--color--border:transparent;--pfe-broadcasted--color--text:var(--pfe-theme--color--surface--darker--text, #fff)}:host([circled=darkest]){--pfe-icon--color--bg:var(--pfe-theme--color--surface--darkest, #131313);--pfe-icon--color--border:transparent;--pfe-broadcasted--color--text:var(--pfe-theme--color--surface--darkest--text, #fff)}:host([circled=complement]){--pfe-icon--color--bg:var(--pfe-theme--color--surface--complement, #0477a4);--pfe-icon--color--border:transparent;--pfe-broadcasted--color--text:var(--pfe-theme--color--surface--complement--text, #fff)}:host([circled=accent]){--pfe-icon--color--bg:var(--pfe-theme--color--surface--accent, #fe460d);--pfe-icon--color--border:transparent;--pfe-broadcasted--color--text:var(--pfe-theme--color--surface--accent--text, #fff)}</style><svg xmlns="http://www.w3.org/2000/svg">
  <filter id="color-filter" color-interpolation-filters="sRGB" x="0" y="0" height="100%" width="100%">
    <feFlood result="COLOR" />
    <feComposite operator="in" in="COLOR" in2="SourceAlpha" />
  </filter>
  <image xlink:href="" width="100%" height="100%" filter="url(#color-filter)"></image>
</svg>`;
  }
  static get tag() {
    return "pfe-icon";
  }

  get templateUrl() {
    return "pfe-icon.html";
  }

  get styleUrl() {
    return "pfe-icon.scss";
  }

  static get observedAttributes() {
    return ["pfe-icon"];
  }

  constructor() {
    super(PfeIcon);

    this.image = this.shadowRoot.querySelector("svg image");
    this.image.addEventListener("load", () => this.iconLoad());
    this.image.addEventListener("error", () => this.iconLoadError());
  }

  iconLoad() {
    this.image.classList.remove("load-failed");
  }

  iconLoadError() {
    console.warn(
      `icon named "${this.getAttribute(
        "pfe-icon"
      )}" failed to load from URL ${this.image.getAttribute("xlink:href")}`
    );
    this.image.classList.add("load-failed");
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    super.attributeChangedCallback(...arguments);
    this.updateIcon(newValue);
  }

  updateIcon(iconName) {
    const { setName, set } = PfeIcon.getIconSet(iconName);

    if (set) {
      const { iconPath } = set.parseIconName(iconName);
      this.image.setAttribute("xlink:href", iconPath);
    } else {
      console.warn(
        `icon "${iconName}" was requested but no icon set "${setName}" is registered`
      );
    }
  }

  /**
   * Get an icon set by providing the set's name, _or_ the name of an icon from that set.
   *
   * @param {String} iconName the name of the set, or the name of an icon from that set.
   * @return {PfeIconSet} the icon set
   */
  static getIconSet(iconName) {
    const [setName] = iconName.split("-");
    const set = this._iconSets[setName];
    return { setName, set };
  }

  static addIconSet(name, path, parseIconName) {
    if (this._iconSets[name]) {
      throw new Error(
        `can't add icon set ${name}; a set with that name already exists.`
      );
    }

    this._iconSets[name] = new PfeIconSet(name, path, parseIconName);
  }
}

PfeIcon._iconSets = {};

addBuiltIns(PfeIcon);

PFElement.create(PfeIcon);

export default PfeIcon;
//# sourceMappingURL=pfe-icon.js.map