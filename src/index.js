import "./main.scss";

window.onload = function () {
  (function () {
    const navBarButton = document.getElementById('nav-bar-mobile-trigger');
    const navBarCloseButton = document.querySelector('.nav__mobile-menu-close-button');
    const navBarMobileMenu = document.getElementsByClassName('nav__mobile-menu')[0];

    navBarButton.addEventListener('click', function () {
      navBarMobileMenu.style.display = 'block';
      navBarMobileMenu.style.top = window.pageYOffset + 'px';

      document.querySelector('body').style.overflow = 'hidden';
    });

    navBarCloseButton.addEventListener('click', function () {
      navBarMobileMenu.style.display = 'none';

      document.querySelector('body').style.overflow = 'auto';
    });

    // Call request open modal (desktop navbar)
    document.getElementsByClassName('nav__menu-link-button')[0].addEventListener('click', function (e) {
      e.preventDefault();

      document.getElementsByClassName('call-request-modal')[0].style.top = window.pageYOffset + 'px';
      document.getElementsByClassName('call-request-modal')[0].style.display = 'block';
      document.body.style.overflow = 'hidden';
    });

    if (document.getElementsByClassName('call-request-modal')[0]) {
      // Call request open modal (mobile navbar)
      document.getElementsByClassName('nav__mobile-menu-link-button')[0].addEventListener('click', function (e) {
        e.preventDefault();

        document.getElementsByClassName('call-request-modal')[0].style.display = 'block';
        document.body.style.overflow = 'hidden';
      });

      // Call request close modal
      document.getElementsByClassName('call-request-modal__close-button')[0].addEventListener('click', function (e) {
        e.preventDefault();

        document.getElementsByClassName('call-request-modal')[0].style.display = 'none';
        document.body.style.overflow = 'auto';
      });
    }

    // Call request on "+ (420)" click
    document.querySelector('.call-request-modal__chech-country-code').addEventListener('click', function (e) {
      e.target.nextElementSibling.focus();
    })

    switch (window.location.pathname.split('/')[window.location.pathname.split('/').length - 1].split('.')[0]) {

      case '':
      case 'index':
        document.getElementsByClassName('index-form__submit-button')[0].addEventListener('click', function (e) {
          e.preventDefault();

          window.location.href = 'book.html';
        });

        // Question modal
        // for (let g = 0; g < document.getElementsByClassName('blue').length; g++) {
        //   document.getElementsByClassName('blue')[g].addEventListener('click', function () {
        //     document.getElementsByClassName('index-question')[0].style.display = 'block';
        //     document.body.style.overflow = 'hidden';
        //   });
        // }

        function openQuestionModal() {
          if (document.getElementById('question-modal')) {
            document.getElementById('question-modal').style.display = 'block';
            document.body.style.overflow = 'hidden';
          }
        }

        // Close question modal
        // document.getElementsByClassName('index-question__close-button')[0].addEventListener('click', function () {
        //   document.getElementsByClassName('index-question')[0].style.display = 'none';
        //   document.body.style.overflow = 'auto';
        // });

        function closeQuestionModal() {
          if (document.getElementById('question-modal')) {
            document.getElementById('question-modal').style.display = 'none';
            document.body.style.overflow = 'auto';
          }
        }

        // Mobile
        const offerButton = document.querySelectorAll('.offer__button');

        const modalWindow = document.querySelector('.index-mobile__modal');
        const modalCloseButton = document.querySelector('.modal-window__close-button');
        const firstModalTabInput = document.querySelector('.radio__input-modal-tab-1');
        const modalFirstTabButton = document.querySelector('.modal-window__first-tab-button');
        const modalSecondTabButton = document.querySelector('.modal-window__tab-2-button');
        const modalThirdTabButton = document.querySelector('.modal-window__tab-3-button');
        const modalFourthTabButton = document.querySelector('.modal-window__tab-4-button');

        // Open modal
        for (let z = 0; z < offerButton.length; z++) {
          offerButton[z].addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector('.modal-window__tab-1').style.display = 'block';

            modalWindow.style.display = 'block';
            document.body.style.overflow = 'hidden';
          });
        }

        const radioButtonsHouseSize = document.getElementsByClassName('radio__input');
        for (let i = 0; i < radioButtonsHouseSize.length; i++) {
          radioButtonsHouseSize[i].addEventListener('click', function () {
            firstModalTabInput.classList.remove('radio__input-modal-tab-1--active');
          })
        }
        firstModalTabInput.addEventListener('click', function () {
          for (let i = 0; i < radioButtonsHouseSize.length; i++) {
            radioButtonsHouseSize[i].checked = false;
          }

          firstModalTabInput.classList.add('radio__input-modal-tab-1--active');
        });

        // Close modal
        modalCloseButton.addEventListener('click', function () {
          modalWindow.style.display = 'none';
          document.body.style.overflow = 'auto';
        });

        // Clicking the on the input from the first modal tab


        // Clicking on the first button
        modalFirstTabButton.addEventListener('click', function () {
          document.querySelector('.modal-window__tab-1').style.display = 'none';
          document.querySelector('.modal-window__tab-2').style.display = 'block';
        });

        // Clicking on the seconds tab button
        modalSecondTabButton.addEventListener('click', function () {
          document.querySelector('.modal-window__tab-2').style.display = 'none';
          document.querySelector('.modal-window__tab-3').style.display = 'block';
        });

        // Clicking on the third tab button
        modalThirdTabButton.addEventListener('click', function () {
          document.querySelector('.modal-window__tab-3').style.display = 'none';
          document.querySelector('.modal-window__tab-4').style.display = 'block';
        });

        // Clicking on the third tab button
        modalFourthTabButton.addEventListener('click', function () {
          document.querySelector('.modal-window__tab-4').style.display = 'none';
          modalWindow.style.display = 'none';
          document.body.style.overflow = 'auto';
        });

        // Set the value of the date to todays
        document.getElementById('tab-3-date-input').valueAsDate = new Date();

        // Set the current time
        var today = new Date();
        var time = today.getHours() + Math.round(today.getMinutes() / 60)
        document.getElementById('tab-3-time-input').value = time.toString().length === 1 ? "0" + time + ":00" : time + ":00";

        // Desktop
        const costumeSelect = document.getElementsByClassName('index-form__costume-select');

        const selectButton = document.getElementsByClassName('index-form__custome-select-button');

        const costumeDropDowns = document.getElementsByClassName('index-form__costume-select-drop-down');

        const buildingTypeDropDownItems = document.getElementsByClassName('building-type-item');
        const roomsNumberDropDownItems = document.getElementsByClassName('rooms-number-item');

        let buildingTypeDropDownClosed = true;
        let roomNumbersDropDownClosed = true;

        const dropDownsForm = document.querySelector('.index-form__form');

        function closeDropDown(item) {
          costumeDropDowns[item].style.display = 'none';

          if (item === 0) {
            dropDownsForm.style.borderBottomLeftRadius = "6px";
            document.removeEventListener('click', detectOutsideClickFromFirstDropDown);
          }
          else if (item === 1) {
            document.removeEventListener('click', detectOutsideClickFromSecondDropDown);
          }
        }

        function openDropDown(item) {
          costumeDropDowns[item].style.display = 'flex';

          if (item === 0) {
            dropDownsForm.style.borderBottomLeftRadius = "0";
            document.addEventListener('click', detectOutsideClickFromFirstDropDown);
          }
          else if (item === 1) {
            document.addEventListener('click', detectOutsideClickFromSecondDropDown);
          }
        }

        function detectOutsideClickFromFirstDropDown(e) {
          if (!costumeSelect[0].contains(e.target)) {
            buildingTypeDropDownClosed = !buildingTypeDropDownClosed;

            closeDropDown(0);
          }
        }

        function detectOutsideClickFromSecondDropDown(e) {
          if (!costumeSelect[1].contains(e.target)) {
            roomNumbersDropDownClosed = !roomNumbersDropDownClosed;

            closeDropDown(1);
          }
        }

        for (let i = 0; i < selectButton.length; i++) {
          selectButton[i].addEventListener('click', function (e) {
            e.preventDefault();

            if (e.target === selectButton[0]) {
              buildingTypeDropDownClosed = !buildingTypeDropDownClosed;
              if (!buildingTypeDropDownClosed) {
                openDropDown(0);
              } else {
                closeDropDown(0);
              }
            }
            else if (e.target === selectButton[1]) {
              roomNumbersDropDownClosed = !roomNumbersDropDownClosed;
              if (!roomNumbersDropDownClosed) {
                openDropDown(1);
              } else {
                closeDropDown(1);
              }
            }
          });
        }

        for (let j = 0; j < buildingTypeDropDownItems.length; j++) {
          buildingTypeDropDownItems[j].addEventListener('click', function (e) {
            e.preventDefault();

            selectButton[0].textContent = e.target.textContent;
            buildingTypeDropDownClosed = !buildingTypeDropDownClosed;
            closeDropDown(0);
          })
        }

        for (let k = 0; k < roomsNumberDropDownItems.length; k++) {
          roomsNumberDropDownItems[k].addEventListener('click', function (e) {
            e.preventDefault();

            selectButton[1].textContent = e.target.textContent;
            roomNumbersDropDownClosed = !roomNumbersDropDownClosed;
            closeDropDown(1);
          })
        }

        break;

      // Scripts for the promotions page
      case 'promotions':

        // Open modal
        document.getElementsByClassName('order--button')[0].addEventListener('click', function (e) {
          e.preventDefault();

          if (document.querySelector('.portal')) {
            document.querySelector('.portal').style.top = window.pageYOffset + 'px';
            document.querySelector('.portal').style.display = 'flex';
            document.body.style.overflow = 'hidden';
          }
        });

        // Close modal on pressing the close button
        document.querySelector('.portal__close-button').addEventListener('click', function (e) {
          e.preventDefault();

          if (document.querySelector('.portal')) {
            document.querySelector('.portal').style.display = 'none';
            document.body.style.overflow = 'auto';
          }
        });

        // Close modal on the dark background press
        document.querySelector('.portal').addEventListener('click', function (e) {
          if (e.target === document.querySelector('.portal')) {
            if (document.querySelector('.portal')) {
              document.querySelector('.portal').style.display = 'none';
              document.body.style.overflow = 'auto';
            }
          }
        }, false);

        break;

      // Scripts for the book page
      case 'book':
        let currentForm = 0;
        const formState = {
          bathroomRoomNumber: 0,
          additionalWorks: [],
          totalPrice: 0
        };

        function showTab(currentForm) {
          document.getElementsByClassName('form-tab')[currentForm].style.display = 'block';
          if (currentForm > 0) {
            console.log('entered in if');
            document.getElementsByClassName('form-tab')[currentForm - 1].style.display = 'none';
          }
        }

        const submitButton = document.querySelector('.button-submit');
        const bathroomRoomsNumber = document.querySelectorAll('input[name="bathroom-room-number"]');
        const additionalWorkLabels = document.querySelectorAll('[name="additional-work"]');
        const priceText = document.getElementById('price');

        const decreaseButtons = document.getElementsByClassName('radio__bottom-panel_button--decrease');
        const increaseButtons = document.getElementsByClassName('radio__bottom-panel_button--increase');

        function setBathroomRoomsNumber(numberOfRooms) {
          formState.bathroomRoomNumber = parseInt(numberOfRooms);

          updatePrice();
        }

        function updatePrice() {
          formState.totalPrice = formState.bathroomRoomNumber * 40;
          formState.totalPrice += formState.additionalWorks.length * 120;

          priceText.innerHTML = formState.totalPrice;
        }

        // Listening to the labels of the bathroom rooms number
        for (let i = 0; i < bathroomRoomsNumber.length; i++) {
          bathroomRoomsNumber[i].addEventListener('change', function (e) {
            // formState.bathroomRoomNumber = bathroomRoomsNumber[i].value;
            setBathroomRoomsNumber(e.target.value)
          });
        }

        for (let a = 0; a < decreaseButtons.length; a++) {
          // Decrease buttons
          decreaseButtons[a].addEventListener('click', function (e) {
            e.preventDefault();
            if (parseInt(e.target.nextElementSibling.textContent) > 1) {
              // Changing the UI counter
              e.target.nextElementSibling.textContent = parseInt(e.target.nextElementSibling.textContent) - 1;
              // Changing the value of the input
              e.target.parentNode.parentNode.previousElementSibling.firstElementChild.value = parseInt(e.target.parentNode.parentNode.previousElementSibling.firstElementChild.value) - 1;

              // Changing the value from the bottom (the total sum)
              priceText.textContent = parseInt(priceText.textContent) - parseInt(e.target.parentNode.parentNode.previousElementSibling.children[1].children[1].textContent);

            }
          })

          // Increase buttons
          increaseButtons[a].addEventListener('click', function (e) {
            e.preventDefault();
            if (parseInt(e.target.previousElementSibling.textContent) < 15) {
              // Changing the UI counter
              e.target.previousElementSibling.textContent = parseInt(e.target.previousElementSibling.textContent) + 1;
              // Changing the value of the input
              e.target.parentNode.parentNode.previousElementSibling.firstElementChild.value = parseInt(e.target.parentNode.parentNode.previousElementSibling.firstElementChild.value) + 1;

              // Changing the value from the bottom (the total sum)
              priceText.textContent = parseInt(priceText.textContent) + parseInt(e.target.parentNode.parentNode.previousElementSibling.children[1].children[1].textContent);
            }
          })
        }

        // Listening to the checkboxes of the additional work
        for (let j = 0; j < additionalWorkLabels.length; j++) {
          additionalWorkLabels[j].addEventListener('change', function (e) {
            if (e.target.checked) {
              console.log("e target is ::", e.target);
              e.target.parentNode.style.borderBottomLeftRadius = '0';
              e.target.parentNode.style.borderBottomRightRadius = '0';

              e.target.parentNode.nextElementSibling.style.display = 'flex';

              formState.additionalWorks.push(j);
              // formState.totalPrice += 120;
              updatePrice();
            }
            else {
              e.target.parentNode.style.borderBottomLeftRadius = '10px';
              e.target.parentNode.style.borderBottomRightRadius = '10px';

              e.target.parentNode.nextElementSibling.style.display = 'none';

              formState.additionalWorks.splice(formState.additionalWorks.indexOf(j), 1);
              // formState.totalPrice -= 120;
              updatePrice();
            }

            console.log('Additional work items ::', formState.additionalWorks);
          });
        }

        let date = new Date();
        document.querySelector('.book-form-2__input--date').value = date.toISOString().slice(0, 10);
        // Listening to date input changes
        document.querySelector('.book-form-2__date-actions--increase-date').addEventListener('click', function (e) {
          e.preventDefault();

          date.setDate(date.getDate() + 1);
          document.querySelector('.book-form-2__input--date').value = date.toISOString().slice(0, 10);
        });

        document.querySelector('.book-form-2__date-actions--decrease-date').addEventListener('click', function (e) {
          e.preventDefault();

          date.setDate(date.getDate() - 1);
          document.querySelector('.book-form-2__input--date').value = date.toISOString().slice(0, 10);
        });

        // Listening to the submit button
        submitButton.addEventListener('click', function (e) {
          e.preventDefault();

          // Saving the number of bathrooms which was selected by the user
          if (currentForm === 0) {
            // formState.bathroomRoomNumber = parseInt(document.querySelector('input[name="bathroom-room-number"]:checked').value);

            // Resetting the additionalWorks array
            // formState.additionalWorks = [];

            // Saving the additional work labels 
            // for (let i = 0; i < additionalWorkLabels.length; i++) {
            //   if (additionalWorkLabels[i].checked) formState.additionalWorks.push(i);
            // }

            currentForm = 1;
            showTab(currentForm);
          }
          else if (currentForm === 1) {
            currentForm = 2;
            showTab(currentForm);
          }

          console.log('The object is ::', formState);
        });

        // Close tab 3 (aka succes tab)
        document.getElementsByClassName('book-form-3__button')[0].addEventListener('click', function (e) {
          e.preventDefault();

          window.location.href = 'index.html';
        });

        break;

      case 'services-open-cleaning':
        console.info('111');
        openTab(event, 'room');
        document.getElementById('firstTab').className += " active--title--selector";

        document.getElementsByClassName('index-form__submit-button')[0].addEventListener('click', function (e) {
          e.preventDefault();

          window.location.href = 'book.html';
        });

        (function () {
          // Desktop
          const costumeSelect = document.getElementsByClassName('index-form__costume-select');

          const selectButton = document.getElementsByClassName('index-form__custome-select-button');

          const costumeDropDowns = document.getElementsByClassName('index-form__costume-select-drop-down');

          const buildingTypeDropDownItems = document.getElementsByClassName('building-type-item');
          const roomsNumberDropDownItems = document.getElementsByClassName('rooms-number-item');

          let buildingTypeDropDownClosed = true;
          let roomNumbersDropDownClosed = true;

          const dropDownsForm = document.querySelector('.index-form__form');

          function closeDropDown(item) {
            costumeDropDowns[item].style.display = 'none';

            if (item === 0) {
              dropDownsForm.style.borderBottomLeftRadius = "6px";
              document.removeEventListener('click', detectOutsideClickFromFirstDropDown);
            }
            else if (item === 1) {
              document.removeEventListener('click', detectOutsideClickFromSecondDropDown);
            }
          }

          function openDropDown(item) {
            costumeDropDowns[item].style.display = 'flex';

            if (item === 0) {
              dropDownsForm.style.borderBottomLeftRadius = "0";
              document.addEventListener('click', detectOutsideClickFromFirstDropDown);
            }
            else if (item === 1) {
              document.addEventListener('click', detectOutsideClickFromSecondDropDown);
            }
          }

          function detectOutsideClickFromFirstDropDown(e) {
            if (!costumeSelect[0].contains(e.target)) {
              buildingTypeDropDownClosed = !buildingTypeDropDownClosed;

              closeDropDown(0);
            }
          }

          function detectOutsideClickFromSecondDropDown(e) {
            if (!costumeSelect[1].contains(e.target)) {
              roomNumbersDropDownClosed = !roomNumbersDropDownClosed;

              closeDropDown(1);
            }
          }

          for (let i = 0; i < selectButton.length; i++) {
            selectButton[i].addEventListener('click', function (e) {
              e.preventDefault();

              if (e.target === selectButton[0]) {
                buildingTypeDropDownClosed = !buildingTypeDropDownClosed;
                if (!buildingTypeDropDownClosed) {
                  openDropDown(0);
                } else {
                  closeDropDown(0);
                }
              }
              else if (e.target === selectButton[1]) {
                roomNumbersDropDownClosed = !roomNumbersDropDownClosed;
                if (!roomNumbersDropDownClosed) {
                  openDropDown(1);
                } else {
                  closeDropDown(1);
                }
              }
            });
          }

          for (let j = 0; j < buildingTypeDropDownItems.length; j++) {
            buildingTypeDropDownItems[j].addEventListener('click', function (e) {
              e.preventDefault();

              selectButton[0].textContent = e.target.textContent;
              buildingTypeDropDownClosed = !buildingTypeDropDownClosed;
              closeDropDown(0);
            })
          }

          for (let k = 0; k < roomsNumberDropDownItems.length; k++) {
            roomsNumberDropDownItems[k].addEventListener('click', function (e) {
              e.preventDefault();

              selectButton[1].textContent = e.target.textContent;
              roomNumbersDropDownClosed = !roomNumbersDropDownClosed;
              closeDropDown(1);
            })
          }
        })();

      default:
        console.log('hey there');
    }
  })();
}
