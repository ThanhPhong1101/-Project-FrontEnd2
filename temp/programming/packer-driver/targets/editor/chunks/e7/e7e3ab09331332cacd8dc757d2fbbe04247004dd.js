System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Input, input, KeyCode, log, UISelectable, UIIndicator, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _class3, _crd, ccclass, property, EventSystem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUISelectable(extras) {
    _reporterNs.report("UISelectable", "./UISelectable", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIIndicator(extras) {
    _reporterNs.report("UIIndicator", "./UIIndicator", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Input = _cc.Input;
      input = _cc.input;
      KeyCode = _cc.KeyCode;
      log = _cc.log;
    }, function (_unresolved_2) {
      UISelectable = _unresolved_2.UISelectable;
    }, function (_unresolved_3) {
      UIIndicator = _unresolved_3.UIIndicator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7285du0cPBGJ4Z96KNMB+bC", "EventSystem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EventGamepad', 'EventKeyboard', 'Input', 'input', 'KeyCode', 'log', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("EventSystem", EventSystem = (_dec = ccclass('EventSystem'), _dec2 = property({
        type: _crd && UISelectable === void 0 ? (_reportPossibleCrUseOfUISelectable({
          error: Error()
        }), UISelectable) : UISelectable
      }), _dec3 = property({
        type: _crd && UISelectable === void 0 ? (_reportPossibleCrUseOfUISelectable({
          error: Error()
        }), UISelectable) : UISelectable
      }), _dec4 = property({
        type: _crd && UIIndicator === void 0 ? (_reportPossibleCrUseOfUIIndicator({
          error: Error()
        }), UIIndicator) : UIIndicator
      }), _dec(_class = (_class2 = (_class3 = class EventSystem extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "FirstSelected", _descriptor, this);

          _initializerDefineProperty(this, "CurrentSelected", _descriptor2, this);

          _initializerDefineProperty(this, "Indicator", _descriptor3, this);

          this.RecoverFocus = true;
          this.submitAction = false;
        }

        onLoad() {
          if (EventSystem.instance == null) {
            EventSystem.instance = this;
          }

          input.on(Input.EventType.KEY_DOWN, this.KeyboardOnKeyDown, this);
          input.on(Input.EventType.GAMEPAD_INPUT, this.GamePadOnKeyDown, this);
        }

        start() {}

        GamePadOnKeyDown(event) {
          if (this.CurrentSelected == null) {
            return;
          }

          let leftAction = event.gamepad.dpad.left.getValue() == 1;
          let rightAction = event.gamepad.dpad.right.getValue() == 1;
          let upAction = event.gamepad.dpad.up.getValue() == 1;
          let downAction = event.gamepad.dpad.down.getValue() == 1;

          if (event.gamepad.buttonSouth.getValue() == 1 && !this.submitAction) {
            this.CurrentSelected.OnSubmit();
          } else if (event.gamepad.buttonSouth.getValue() == 0 && this.submitAction) {
            log("Not Submit");
            this.submitAction = false;
          }

          if (leftAction && this.CurrentSelected.SelectOnLeft != null) {
            this.ChangeCurrentSelected(this.CurrentSelected.selectLeft);
          } else if (rightAction && this.CurrentSelected.SelectOnRight != null) {
            this.ChangeCurrentSelected(this.CurrentSelected.selectRight);
          }

          if (upAction && this.CurrentSelected.SelectOnUp != null) {
            this.ChangeCurrentSelected(this.CurrentSelected.selectUp);
          } else if (downAction && this.CurrentSelected.SelectOnDown != null) {
            this.ChangeCurrentSelected(this.CurrentSelected.selectDown);
          }
        } //Handle Keyboard Input


        KeyboardOnKeyDown(event) {
          if (this.CurrentSelected == null) {
            log("No Current Selected");
            return;
          }

          let leftAction = false;

          if (event.keyCode == KeyCode.ARROW_LEFT || event.keyCode == KeyCode.KEY_A) {
            leftAction = true;
          }

          let rightAction = false;

          if (event.keyCode == KeyCode.ARROW_RIGHT || event.keyCode == KeyCode.KEY_D) {
            rightAction = true;
          }

          let upAction = false;

          if (event.keyCode == KeyCode.ARROW_UP || event.keyCode == KeyCode.KEY_W) {
            upAction = true;
          }

          let downAction = false;

          if (event.keyCode == KeyCode.ARROW_DOWN || event.keyCode == KeyCode.KEY_S) {
            downAction = true;
          }

          let submitAction = false;

          if (event.keyCode == KeyCode.ENTER || event.keyCode == KeyCode.SPACE) {
            submitAction = true;
          }

          if (submitAction) {
            this.CurrentSelected.OnSubmit();
          }

          if (leftAction) {
            if (this.CurrentSelected.SelectOnLeft != null) {
              this.ChangeCurrentSelected(this.CurrentSelected.selectLeft);
            }
          } else if (rightAction) {
            if (this.CurrentSelected.SelectOnRight != null) {
              this.ChangeCurrentSelected(this.CurrentSelected.selectRight);
            }
          } else if (upAction) {
            if (this.CurrentSelected.SelectOnUp != null) {
              this.ChangeCurrentSelected(this.CurrentSelected.selectUp);
            }
          } else if (downAction) {
            if (this.CurrentSelected.SelectOnDown != null) {
              this.ChangeCurrentSelected(this.CurrentSelected.selectDown);
            }
          }
        }

        ChangeCurrentSelected(newSelected) {
          this.CurrentSelected = newSelected;
          this.CurrentSelected.OnSelect();
          this.Indicator.ChangeParent(this.CurrentSelected);
        }

        onDisable() {
          if (EventSystem.instance == this) {
            EventSystem.instance = null;
          }
        }

        update(dt) {
          if (this.RecoverFocus) {
            if (this.CurrentSelected == null) {}
          }
        }

      }, _class3.instance = null, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "FirstSelected", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "CurrentSelected", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Indicator", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e7e3ab09331332cacd8dc757d2fbbe04247004dd.js.map