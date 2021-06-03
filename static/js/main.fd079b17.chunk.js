(this["webpackJsonpgradient-e-commerce"]=this["webpackJsonpgradient-e-commerce"]||[]).push([[0],{44:function(e,t,A){},45:function(e,t,A){},56:function(e,t,A){},57:function(e,t,A){},58:function(e,t,A){},64:function(e,t,A){},72:function(e,t,A){},73:function(e,t,A){},74:function(e,t,A){},75:function(e,t,A){},76:function(e,t,A){},77:function(e,t,A){},78:function(e,t,A){"use strict";A.r(t);var c=A(2),n=A(46),r=A.n(n),i=(A(56),A(57),A(6)),s=(A(58),A(11)),a=A.n(s),o=A(5),l=A(18),u=A(38);A(79),A(61);u.a.initializeApp({apiKey:"AIzaSyAJswjAEcvRvIjGoBk37eOGdYq092-1Myw",authDomain:"gradient-store-39289.firebaseapp.com",databaseURL:"https://gradient-store-39289-default-rtdb.firebaseio.com",projectId:"gradient-store-39289",storageBucket:"gradient-store-39289.appspot.com",messagingSenderId:"19606332144",appId:"1:19606332144:web:cba48998986c44c665d835",measurementId:"G-09DWB0BN1B"});var d=u.a.firestore(),j=u.a.auth(),b=function(){var e=Object(l.a)(a.a.mark((function e(t,A){var c,n,r,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return c=d.doc("users/".concat(t.uid)),e.next=5,c.get();case 5:if(e.sent.exists){e.next=17;break}return n=t.displayName,r=t.email,i=new Date,e.prev=9,e.next=12,c.set(Object(o.a)({displayName:n,email:r,createdAt:i},A));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user",e.t0.message);case 17:return e.abrupt("return",c);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,A){return e.apply(this,arguments)}}(),m=A(13),h=A(1),p=Object(c.createContext)(),O=function(e){var t=e.children,A=Object(c.useState)(null),n=Object(m.a)(A,2),r=n[0],i=n[1],s=Object(c.useState)(!0),u=Object(m.a)(s,2),d=u[0],O=u[1];Object(c.useEffect)((function(){var e=j.onAuthStateChanged(function(){var e=Object(l.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=7;break}return e.next=3,b(t);case 3:e.sent.onSnapshot((function(e){i(Object(o.a)({id:e.id},e.data())),O(!1)})),e.next=9;break;case 7:i(t),O(!1);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());return function(){return e()}}),[]);var f={user:r,loading:d};return d?Object(h.jsx)("div",{children:"Loading..."}):Object(h.jsx)(p.Provider,{value:f,children:t})},f=A(7),x=(A(64),A(32)),v=function(e){return function(e){var t=e.length>0?e:[];localStorage.setItem("cart",JSON.stringify(t))}(e),{itemCount:e.reduce((function(e,t){return e+t.quantity}),0),total:e.reduce((function(e,t){return e+t.price*t.quantity}),0)}},g=function(e,t){switch(t.type){case"ADD_ITEM":return e.cartItems.find((function(e){return e.id===t.payload.id}))||e.cartItems.push(Object(o.a)(Object(o.a)({},t.payload),{},{quantity:1})),Object(o.a)(Object(o.a)({},e),{},{cartItems:Object(x.a)(e.cartItems)},v(e.cartItems));case"INCREASE":var A=e.cartItems.findIndex((function(e){return e.id===t.payload.id}));return e.cartItems[A].quantity++,Object(o.a)(Object(o.a)({},e),{},{cartItems:Object(x.a)(e.cartItems)},v(e.cartItems));case"DECREASE":var c=e.cartItems.findIndex((function(e){return e.id===t.payload.id})),n=e.cartItems[c];return n.quantity>1&&n.quantity--,Object(o.a)(Object(o.a)({},e),{},{cartItems:Object(x.a)(e.cartItems)},v(e.cartItems));case"REMOVE_ITEM":var r=e.cartItems.filter((function(e){return e.id!==t.payload.id}));return Object(o.a)(Object(o.a)({},e),{},{cartItems:Object(x.a)(r)},v(r));case"CLEAR":return localStorage.removeItem("cart"),{cartItems:[],itemCount:0,total:0};default:return e}},C=Object(c.createContext)(),w=localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[],y=Object(o.a)({cartItems:w},v(w)),N=function(e){var t=e.children,A=Object(c.useReducer)(g,y),n=Object(m.a)(A,2),r=n[0],i=n[1],s=Object(o.a)(Object(o.a)({},r),{},{addProduct:function(e){return i({type:"ADD_ITEM",payload:e})},increase:function(e){return i({type:"INCREASE",payload:e})},decrease:function(e){return i({type:"DECREASE",payload:e})},removeProduct:function(e){return i({type:"REMOVE_ITEM",payload:e})},clearCart:function(){return i({type:"CLEAR"})}});return Object(h.jsx)(C.Provider,{value:s,children:t})},I=Object(f.f)((function(e){var t=e.history,A=Object(c.useContext)(C),n=A.itemCount,r=A.cartItems;return console.log("CartItems:",r),Object(h.jsxs)("div",{className:"cart-container",onClick:function(){return t.push("/cart")},children:[Object(h.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAA3lAAAN5QHm6mmvAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAwBQTFRF////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyO34QAAAP90Uk5TAAECAwQFBgcICQoLDA0ODxAREhMUFRYXGBkaGxwdHh8gISIjJCUmJygpKissLS4vMDEyMzQ1Njc4OTo7PD0+P0BBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWltcXV5fYGFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6e3x9fn+AgYKDhIWGh4iJiouMjY6PkJGSk5SVlpeYmZqbnJ2en6ChoqOkpaanqKmqq6ytrq+wsbKztLW2t7i5uru8vb6/wMHCw8TFxsfIycrLzM3Oz9DR0tPU1dbX2Nna29zd3t/g4eLj5OXm5+jp6uvs7e7v8PHy8/T19vf4+fr7/P3+6wjZNQAAEFtJREFUeNrtnfmfV1UZx5/vLCyDINKIIKjoKIkiIIaKYoaC4YKCueOWLFpmlBKlqKBUFpCEmpKoGBqKGaIiCqXAuJQlSLnFIm6EGEMJM8oyy+2HfsiaQWbuued+z3Of9/s/+CyvgZnzuedI5IHHBdTgowB1XfHVdAGi6fhquwCflmKs6QJE4zHWdgE+aoGzpgsQjcRZ2wV4K4e1pgsQnYa1tguwGGttFyA6Am9tF2A23touQPW+mGu6ANHPMNd2ATa3wV3TBYiuwV3bBXi/CHtNFyC6AHttF2AZ9touQNQff20XYD7+2i5AXTcMNl2AaAYG2y7A1vY4bLoA0U04bLsAG1tisekCRFdgse0CrCzAY9MFiM7AY9sFKMdj2wWI+mCy7QLMwWTbBajpgsumCxBNxWXbBahsi82mCxCNxWbbBVhXjM+mCxBdhM+2C7ACn20XIDoRo20X4GmMtl2A6FCctl2Ae3HadgG2dcBq0wWIfojVtguwqQSvTRcguhKvbRdgDeNA2wWIzsRs2wV4EbNtFyA6GrcDpFfTmRezAB+ugDzxyjOzpoy99LCEOnN4BDpZf//5iTzl8TRWqqV29sHuBfgyPmquwAMHOTfgBWzUTM1PCx0LcCom6mZRO8cG/AUPdfN2d7cCnI+Fyqn8klMBCtdgoXLed7u+aRQOaqfc6WuN5n/HQe38wulHwDUYqJ6+LgXYbRMGqv9l0OlHwE0YqJ5+LgX4QhUGauc5px8Bt2Kgenq7FKDTdgzUzvVOPwLuwUD1fwtwKsBBtTionGq3p/3m4KB2hrjtCTFQO5PcDgUX4KByZrkV4DgcVM4zbMNs4/q04ylYqJsPXOehK/BQNdtcC3AeHur+Q4BrAQpXY6Jmqpw/ERiJiZrZ5FyAZmzDNLPa/TsxtmGameteALZhmhmfwLfCE7BRL0m86MU2TC9PJHJhxM8wUil1vRIpANswrUySZJiBlSp5NJdQAQ5kG6aRP7ZM7Kqxh3FTH+vaJ5Y/2zCNXJLkbYNsw9TxaqJ3N/fDUG0MSPbC0edxVBcLEr5xlm2YLmoSf8WLbZgq7k780ulzMVURVcm/4cU2TBPjJXnYhulhfSsPBWAbpofhXp6euBpjlfBXP+93tWIbpoRBnl6fGY+1KljkKX9pV4m5Cqjt4e0BKrZhGrjP3wtke7MNC59POnl8g+5u/A2eiT4fITywBoMDZ8NuXp+hZBsWOpf7fYe0Jw6HzZuFfgsgT+Fx0JzmOX+2YWHznHinHJfDpa63/wKcjM3hMktS4FV8DpWt+6RRALZhwXJLGvlLwSqcDpN/tEmlADICq8PkynTyl2br8DpEVhalVAD5LmaHyJC08pdWFbgdHuWSHuOxO7y/AfVJsQBsw8JjtqTJFAwPjG1dUi3A3tuwPCwmS7qwDQuLirYpF6CMbVhQjJa0eQjTA2JNceoFYBsWEmdJ+szH9mB4MQ/5y7H4Hgx981EAtmHB8Ehe8pdBOB8G28vyUwC2YYEwNU/5yzl4HwL/apevArANC4JrJG8Mx/38s7Z5/grANiwAzpM8wjYs77ycy2cB2IblnX6SV24kgfwyN7/5yx5sw/LKjq55LoBMJoR8cnu+85eObMPyyMeleS+A/JIY8sf3858/27A88l6LAAogswkiX1wYQv7SgyDyxCu5IArANixffCWM/OUYosgLT0goLCWMPFDdLZgCsA3LB3dJOCwnjtTZ0j6gApxNHqkzLqD8pWAlgaTMupYhFYBtWOpcGlT+0uwDIkmVFQVhFUC+QyapMiCw/NmGpcsCCY4bSCU9arqHVwC2YSkyQwKEbVhqVHUMsQBsw1JjvATJdJJJh/WtwizAAWzD0mGEBArbsFR4rTDUAhxWRzopMEiC5UnS8c+icPNnG5YCtT0DLoAsISDfzAw5f/kqAXnmk05BF0CWEZFfJoadP9swz2xoHXgB2Ib55QoJncsIySNvFgZfgGK2YR45TcJnNDF54zkF+UvJRoLyRF1vDQVgG+aNB1TkL3tsISovbN1XRwFkEll54RYl+bMN88PGNloKwDbMC99Skz/bMB+sLNJTAPk1eSXOEEX5sw1LnnJRxRMklvDfgI7UVYC+RJYsD4ky2IYlyrYu2gpwEqElyWRRB9uwBNnUVl8BziK25PiOvvyl4G/klhRrmiksgHyd4JLiLI35S/H7JJcML4lO2IYlRF+lBWAblgy/Ea1cT3gJsKNMbQHasg1LgKmiF7Zh7vyrneICdGAb5swY0cxdBOjIO81VF2B/tmGOnCe6eZAInXg5p7wA3dmGOXGcaIdtmAuPqc9fjibF+FR31V8AWUyOsbkjA/mzDYvP5tIsFEBeIcmY/CAT+cvXSDIe77fIRgHYhsXkQskIbMNisSyXlQKwDYtFf8kM3ybNpvNkdvKXkn+QZ1Op6ZahAsg4Am0q07OUP9uwJlO5V6YKID8l0qZxfbbylw5bybQprCvJWAHkTkJtCpdmLX/Zv5pUG8+KgswVgG1YUxiYvfzZhjWBpyWLPE6wjaS2eyYLwDassdwj2eQ5om0UVR0zWoCBZNsoJkhWYRvWGD5sldkCsA1rDCMym78UvEW8u+T1wuwWQC4l311ycobzl+L3CHgX/E4yzVUkvIu/AfXKdgFasg37fO6XjMM27HP5tHPWC9B2Myl/Dj+UzPMTUt45H7XOfgH2Yhu2c74hBmAbtlPeKrJQgC5sw3bGYDHBAyTdMItt5C+Hsg1rkLojjBRA5hF2QzxoJX85irAbYOu+ZgogLxF3fX5iJ/9OVcRdj4272ykAT8s3wFV28j+WtOuzqthM/gU8KdsAQ+38ABhJ2vV53k7+bZmENPA3oCPtFODnxF2fh+3kfwhHQfXZvr+dAiwi7vpMsZP/ENKuz6Y9zOTf/G3iNv03oOtIuz6vFZrJn0OAhuhv5wcAhwAN8Bs7+XMI0ACf7schgGmu5RDANE/mzOTPIUADrDI0A+EQoD6Vh3IIYJqz7eQvvyPuekwwlD+HAPUZZyh/DgHqUTfaUP5cDFKP2uGW8ucQ4P/Zcb6l/DkE+H9WHmEq/34k/r/cXWIq/4LlRP5ZKoaKLTgE+B8e29tY/hwCfJaFfcQaHAL8l6XHmYufQ4D//uq3YKAYhEOA//zh59lRX7AYP4cAURRFlYuv6iA2ab7WePabl9w67OACMYvDIcCq6Zq57earLzvzhN775cQ0nR0OAQYKqGd2/PyfxT3bhwBHYZ/pQ4C52KefUQ6/Nh+CffoPATbGL8D92Kcfh0OA7fthn3pcDgGmYZ9+HA4BKttjn3pcDgFuxj71tHA4BKhog3/qcfkS4BrsU4/LIcAHLfBPPQ6HANEI7FOPyyHAykL8047TlwBn4596HA4Boldy+Kcdl0OA6CT8U880h/wXY596nL4EOBr/1OPyJcA87FPPUJfPJw7FP+24HAJEv8I/9bgcAmzvgn/acTkEiG7DP/VMcci/ih2Ifl53KMBE7FNPJ4f8N+2Of+r5ukMBxmCffh6On/86diD6KaiIX4CR2KefPg7XARRhn+m/Ap2LexmgPHb+y9mBZIDW8Q+CB+FeBjgjdv5LMC8L3Bm7AH0xLwusiZv/43iXBdrH3oF0x7wscGLcAszCu0wwOu4tyvvjXSa4J2YB7sC6bPByzB3IXliXCXIx12ALsS4bdIn5L8AzWJcNjopZgEVYlw1OjlmADViXDS6M+2eAnniXCb4d+0qAYszLAhPifxLaDvcygMO1AB9MGNgTGkXXcAswlefBUmBFuAWYSDq2CzCWdGwX4JukY7sAF5OO7QIMIB3bBdiHdGwXIFdFPKYLIMuJx3YBHiIe2wUYQzy2C3A48dguQK6CfEwXQB4hH9sFuJx8bBegYw0BmS6ALCQg2wUYRkC2C9CqkoRMF0BmkpDtApTtICLTBZDbiMh2AUo3k5HpAsh1ZGS7AC3XEZLpAshlhGS7AAWvkZLpAsgppGS7ADKPmGwXoPUb5GS6AFK2iaBMF0BOqCYp0wXgQ1HrBZDpRGW7AMVLyMp0AaR0LWGZLoB0XkZapgsgJXOIy3QBRG6oIzDTBZChXBlguwDS410iM10A2bOczEwXQIqvZSVougAipdPYipsugEgZvxDaLoDIkUuJznQBRAazErFdAMn1n7mF/AwXQERKLpjP58OWCyAixcfeuHQ7MdotgIhIUdfTv3fv4mWr1m+pJVCLBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADFFO7X87hTzxsxbPDxvcuao98UZRf/eO4bn/0+sPbtp24d1TOHfgN0vuT+93by0VvFo1d2Q3+m2X1k+S5ujnx9bCf0Z5Xj52xtxMevtYvOyaE/g3R/qtEfQC8fgP6s0eneJt0EsLAn+rNEmx992sRbEGpn7Yv+rFB81cYYF2Fsm7wH+jPBUatj3oXyzwvRnwEu2hb/OpxJBehXTsEkpwuR5rdGv+7//TzleCXWGwegXzEHvul8KVrFV9CvlhP/mcC1eNVXoF8poxJ6P3ga+lVySmK3gF6LfoV0S+6hmLoz0K+Odquj5Kg8DP3KKPp9ohckv7Mn+nVxe8JXZJcXo18TIxO/JH0G+hXxZQ/PxI1Gvxpab/DwTkJNL/RrYaKXlzIWoV8JHT/x81bKQPTrYIanx3KW59CvgUNqfD2XNAz9GnjS23tZ7zRDf/gc7/HFtO+iP3hyf/JoQMXu6A+dc7w+mngL+kPnD14N+LgF+sPmoMgv56I/bG7ybMAC9If9X6C1ng2o6YD+kDkm8s3V6A+Zm70bsBD9IfOSdwM+KUZ/uLSu9m5A1A/94XKaf/3RjegPlykpGPB79IfL0ykY8CH6w2VtCgZEbdAfKi1q0zCgD/pD5bA09EcXoT9UzkzFgJvRHyrDUzHgDvSHyuhUDJiF/lAZl4oB89AfKrekYsCz6A+V21Mx4M/oD5WpqRjwEvpDZWIqBjyD/lAZm4oBj6A/VL6ZigH3oD9ULk7FgFvRHyoDUjFgDPpDZZ9UDBiM/lDJVaVhwEHoD5blKejfUYT+YHkoBQPeQn+4jEnBgF+jP1wOT8GA4egP+H+BFf4NOAD9AfOId/3voj9kLvduwH3oD5mONb4NGIz+oFnoWf9HRegPmmGeDZiK/rBpVenXgF7oD5yZXvW/iv7QKdvh04Az0B88t3nU/zz6w6d0sz8D+qJfAdd50/9b9Gug5TpP+qu/iH4VXObJgLvQr4OC17zor+qAfiWc4sWAm9Cvhnke9K/eDf1qaP1G4vo/Phj9iijblLD+mpPRr4oTEr4192r0KyPZDyXvQ786pieo/4Vm6FdH8ZLkhpDt0a+Q0qRuzq3qiX6VdF6WiP6/90G/UkrmJKD/z3vb1v8nvfpF5IY6V/2zW6JfM0PdPpmvGyfo102Pdx30Vw5Bv3r2LI//608P9GeA4mvjreSq7ypFfzYonRZjKz33i4L+zFDW1F+IXjxG0J8pjlzaBPl/GyrozxyDG7uS+PCKIvRnkVz/mVt2qX7HvDObCfqzSskF8z/v89kd5d8qFUF/pik+9sal2xsQX7t88qBWIui3QFHX07937+Jlq9ZvqanasGbF8w/ecHaPFmKH1PX/GwsdIPGwG/rNAAAAAElFTkSuQmCC",alt:"shopping-cart-icon"}),n>0?Object(h.jsxs)("span",{className:"cart-count",children:[" ",n," "]}):null]})})),k=function(){var e=Object(c.useContext)(p).user;return console.log("user",e),Object(h.jsxs)("nav",{className:"nav-menu container",children:[Object(h.jsx)("div",{className:"logo",children:Object(h.jsx)(i.b,{to:"/",children:" STORE"})}),Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsx)(i.b,{to:"/",children:"Home"})}),Object(h.jsx)("li",{children:Object(h.jsx)(i.b,{to:"/shop",children:"Shop"})}),!e&&Object(h.jsx)("li",{children:Object(h.jsx)(i.b,{to:"/sign-in",children:"Sign In"})}),e&&Object(h.jsx)("li",{onClick:function(){return j.signOut()},children:"Sign Out"}),!e&&Object(h.jsx)("li",{children:Object(h.jsx)(i.b,{to:"/sign-up",children:"Sign Up"})})]}),Object(h.jsx)(I,{})]})},D=A(47),B=A(48),P=A(43);var F=function(){return Object(h.jsx)("footer",{style:{marginTop:50,backgroundColor:"#eeeeee",padding:20,fontSize:15,fontFamily:"helvetica",height:"80px"},className:"mt-5",children:Object(h.jsx)(D.a,{fluid:!0,children:Object(h.jsxs)(B.a,{className:"border-top justify-content-between p-3",children:[Object(h.jsxs)(P.a,{className:"p-0",md:3,sm:12,children:[Object(h.jsx)("br",{}),"Copyright \xa9 2021 Gradient E-Commerce. All Rights Reserved."]}),Object(h.jsx)(P.a,{style:{fontWeight:"bolder"},className:"p-0 d-flex justify-content-end",md:3,children:"Made with \u2764 in ATL"})]})})})},L=function(e){var t=e.children;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(k,{}),Object(h.jsx)("main",{children:t}),Object(h.jsx)(F,{})]})},E=(A(72),function(){return Object(h.jsx)("section",{className:"hero is-info is-large hero-image",children:Object(h.jsx)("div",{style:{height:700},className:"hero-body",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("h1",{style:{marginBottom:60,fontSize:65},className:"title",children:"gradients.shop"}),Object(h.jsx)("div",{className:"shop-now-btn",children:Object(h.jsx)("div",{children:Object(h.jsx)(i.b,{style:{borderColor:"black",fontSize:20,color:"white",backgroundColor:"black",padding:8,fontWeight:"bolder",display:"inline-block",paddingLeft:40,paddingRight:40,cursor:"pointer",textDecoration:"none"},to:"/shop",children:"SHOP ALL "})})})]})})})}),R=[{id:1,title:"SUMMER21/ 01//DIGITAL DOWNLOAD",description:"colors--color1,color2",imageUrl:"https://i.ibb.co/G0L2kkF/1-2.png",price:.5},{id:2,title:"SUMMER21/ 02 //DIGITAL DOWNLOAD",description:"colors--color1,color2",imageUrl:"https://i.ibb.co/6Xk5KD6/1-3.png",price:.5},{id:3,title:"SUMMER21/ 03/DIGITAL DOWNLOAD",description:"colors--color1,color2",imageUrl:"https://i.ibb.co/QFdJ0Tp/1-5.png",price:.5},{id:4,title:"SUMMER21/ 04//DIGITAL DOWNLOAD",description:"colors--color1,color2",imageUrl:"https://i.ibb.co/bRrxtFN/1-7.png",price:.5},{id:5,title:"OG--001",description:"colors--color1,color2",imageUrl:"https://i.ibb.co/pPp4t6G/8.png",price:.5},{id:6,title:"OG--002",description:"colors--color1,color2",imageUrl:"https://i.ibb.co/f9ZYfqY/28.png",price:.5},{id:7,title:"OG--003",description:"colors--color1,color2",imageUrl:"https://i.ibb.co/NTFH0Rd/38.png",price:.5},{id:8,title:"OG--004",description:"colors--color1,color2",imageUrl:"https://i.ibb.co/RBc1XhS/46.png",price:.5}],M=Object(c.createContext)(),S=function(e){var t=e.children,A=Object(c.useState)(R),n=Object(m.a)(A,1)[0];return Object(h.jsx)(M.Provider,{value:{products:n},children:t})},G=function(e,t){return t.find((function(t){return t.id===e.id}))},z="https://gradient-store-39289-default-rtdb.firebaseio.com";function H(e,t){return X.apply(this,arguments)}function X(){return(X=Object(l.a)(a.a.mark((function e(t,A){var c,n,r,i,s,l;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=Object(o.a)({method:"POST",body:null},A),n=c.method,r=c.body,i=j.currentUser,e.t0=i,!e.t0){e.next=7;break}return e.next=6,i.getIdToken();case 6:e.t0=e.sent;case 7:return s=e.t0,e.next=10,fetch("".concat(z,"/").concat(t),Object(o.a)(Object(o.a)({method:n},r&&{body:JSON.stringify(r)}),{},{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(s)}}));case 10:if(200!==(l=e.sent).status){e.next=15;break}return e.abrupt("return",l.json());case 15:throw new Error(l.statusText);case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}A(73);var J=Object(f.f)((function(e){var t=e.title,A=e.imageUrl,n=e.price,r=e.history,i=e.id,s=e.description,a={title:t,imageUrl:A,price:n,id:i,description:s},o=Object(c.useContext)(C),l=o.addProduct,u=o.cartItems,d=o.increase,j=G(a,u);return Object(h.jsxs)("div",{className:"featured-product",children:[Object(h.jsx)("div",{className:"featured-image",onClick:function(){return r.push("/product/".concat(i))},children:Object(h.jsx)("img",{src:A,alt:"product"})}),Object(h.jsxs)("div",{className:"name-price",children:[Object(h.jsx)("h3",{children:t}),Object(h.jsxs)("p",{children:["$ ",n]}),!j&&Object(h.jsx)("button",{className:"button is-black nomad-btn",onClick:function(){return l(a)},children:"ADD TO CART"}),j&&Object(h.jsx)("button",{className:"button is-white nomad-btn",id:"btn-white-outline",onClick:function(){return d(a)},children:"ADD MORE"})]})]})})),T=(A(74),function(){var e=Object(c.useContext)(M).products.filter((function(e,t){return t<4})).map((function(e){return Object(c.createElement)(J,Object(o.a)(Object(o.a)({},e),{},{key:e.id}))}));return Object(h.jsxs)("div",{className:"featured-collection ",children:[Object(h.jsx)("h2",{className:"featured-section-title",children:"Featured Collection "}),Object(h.jsx)("div",{className:"Product-Container",children:Object(h.jsx)("div",{className:"products",children:e})})]})}),Y=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(L,{children:[Object(h.jsx)(E,{}),Object(h.jsx)(T,{})]})})},U=A(34),q=(A(44),function(){var e=Object(c.useState)(""),t=Object(m.a)(e,2),A=t[0],n=t[1],r=Object(c.useContext)(C).cartItems,i=Object(U.useStripe)(),s=function(){var e=Object(l.a)(a.a.mark((function e(t){var c,n,s,o,l;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),c=r.map((function(e){return{quantity:e.quantity,price_data:{currency:"usd",unit_amount:100*e.price,product_data:{name:e.title,description:e.description,images:[e.imageUrl]}}}})),e.next=4,H("create-checkout-session",{body:{line_items:c,customer_email:A}});case 4:return n=e.sent,s=n.sessionId,e.next=8,i.redirectToCheckout({sessionId:s});case 8:o=e.sent,(l=o.error)&&console.log(l);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)("form",{onSubmit:s,children:[Object(h.jsx)("div",{children:Object(h.jsx)("input",{type:"email",onChange:function(e){return n(e.target.value)},placeholder:"Email",value:A,className:"nomad-input"})}),Object(h.jsx)("div",{className:"submit-btn checkoutbtn",children:Object(h.jsx)("button",{type:"submit",className:"button is-black nomad-btn  submit",children:"Checkout"})})]})}),Q=function(){var e=Object(c.useContext)(C),t=e.itemCount,A=e.total;return Object(h.jsx)(L,{children:Object(h.jsxs)("div",{className:"checkout",children:[Object(h.jsx)("h2",{children:"Checkout Summary"}),Object(h.jsx)("h3",{children:"Total Items: ".concat(t)}),Object(h.jsx)("h4",{children:"Amount to Pay: $".concat(A)}),Object(h.jsx)(q,{})]})})},Z=(A(75),function(){var e=Object(c.useContext)(M).products.map((function(e){return Object(c.createElement)(J,Object(o.a)(Object(o.a)({},e),{},{key:e.id}))}));return Object(h.jsx)(L,{children:Object(h.jsxs)("div",{className:"product-list-container",children:[Object(h.jsx)("h2",{className:"product-list-title",children:"Shop"}),Object(h.jsx)("div",{className:"product-list",children:e})]})})}),K=Object(f.f)((function(e){var t=e.history;return Object(h.jsx)(L,{children:Object(h.jsxs)("div",{className:"checkout",children:[Object(h.jsx)("h1",{children:"Payment failed"}),Object(h.jsx)("p",{children:"Payment was not successful"}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{className:"button is-black nomad-btn submit continue",onClick:function(){return t.push("/shop")},children:"Continue Shopping"})})]})})})),W=(A(76),Object(f.f)((function(e){var t=e.match,A=e.history.push,n=Object(c.useContext)(M).products,r=Object(c.useContext)(C),s=r.addProduct,a=r.cartItems,o=r.increase,l=t.params.id,u=Object(c.useState)(null),d=Object(m.a)(u,2),j=d[0],b=d[1];if(Object(c.useEffect)((function(){var e=n.find((function(e){return Number(e.id)===Number(l)}));if(!e)return A("/shop");b(e)}),[l,j,A,n]),!j)return null;var p=j.imageUrl,O=j.title,f=j.price,x=j.description,v=G(j,a);return Object(h.jsx)(L,{children:Object(h.jsxs)("div",{className:"single-product-container",children:[Object(h.jsx)("div",{className:"product-image",children:Object(h.jsx)("img",{src:p,alt:"product"})}),Object(h.jsxs)("div",{className:"product-details",children:[Object(h.jsxs)("div",{className:"name-price",children:[Object(h.jsx)("h3",{children:O}),Object(h.jsx)("p",{children:f})]}),Object(h.jsxs)("div",{className:"add-to-cart-buttons",children:[!v&&Object(h.jsx)(i.b,{className:"button is-black __checkout ",id:"btn-gray-outline",onClick:function(){return s(j)},children:"Add to Cart"}),v&&Object(h.jsx)(i.b,{className:"button is-white __checkout",id:"btn-white-outline",onClick:function(){return o(j)},children:"Add More"}),Object(h.jsx)(i.b,{to:"/cart",className:"button is-white  __checkout",id:"btn-white-outline",children:"Proceed to Cart"})]}),Object(h.jsx)("p",{children:x})]})]})})}))),V=function(e){var t=e.width;return Object(h.jsx)("svg",{width:t,fill:"currentColor",viewBox:"0 0 20 20",children:Object(h.jsx)("path",{d:"M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z",clipRule:"evenodd",fillRule:"evenodd"})})},_=function(e){var t=e.width;return Object(h.jsx)("svg",{width:t,fill:"currentColor",viewBox:"0 0 20 20",children:Object(h.jsx)("path",{d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z",clipRule:"evenodd",fillRule:"evenodd"})})},$=function(e){var t=e.width;return Object(h.jsx)("svg",{width:t,fill:"currentColor",viewBox:"0 0 20 20",children:Object(h.jsx)("path",{d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",clipRule:"evenodd",fillRule:"evenodd"})})},ee=function(e){var t=e.title,A=e.imageUrl,c=e.price,n=e.quantity,r=e.id,i=e.description,s=e.increase,a=e.decrease,o=e.removeProduct,l={title:t,imageUrl:A,price:c,quantity:n,id:r,description:i};return Object(h.jsxs)("div",{className:"cart-item",children:[Object(h.jsx)("div",{className:"item-image",children:Object(h.jsx)("img",{src:A,alt:"product"})}),Object(h.jsxs)("div",{className:"name-price",children:[Object(h.jsx)("h4",{children:t}),Object(h.jsxs)("p",{children:["$",c]})]}),Object(h.jsx)("div",{className:"quantity",children:Object(h.jsx)("p",{children:"Quantity: ".concat(n)})}),Object(h.jsxs)("div",{className:"btns-container",children:[Object(h.jsx)("button",{className:"btn-increase",onClick:function(){return s(l)},children:Object(h.jsx)(_,{width:"20px"})}),1===n&&Object(h.jsx)("button",{className:"btn-trash",onClick:function(){return o(l)},children:Object(h.jsx)($,{width:"20px"})}),n>1&&Object(h.jsx)("button",{className:"btn-decrease",onClick:function(){return a(l)},children:Object(h.jsx)(V,{width:"20px"})})]})]})},te=Object(f.f)((function(e){var t=e.itemCount,A=e.total,c=e.history,n=e.clearCart;return Object(h.jsxs)("div",{className:"total-container",children:[Object(h.jsxs)("div",{className:"total",children:[Object(h.jsxs)("p",{children:["Total Items: ",t]}),Object(h.jsx)("p",{children:"Total: $".concat(A)})]}),Object(h.jsxs)("div",{className:"checkout",children:[Object(h.jsx)("button",{className:"button is-black",onClick:function(){return c.push("/checkout")},children:"CHECKOUT"}),Object(h.jsx)("button",{className:"button is-white",onClick:function(){return n()},children:"CLEAR"})]})]})})),Ae=(A(77),function(){var e=Object(c.useContext)(C),t=e.cartItems,A=e.itemCount,n=e.total,r=e.increase,i=e.decrease,s=e.removeProduct,a=e.clearCart,l={increase:r,decrease:i,removeProduct:s};return Object(h.jsx)(L,{children:Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{children:"Cart"}),0===t.length?Object(h.jsx)("div",{className:"empty-cart",children:"Your Cart is empty"}):Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"cart-page",children:[Object(h.jsx)("div",{className:"cart-item-container",children:t.map((function(e){return Object(c.createElement)(ee,Object(o.a)(Object(o.a)({},e),{},{key:e.id},l))}))}),Object(h.jsx)(te,{itemCount:A,total:n,clearCart:a})]})})]})})}),ce=Object(f.f)((function(e){var t=e.history,A=Object(c.useContext)(C),n=A.clearCart,r=A.cartItems;return Object(c.useEffect)((function(){0!==r.length&&n()}),[n,r]),Object(h.jsx)(L,{children:Object(h.jsxs)("div",{className:"checkout",children:[Object(h.jsx)("h1",{children:"Thank you for your order"}),Object(h.jsx)("p",{children:"We are currently processing your order and will send you a confirmation email shortly"}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{className:"button is-black nomad-btn submit continue",onClick:function(){return t.push("/shop")},children:"Continue Shopping"})})]})})})),ne=A(37),re=(A(45),function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",e.firstname||(t.firstname="Required"),e.password||(t.password="Required"),t}),ie=Object(f.f)((function(e){var t=e.history.push,A=Object(c.useState)(null),n=Object(m.a)(A,2),r=n[0],i=n[1],s=function(){var e=Object(l.a)(a.a.mark((function e(A,c){var n,r,s,o,l,u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.setSubmitting,r=A.firstname,s=A.email,o=A.password,e.prev=2,e.next=5,j.createUserWithEmailAndPassword(s,o);case 5:return l=e.sent,u=l.user,e.next=9,b(u,{displayName:r});case 9:t("/shop"),n(!1),e.next=18;break;case 13:e.prev=13,e.t0=e.catch(2),console.log("error",e.t0),n(!1),i(e.t0);case 18:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(t,A){return e.apply(this,arguments)}}();return Object(h.jsx)(L,{children:Object(h.jsxs)("div",{className:"sign-up",children:[Object(h.jsx)("h1",{children:"Sign Up"}),Object(h.jsx)("div",{className:"form-container",children:Object(h.jsx)(ne.a,{initialValues:{firstname:"",email:"",password:""},validate:re,onSubmit:s,children:function(e){var t=e.values,A=e.errors,c=e.handleChange,n=e.handleSubmit,i=e.isSubmitting,s=A.firstname,a=A.email,o=A.password;return Object(h.jsxs)("form",{onSubmit:n,children:[Object(h.jsx)("div",{children:Object(h.jsx)("input",{type:"text",name:"firstname",onChange:c,value:t.firstname,placeholder:"First Name",className:"nomad-input "+(s?"error":"")})}),Object(h.jsx)("div",{children:Object(h.jsx)("input",{type:"email",name:"email",onChange:c,value:t.email,placeholder:"Email",className:"nomad-input "+(a?"error":"")})}),Object(h.jsx)("div",{children:Object(h.jsx)("input",{type:"password",name:"password",onChange:c,value:t.password,placeholder:"Password",className:"nomad-input "+(o?"error":"")})}),Object(h.jsx)("div",{className:"submit-btn",children:Object(h.jsx)("button",{type:"submit",disabled:i,className:"button is-black nomad-btn submit",children:"Sign Up"})}),Object(h.jsx)("div",{className:"error-message",children:r&&Object(h.jsx)("p",{children:r.message})})]})}})})]})})})),se=function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",t},ae=Object(f.f)((function(e){var t=e.history.push,A=Object(c.useState)(null),n=Object(m.a)(A,2),r=n[0],i=n[1],s=function(){var e=Object(l.a)(a.a.mark((function e(A,c){var n,r,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.setSubmitting,console.log("values",A),r=A.email,s=A.password,e.prev=3,e.next=6,j.signInWithEmailAndPassword(r,s);case 6:n(!1),t("/shop"),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(3),console.log("error",e.t0),n(!1),i(e.t0);case 15:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t,A){return e.apply(this,arguments)}}();return Object(h.jsx)(L,{children:Object(h.jsxs)("div",{className:"sign-up",children:[Object(h.jsx)("h1",{children:"Sign In"}),Object(h.jsx)("div",{className:"form-container",children:Object(h.jsx)(ne.a,{initialValues:{email:"",password:""},validate:se,onSubmit:s,children:function(e){var t=e.values,A=e.errors,c=e.handleChange,n=e.handleSubmit,i=e.isSubmitting,s=A.email;return Object(h.jsxs)("form",{onSubmit:n,children:[Object(h.jsx)("div",{children:Object(h.jsx)("input",{type:"email",name:"email",onChange:c,value:t.email,placeholder:"Email",className:"nomad-input email "+(s?"error":"")})}),Object(h.jsx)("div",{children:Object(h.jsx)("input",{type:"password",name:"password",onChange:c,value:t.password,placeholder:"Password",className:"nomad-input password"})}),Object(h.jsx)("div",{className:"submit-btn",children:Object(h.jsx)("button",{type:"submit",disabled:i,className:"button is-black nomad-btn submit",children:"Submit"})}),Object(h.jsx)("div",{className:"error-message",children:r&&Object(h.jsx)("p",{children:r.message})})]})}})})]})})}));var oe=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)(f.c,{children:[Object(h.jsx)(f.a,{exact:!0,path:"/",component:Y}),Object(h.jsx)(f.a,{path:"/shop",component:Z}),Object(h.jsx)(f.a,{path:"/sign-up",component:ie}),Object(h.jsx)(f.a,{path:"/sign-in",component:ae}),Object(h.jsx)(f.a,{path:"/product/:id",component:W}),Object(h.jsx)(f.a,{path:"/cart",component:Ae}),Object(h.jsx)(f.a,{path:"/success",component:ce}),Object(h.jsx)(f.a,{path:"/canceled",component:K}),Object(h.jsx)(f.a,{path:"/checkout",component:Q})]})})},le=A(51),ue=Object(le.a)("pk_test_51ItG8kJyXDkkLk357A23Knj9u6x5vzhdYF2Ck3z5HnfWtqdTRraACDVL1YH30wa1JZfmIiQsAwnNtuu1x7qsgNEY00p5qIb3cr");r.a.render(Object(h.jsx)(i.a,{children:Object(h.jsx)(S,{children:Object(h.jsx)(N,{children:Object(h.jsx)(U.Elements,{stripe:ue,children:Object(h.jsx)(O,{children:Object(h.jsx)(oe,{})})})})})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.fd079b17.chunk.js.map