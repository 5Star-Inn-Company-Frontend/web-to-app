import "./sidebarNavigation.scss";

export function SidebarNavigation() {
  return (
    <div className="sidebarNavigation">
      <div className="content">
        <div className="title">
          <h2>Enable</h2>
          <i className="fa-solid fa-angle-up"></i>
        </div>
        <p>
          A Sidebar Navigation Meny is a standard navigation feature that is
          highly configurable. Users access the navigation meny through a
          "hamburger" toogle button if a Top Nav Bar is enabled, or by sliding
          from the left side of the screen. The menu items in the sidebar nav
          menu can be configured with an optional icon and in collapsible
          groupings. The sidebar menu items can be configured within the app
          configuration as well as set dynamically via the JavaScript Bridge.
        </p>
        <form className="radioGroup">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="option1"
            />
            <label className="form-check-label" htmlFor="inlineRadio1">
              Disable
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="option2"
            />
            <label className="form-check-label" htmlFor="inlineRadio2">
              Enable
            </label>
          </div>
        </form>
      </div>
      <div className="styling content">
        <div className="title">
          <h2>Styling</h2>
          <i className="fa-solid fa-angle-up"></i>
        </div>
        <p>
          iOS and Android styling is configured independently. The iOS sidebar
          menu follows Apple's Human Interface Guidelines while the Android
          sidebar menu follows Google Material Design principles.
        </p>
        <div className="diagram">
          <div className="ios">
            <p>
              <i className="fa-brands fa-apple"></i> iOS
            </p>
          </div>
          <div className="box">
            <div className="left">
              <p>Image</p>
              <form className="radioGroup">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="option1"
                  />
                  <label className="form-check-label" htmlFor="inlineRadio1">
                    App
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="option2"
                  />
                  <label className="form-check-label" htmlFor="inlineRadio2">
                    New Image
                  </label>
                </div>
              </form>
              <div className="colored-left">
                <h6>
                  <img src="../../../light.png" alt="" /> LIGHT MODE
                </h6>

                <div className="flexIt">
                  <div className="backDiv">
                    <p>BACKGROUND COLOR</p>
                    <p className="background">
                      {/* <span></span> #FFFFFF */}
                    </p>
                  </div>
                  <div className="textDiv">
                    <p>TEXT COLOR</p>
                    <p className="text">
                      {/* <span></span> #0E0D08 */}
                    </p>
                  </div>
                </div>
                <div className="textLogo">
                  <p>TEXT COLOR</p>
                  <img src="../../../light-logo.png" alt="" />
                </div>
              </div>
            </div>

            <div className="right">
              <p>Sidebar Front</p>
              <div className="input-group mb-3">
                <select className="form-select" id="inputGroupSelect01">
                  <option selected>Default</option>
                </select>
              </div>
              <div className="colored-right">
                <h6>
                  <i className="fa-solid fa-moon"></i> DARK MODE
                </h6>
                <div className="flexIt">
                  <div className="backDiv">
                    <p>BACKGROUND COLOR</p>
                    <p className="background">
                      <span></span> #000000
                    </p>
                  </div>
                  <div className="textDiv">
                    <p>TEXT COLOR</p>
                    <p className="text">
                      <span></span> #0E0D08
                    </p>
                  </div>
                </div>
                <div className="textLogo">
                  <p>TEXT COLOR</p>
                  <img src="../../../dark-logo.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="next diagram">
          <div className="ios">
            <p>
              <i className="fa-brands fa-android"></i> Android
            </p>
          </div>
          <div className="box">
            <div className="flex-input">
              <div className="left-input">
                <p>Show App Name</p>
                <form className="radioGroup">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value="option1"
                    />
                    <label className="form-check-label" htmlFor="inlineRadio1">
                      Disable
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio2"
                      value="option2"
                    />
                    <label className="form-check-label" htmlFor="inlineRadio2">
                      Enable
                    </label>
                  </div>
                </form>
              </div>
              <div className="right-input">
                <p>Image</p>
                <form className="radioGroup">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value="option1"
                    />
                    <label className="form-check-label" htmlFor="inlineRadio1">
                      Disable
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio2"
                      value="option2"
                    />
                    <label className="form-check-label" htmlFor="inlineRadio2">
                      Enable
                    </label>
                  </div>
                </form>
              </div>
            </div>

            <div className="mainBox">
              <div className="left">
                <div className="colored-left">
                  <h6>
                    <img src="../../../light.png" alt="" /> LIGHT MODE
                  </h6>

                  <div className="flexIt">
                    <div className="textDiv">
                      <p>SIDEBAR BACKGROUND</p>
                      <p className="text">
                        <span></span> #0E0D08
                      </p>
                    </div>
                    <div className="textDiv">
                      <p>SIDEBAR SEPERATOR</p>
                      <p className="text">
                        <span></span> #0E0D08
                      </p>
                    </div>
                  </div>
                  <div className="flexIt">
                    <div className="backDiv">
                      <p>SIDEBAR FOREGROUND</p>
                      <p className="background">
                        <span></span> #FFFFFF
                      </p>
                    </div>
                    <div className="backDiv">
                      <p>SIDEBAR HIGHLIGHT</p>
                      <p className="background">
                        <span></span> #FFFFFF
                      </p>
                    </div>
                  </div>
                  <div className="textLogo">
                    <p>TEXT COLOR</p>
                    <img src="../../../light-logo.png" alt="" />
                  </div>
                </div>
              </div>

              <div className="right">
                <div className="colored-right">
                  <h6>
                    <i className="fa-solid fa-moon"></i> DARK MODE
                  </h6>
                  <div className="flexIt">
                    <div className="textDiv">
                      <p>SIDEBAR BACKGROUND</p>
                      <p className="text">
                        <span></span> #0E0D08
                      </p>
                    </div>
                    <div className="textDiv">
                      <p>SIDEBAR SEPERATOR</p>
                      <p className="text">
                        <span></span> #0E0D08
                      </p>
                    </div>
                  </div>
                  <div className="flexIt">
                    <div className="backDiv">
                      <p>SIDEBAR FOREGROUND</p>
                      <p className="background">
                        <span></span> #FFFFFF
                      </p>
                    </div>
                    <div className="backDiv">
                      <p>SIDEBAR HIGHLIGHT</p>
                      <p className="background">
                        <span></span> #FFFFFF
                      </p>
                    </div>
                  </div>
                  <div className="textLogo">
                    <p>TEXT COLOR</p>
                    <img src="../../../dark-logo.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="final content">
        <div className="title">
          <h2>Side Visual Editor</h2>
          <div className="right-title">
            <div className="form-check form-switch">
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Advance Mode
              </label>
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
              />
            </div>
            <i className="fa-solid fa-angle-up"></i>
          </div>
        </div>
        <p>
          The sidebar visual editor allows you to visually modify icons, labels
          and links for your Sidebar Navigation Menu. Change menu item order and
          add groupings which expand and collapse. Menu items can be added to a
          group by dragging to the right within the visual editor. Note that
          icons are optional in sidebar menus.
        </p>
        <div className="buttons">
          <h6>
            <i className="fa-solid fa-rotate"></i> Restore Defaults
          </h6>
          <h6>
            <i className="fa-solid fa-trash-can"></i> Clear All
          </h6>
        </div>
        <div className="labelContainers">
          <div className="mini">
            <div className="miniContent">
              <div className="flexTop">
                <img src="/Vector.png" alt="" />
                <div className="input-group ">
                  <select
                    className="form-select"
                    disabled
                    id="inputGroupSelect01"
                  >
                    <option disabled></option>
                  </select>
                </div>
              </div>
              <div className="flexBottom">
                <input type="text" placeholder="Label Text" id="labelInput" />
                <input
                  type="url"
                  name="url"
                  id="urlInput"
                  placeholder="https://webhosting.5starcom"
                />
                <i className="fa-solid fa-trash-can"></i>
              </div>
            </div>
          </div>
          <div className="mini">
            <div className="miniContent">
              <div className="flexTop">
                <img src="/Vector.png" alt="" />
                <div className="input-group ">
                  <select
                    className="form-select"
                    disabled
                    id="inputGroupSelect01"
                  >
                    <option disabled></option>
                  </select>
                </div>
              </div>
              <div className="flexBottom">
                <input type="text" placeholder="Label Text" id="labelInput" />
                <input
                  type="url"
                  name="url"
                  id="urlInput"
                  placeholder="https://webhosting.5starcom"
                />
                <i className="fa-solid fa-trash-can"></i>
              </div>
            </div>
          </div>
          <div className="mini">
            <div className="miniContent">
              <div className="flexTop">
                <img src="/Vector.png" alt="" />
                <div className="input-group ">
                  <select
                    className="form-select"
                    disabled
                    id="inputGroupSelect01"
                  >
                    <option disabled></option>
                  </select>
                </div>
              </div>
              <div className="flexBottom">
                <input type="text" placeholder="Label Text" id="labelInput" />
                <input
                  type="url"
                  name="url"
                  id="urlInput"
                  placeholder="https://webhosting.5starcom"
                />
                <i className="fa-solid fa-trash-can"></i>
              </div>
            </div>
          </div>
          <div className="mini">
            <div className="miniContent">
              <div className="flexTop">
                <img src="/Vector.png" alt="" />
                <div className="input-group ">
                  <select
                    className="form-select"
                    disabled
                    id="inputGroupSelect01"
                  >
                    <option disabled></option>
                  </select>
                </div>
              </div>
              <div className="flexBottom">
                <input type="text" placeholder="Label Text" id="labelInput" />
                <input
                  type="url"
                  name="url"
                  id="urlInput"
                  placeholder="https://webhosting.5starcom"
                />
                <i className="fa-solid fa-trash-can"></i>
              </div>
            </div>
          </div>
          <div className="mini">
            <div className="miniContent">
              <div className="flexTop">
                <img src="/Vector.png" alt="" />
                <div className="input-group ">
                  <select
                    className="form-select"
                    disabled
                    id="inputGroupSelect01"
                  >
                    <option disabled></option>
                  </select>
                </div>
              </div>
              <div className="flexBottom">
                <input type="text" placeholder="Label Text" id="labelInput" />
                <input
                  type="url"
                  name="url"
                  id="urlInput"
                  placeholder="https://webhosting.5starcom"
                />
                <i className="fa-solid fa-trash-can"></i>
              </div>
            </div>
          </div>
          <div className="mini">
            <div className="miniContent">
              <div className="flexTop">
                <img src="/Vector.png" alt="" />
                <div className="input-group ">
                  <select
                    className="form-select"
                    disabled
                    id="inputGroupSelect01"
                  >
                    <option disabled></option>
                  </select>
                </div>
              </div>
              <div className="flexBottom">
                <input type="text" placeholder="Label Text" id="labelInput" />
                <input
                  type="url"
                  name="url"
                  id="urlInput"
                  placeholder="https://webhosting.5starcom"
                />
                <i className="fa-solid fa-trash-can"></i>
              </div>
            </div>
          </div>
          <div className="mini">
            <div className="miniContent">
              <div className="flexTop">
                <img src="/Vector.png" alt="" />
                <div className="input-group ">
                  <select
                    className="form-select"
                    disabled
                    id="inputGroupSelect01"
                  >
                    <option disabled></option>
                  </select>
                </div>
              </div>
              <div className="flexBottom">
                <input type="text" placeholder="Label Text" id="labelInput" />
                <input
                  type="url"
                  name="url"
                  id="urlInput"
                  placeholder="https://webhosting.5starcom"
                />
                <i className="fa-solid fa-trash-can"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
