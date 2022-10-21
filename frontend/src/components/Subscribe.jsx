import messages from '../img/messages.svg'

function Subscribe() {
  return (
    <div class="subscribe">
            <div class="subscribe__content">
                <div class="subscribe__for-updates">
                    <h1 class="subscribe_h1">
                      Subscribe for updates
                    </h1>
                    <div class="subscribe__text1">
                      Subscribe for exclusive early sale access and new arrivals.
                    </div>
                    <div class="subscribe__checkboxes">
                        <div class="subscribe__checkbox-category">
                          Women
                        </div>
                        <div class="subscribe__checkbox-category">
                          Men
                        </div>
                        <div class="subscribe__checkbox-category subscribe__checkbox-category_hover">
                          Girls
                        </div>
                        <div class="subscribe__checkbox-category">
                          Boys
                        </div>
                    </div>
                    <form class="input-group">
                        <label for="email" class="subscribe-text2">
                            Email <br />
                            <input class="email-input" type="text" id="email" placeholder="Your working email" />
                            <button class="subscribe-button">
                                Subscribe
                            </button>
                        </label>
                    </form>
                    <div class="subscribe__receive-communications subscribe__text2">
                        <input type="checkbox" name="checkbox" />
                        I agree to receive communications from Createx Store.
                    </div>
                </div>
                <div class="subscribe__messages">
                    <img src={messages} alt="messages" />
                </div>
            </div>
        </div>
  )
}

export default Subscribe