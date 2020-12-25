<form action="myAction" data-nonce="myNonce" novalidate="novalidate" role="form" aria-label="Search filter" data-current-page="1">

    <fieldset class="category-1">
        <legend>Category 1</legend>

        <div class="field">
            <input type="radio" id="choice-0" name="choice[]" value="choice-0"><label for="choice-0">choice 0</label>
        </div>

        <div class="field">
            <input type="radio" id="choice-1" name="choice[]" value="choice-1"><label for="choice-1">choice 1</label>
        </div>

    </fieldset>

    <fieldset class="category-2">
        <legend>Category 2</legend>

        <div class="field checkbox">
            <label>multi choice</label>
            <ul>
                <li>
                    <input type="checkbox" value="multichoice-0" name="multichoice[]" id="multichoice-0">
                    <label for="multichoice-0">Multichoice 0</label>
                </li>

                <li>
                    <input type="checkbox" value="multichoice-0" name="multichoice[]" id="multichoice-1">
                    <label for="multichoice-0">Multichoice 1</label>
                </li>
                <li>
                    <input type="checkbox" value="multichoice-0" name="collections[]" id="multichoice-2">
                    <label for="multichoice-0">Multichoice 2</label>
                </li>
            </ul>
        </div>


        <div class="action">
            <button type="reset">Reset filters</button>
            <button type="button" class="btn-validation btn-secondary">Filter</button>
        </div>

    </fieldset>
</form>