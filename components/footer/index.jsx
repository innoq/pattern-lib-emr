import { createElement } from "complate-stream";

export function Footer(_params, ...children) {
	return <footer class="emr-footer">
    {children}
  </footer>
}
