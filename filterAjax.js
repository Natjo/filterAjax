/**
 * Ajax form filter with more button
 * Set current page and items per page: 
 * if data-items-per-page = 8 and 16 items are in DOM set  data-current-page="2"
 * Need this 3 elements:
 * 
 * namespace-form - form with checkboxes or radio
 * namespace-result - element wher items will be displayed
 * namespace-more - add items until max_page
 * 
 * @param {Object} params
 * @param {string} params.namespace default is filterAjax
 * 
 */

function FilterAjax(params) {
	const url = paramsData.wp_ajax_url;
	let page = form.dataset.currentPage || 1;
    let items_per_page = form.dataset.itemsPerPage || 8;
    const namespace = params.namespace || 'filterAjax';
    const form = document.querySelector(`.${namespace}-form`);
    const btn_reset = form.querySelector('[type="reset"]');
    const btn_filter = form.querySelector('.btn-filter');
    const result = document.querySelector(`.${namespace}-result`);
    const btn_more = document.querySelector(`.${namespace}-more`);
	const tpl = document.getElementById(`${namespace}-tpl`).innerHTML;

    const clear = () => result.innerHTML = '';

    const loading = () => {
		form.classList.add('loading');
		btn_more.classList.add('loading');
		btn_more.disabled = true;
	};

    const onload = () => {
		form.classList.remove('loading');
        btn_more.classList.remove('loading');
		btn_more.disabled = false;
	};
	
    const reset = () => {
		clear();
		page = 1;
		form.querySelectorAll('input:checked').forEach(item => (item.checked = false));
		ajax();
	};

    const ajax = () => {
        loading();

        const formData = new FormData(form);
        formData.append('nonce', form.dataset.nonce);
        formData.append('action', form.action);
        formData.append('items_per_page', items_per_page);
		formData.append('page', page);

       	const xhr = new XMLHttpRequest();
        xhr.open('POST', url, true);
        xhr.onreadystatechange = () => {
			if (xhr.readyState === 4 && (xhr.status === 200 || xhr.status === 0)) {
                const response = JSON.parse(xhr.response);
				page == 1 && clear();
				if (response.datas.length) {
                   for (let data of response.datas) {
						const card = eval("`" + tpl + "`");
						result.insertAdjacentHTML('beforeend', card);
					} 
					btn_more.style.display = page >= response.max_page ? 'none' : 'block';
                } else{
					result.innerHTML = response.msg;
					btn_more.style.display = 'none';
				}
            }
            onload();
            if(typeof params.onload === 'function') params.onload(response);
        };

        xhr.send(formData);
    };

    form.querySelectorAll('input:checked').forEach(item => (item.checked = false));

	btn_filter.onclick = () => ajax();

    btn_more.onclick = () => {
		page++;
		ajax();
	};
	
    btn_reset.onclick = () => reset();
	
	this.load = () => {
		page = 1;
		ajax();
	}
}

export default FilterAjax;