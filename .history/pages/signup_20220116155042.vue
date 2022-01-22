<template>
  
  </div>
</template>

<script>
import {  createUserWithEmailAndPassword ,getAuth} from "firebase/auth";
export default {
         data() {
             return {
                 email :"",
                 password:""
             };
         }
         ,
         methods: {
             pressed(){
             console.log("merhaba")
             },
             login() {
                 console.log("merhaba")
                 createUserWithEmailAndPassword(getAuth(),this.email,this.password).then(
                         console.log( "basarılı")
                     ,
                     err => {
                         alert(err)
                     }
                 )
             }
         }
         
     }
</script>


<style>
#commercialMessageConfirmationBtn {
  display: inline-block;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWgAAAFoCAMAAABNO5HnAAAAGFBMVEUzMzPu7u7///8gICCEhIRaWlqqqqrPz8+4gtCWAAANqElEQVR42uzaDWorMQwEYNkjyfe/8WPDUN5i2lLSrmVZw38EtPkYtI5Z6fe0e35rWtOCLuiCrmlBF3TYaUEXdE0LuqBrWtAFXdA1LeiCLujNvsOU1vf4n2ND3z4aw1/RK/7KGO/+3YL+wFU1M8FnETEzdR+toH84JbGrmQjI+Wkg/4mrj/5KQX87pfEE/G0IDjPWu6C/mF7GMgv/1Fs+ul3Q83A4V7G8HVD7anZB35FV3ieetUW9FTQ/bkONyr8eFvtwaCrPyH9Q7HEwdO99qFH5jwOYjuOgGXb5oQAQbQdCuwkgzwZiTutDoJs+rMyA6/oQ6MHFvCaA+YLfjfL4McONykupc1/88wEoywOIt7TQYZhJrS0ndAzmiToddFOBxAqPIFmg5/Nc1FYngHYyR6VOAs0DXdRAvPcE0CMuMwPY6H1z6KbBmUnNVb0l9Lyco++PTaHnrRF/f+wI/aqzbBSIbtXouc77ljo+NH8I7hZAt3qbdMc6Mzzp7XLxv9d2no8fm0C33eo8b+otoIeQef9Sh4ZWQHYPtPXg0Fwbmwew1kNDD4GkCGT0HhfaAUkSwHuPCc31nEdaYza6N4OkCqwFhO4jm7OA0pGg+RjMFsiIBu3pnCntkaD5GMwYwINA01myBtA4b5MqJHEu6RAX/3TO3ekI0Mmdece0Hjq9Mw/Uq6ENckAu6bXQCpFjpBdCH+LMs8cq6JOcBdBV0HQ+TXoB9EHOlF4AfVafGfgKaMd50PDHoXn/fFgg41loOp8o/a+9O1B1HNfBACzpl6T3f+ML3bOEmdm5VerW/tNYC7CQgWM+jOoosq1ToU0DcstA6NRu0vnOTNLzCv/ecN7l6XHohNw3gJwFXWCBxhFzlx5ToFXAghzhnpnuHjIPG6I2AzpAwSyRuuiUCoTZ56EdDMyRx/Dm75yBfx66QMK8cpMSkPZhaBVQbec5xjx5n1LZZ6EDDBvU/t+YNTApTX8SOkHTZHGELZHO90MzlZLgjVNPHVNW0wPQ7K3mgLfOfYsZ0jEAzf7tCmEN6EkzAv4haCsBgXMDepZ0faSblGDFgX6RoTCrYvr+wr8T/BBytV7CPwBNkDikTkCrYOKI3gkdNBOap2iOMHs3NEGxX09B26TXljdDqxAs7fQUdGBeaXocmucrIfIkdGJqPnsPdGE9tJ6E1qlLzjdBMxTtOHsiEO+ETsh6aKOEFqS9DzoIoJ0VWtTeBZ2QK0I7po5sHFqFATpZoUXU3gPtkD2jnw9tGFplQzdKHsPdpOYQCujTvcWBqWMbLPyztJwjiKFFx6F5WnRPQs9MefBhaJ49FKiT0IW5Oy6GoIkmNPwktGPu4IageSa0QE5Cy0xo0UFoh9BEnYGe3I0JH4NW4YGGn4KOudBiNgKdEJoAqg89feTIIeiA8ASiDT2/ew2h9jp0QZgC2YZOzB/cAHSQQUv1oC1lPnS8Dq0QYZTmLBug7FVoh1Bueud8m4W/DC0QYZzTnC9ZkBe7STl3IkPyd1iWS+eQrxX+LSCXO0Rq5ZWgiJegrYQ0EH/pADdbfAC+vgTtuMjFg78wg+UQwj60QISYOtV+jVp+LTbkBWgrCHMAIl76s9qrdBGA6ONEH9oh3AEBAEiIAAC4vyDLtY+nwj/gNMOJNvRQ5tiB6kIPZY4d8LPQKhv6hYB0occyxw5UH3o8c+zc0YeODT247uhAD1R0d+hfoPdZjXO2tMh7b2XaAT8FLRt6tDmsBV3b+eVAtaBHU/QOeB96L+4GAtGCHk/RO/rQNe68k3QHOgegdyDb0D4AvQPRho4h6A2t1oMmq0Xjj2CnriZ0gUpZfk7yr8p09wghx0Y2oRM8Mzk8688uxnQhtoY3oR0kM9l/jNX+DPWgpQ5rdZNagEDZ6+n1X0VKDWkV/k1BoNw8jc8pqdGDLixlFk/tn+qeQiiNakEnlt9io21oyo4qZAvasUgZ4Q9l1T40504bb0EHFqWMOobXgCaWRrBC/6SM9lmN5NItaFPBmvtFVV+F5ivOaAO6lhUWX4Wm6zFGDxoLxjUEzdcqiGpA5wJoG4Lm6xVENqB9PrSPQ3d62DZ0DkLTTWl4AzrmQ+s4NNfXCgQj9LHqtCPOQqsFOfT6qyHh9q+dZrpHuHuWNq444e2uahT+l6yizaw8BEdAPNVOQCsXtD2Hnj7geigDwO9FprI+NFfuaEDPT9HlAmD4Tnm/FrRiRYH070WQPnQyQddT6GJ7xdrQMwLRhy4m6HwKnWA7q6oNLdjQLwf60CoDsaFzz+hV7VU7Rx+xof1y0NGGzmtB+4a+J7R/CzR5jwS8fai/c0Hrr0EPnWzQGzqYoPMpNN2bYRPadEMPBESb0KoiG3ogutBW2NBDy+gNPSPgc64S2tDZhnYq6HoKXeD6LZzTQLOh+y1hEKKAPoVWKmhvQ3OlaDT2sAjVuv+a3aTyHNq41v3ahg4IUzRmNNGIISca0UV2N+nAeLudSgUu6D/GzA3tbWgng7bn0E4EXW1o4YL2BnSC6HVFm9AK2dCvR1gXmq7tpwFd4BluGzrIoKsBzfPGAu1CK1mKlktBI0yb0AXhCm1AW7BAexuasevnQtDVho4LQhNND+1CK4Qq4C3oBM20aEInG3S2oJUEOtvQwQZdLWgjgdYmtJmwQau2oAMkmaMJXRCy4D+b9Aj4ZY9jg/cuJbOkgK42dLBB54WgIdqFVghXoJrQxZM5GtB8iztoD5qiARbZhg6I8PcLCumne2gbWsgC3oZOEMyKLnSBDTrb0LUe2tvQTgddXWg1AcFgm9B0KVqsDx0gGGwPWoUsECegfTW0t6GTMEX3oWs1dLahGVN0H1oFiz9utqGFL0U3oQlyB8Ia0KSLOz8FnWuhvQ3tlCm6f9O9Cph2gPzVnXBxV70L2BlWpxBrQluRXs/Zh3asHWwTOglT9DnoWgmdXWjGxV0TmmLZVE1oU4GQhepJaMfCzNGEplzcnYWuddDehk466OpCE1TFUF1owo8rqqehHcsWd21oAW3m6EPXKuhoQLOuoqsNvb5cA29DJ2WL0mnoXASdbWi+FqWXoHXRaLULrQG+OkcfevG6A9KFtqKtc5yETqwZbRsaIrRnsDW6SXsvuASnvjo4v610C/9rSzbIy0L7y9AF6tsTggxaX4VecrehqHahhe3oiNehcwG0taEZzwXuQy+e0og2tNJN6AHoJIYuLugcgZ6fB+F2ySs5IToA3Z/SG9ptDFoFrNAOrjLHGLT5ZOi8JrSbDkKrsEInqCb0KPTkiYO6JLSbDkOrgBO6QDWhh6HNSaFNcKF7pqRzviqmQo/fcMN4h4mQHc2M7EMnqNbQ49Aq4Bq0Pr9LCNMn9Di0mlNC/z2pAYiYXuUYh545pRF9aLUU4D+UxdMSc0fch+bIhhDtQ6upCwBAIAIBABGvqct/5Pug1QJc9+odD7TcQ0QAkQhP/fkHgckT+j3QBa52gyN+Geb8a1mAehf09N9DbUMTXMsCt/dCq4Cn945n7Q/RLjTd/ieIvgFaMGtWtKHptk7Ch6GtZv8SvhG6ZOLvyyh0YlbV7u3Qaj7zFWAQ2jEtcbwfWqcmjwFomzRUhJ2ANuM7jwvwU7K/PdMMTO87Hy/8LzmzAf4a9ENZgElj1A9BT1x5IM9Dm2n5JGURhH4OumSedOgpaDMrDwBTvxN+AHr6l2dIdqGPlMFxBMM49NzvdHBtjeoxmQUAy8kA49Bzv9QC4toZVSNlTK0TjEPP/iIKIOrPYf0ypJqbMo7i6GehdXozHsLzqPk+/juQMwQgOMV/GJrhGG8AIuFZdYyrMj0ej9bthfwk9KrthxD8EyI/vAAE6xpmZkCrFSDLApBlwkeCngKtlpAbB9ImQas57ssMt3nQGrgtdNhr0C99y7ivNELtpSr5i9Czlx5ULedToa0EN3WeDG0J3M4ZaTod2vJ+0G66ANoc93OeBX1jacBtHvSNpQ/nBdDquOF8ng99o1dEuK2Evo00wpZC30Uabquh9QZ5GnBbD63fv/aAGwO0qjl2AXqwm7T51IE7rOtGrIagb1BhghzODNCWgu90TlNlgrYSfHv9mQP6GxfUiDKlgP5qaSDUlBDa1IHvXG5wQH/nTyKQZsoJPbDrk/Jn8OPQu8YEhBo1tJo5sKtIn4fWL0jUkDJ+aFWrAK6fNvih2Sd1f9cdO7TaZSc1EDWu0ekmfZu7X1Ea4mqf0DD7GHR/UpNNZ70atKkLLpedVa8H3Z/URNP5itBXWn4AkmaXhVa9SP4AXO3S0MfrC33WuDj0T/4ANXOa8UO3Dx9mTs5fAq3GSg2Iq30D9PGoCH8VD+brQ/POakC8zL4OWo2H+mDW74QmoT6Y9UuhH5EBrF/QqZnqVOhpf+nI1RkA1ikjsj9mvsJ//+m/x9SRr+euDz3/4MVD+ZjM94A+1iCYpnws524FrWYTj20FEA9l1TtCTzhV9JjL05cZRNCHdXwKG4DEoXxX6CM0XQDgzcgQz+Ns0w39CP2Z2HgbcvyGvKGPX6nKaGg3jD2rO6qbQR+rvkp/YJ/0hgD/Zgt98nc39PGg0iNEGue9HufDxmG8oU89Va08wP87JCLcs36IVTf02NOqfIQ/4vG/D9yjqDz8dze0qakdQTTmPvScv7SfbugNvaH30w29oTf05tjQG3o/3dAbekNvjg29offTDc369H/Rs2H8+5pGIwAAAABJRU5ErkJggg==);
  background-size: 100%;
  background-position: center center;
  width: 20px;
  height: 20px;
  margin-bottom: -6px;
}

.page {
  background-color: #f5f5f5;
}
.main-container {
  padding-top: 0;
}
.main {
  background-image: url(/skin/frontend/saat/saat/images/ss-account-create.jpg);
  background-position: top left;
  background-size: auto 100%;
  background-repeat: no-repeat;
}
.customer-account-create .account-create {
  width: 630px;
  float: right;
  padding: 45px 10% 0;
  background-color: #f5f5f5;
}

.featured-sep:after {
  content: ' ';
  display: block;
  border-bottom: 1px solid #d6d6d6;
  margin-top: -10px;
}
.mnm-btn-register {
  background-color: #bd1818;
  padding: 18px 36px;
  color: #fff;
  font-size: 24px;
  margin: 0 auto;
  display: block;
}
</style>
