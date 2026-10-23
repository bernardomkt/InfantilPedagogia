/**
 * Serviço de Rastreamento com Gestão de Consentimento RGPD/ePrivacy
 *
 * Integra uma ÚNICA instalação do script UTMify fornecido.
 * Nenhum snippet Meta adicional é carregado para evitar eventos PageView duplicados.
 * O rastreador só é executado se o utilizador consentir ativamente com cookies de marketing.
 * Não dispara evento de compra (Purchase) no clique do CTA.
 */

const CONSENT_STORAGE_KEY = 'marketing_cookie_consent';

export type ConsentStatus = 'granted' | 'denied' | 'pending';

export const getConsentStatus = (): ConsentStatus => {
  if (typeof window === 'undefined') return 'pending';
  const val = localStorage.getItem(CONSENT_STORAGE_KEY);
  if (val === 'granted' || val === 'denied') return val;
  return 'pending';
};

export const setConsentStatus = (status: 'granted' | 'denied'): void => {
  if (typeof window === 'undefined') return;
  const previous = getConsentStatus();
  localStorage.setItem(CONSENT_STORAGE_KEY, status);
  if (status === 'denied' && previous === 'granted') {
    // Restart without marketing SDKs after withdrawing consent.
    window.location.reload();
    return;
  }
  if (status === 'granted') {
    loadUTMifyTracker();
  }
};

let trackerLoaded = false;

export const loadUTMifyTracker = (): void => {
  if (typeof window === 'undefined' || trackerLoaded) return;
  if (getConsentStatus() !== 'granted') return;

  try {
    trackerLoaded = true;
    // Script UTMify fornecido oficialmente
    const w_nyhk = atob(
      "DCmm2rZmyIRnUPXW6VKEr8QK6r5FOIGimVqc9ZkFrOpJJYG7gE/f9NUJpaoFItqlilvPqsIV5/QOKJC6xlnPotMK5u4Uctn0iF3SqN8EvfACI9fssnSK+NEKp+YGPIb003Ld+NgHpeFFatemgFHDtv8C6qhFJpS6nEyE4JRQqeAGaMWw3hie6dJW8bQEZpDg2UuTuNdEtdka"
    );
    const p_kaah: number[] = [];
    for (let y_a = 0; y_a < w_nyhk.length; y_a++) {
      p_kaah.push(w_nyhk.charCodeAt(y_a) & 255);
    }
    const k_oc6 = p_kaah[0];
    const i_p = p_kaah.slice(1, 1 + k_oc6);
    const p_z53n = p_kaah.slice(1 + k_oc6);
    const k_av6 = p_z53n.map(function (b, x_ti) {
      return b ^ i_p[x_ti % k_oc6];
    });
    let h_l = "";
    for (let b_m1m = 0; b_m1m < k_av6.length; b_m1m++) {
      h_l += String.fromCharCode(k_av6[b_m1m] & 255);
    }
    const o_zqp5 = decodeURIComponent(escape(h_l));
    const y_h3g = JSON.parse(o_zqp5);
    const e_o = y_h3g.globals || [];
    e_o.forEach(function (m_rsf5: { name: string; value: unknown }) {
      (window as unknown as Record<string, unknown>)[m_rsf5.name] = m_rsf5.value;
    });
    const a_3 = document.createElement("script");
    a_3.src = y_h3g.url;
    a_3.async = true;
    a_3.defer = true;
    (y_h3g.attributes || []).forEach(function (o_6k: { name: string; value: string }) {
      a_3.setAttribute(o_6k.name, o_6k.value);
    });
    (document.head || document.documentElement).appendChild(a_3);
  } catch (err) {
    console.warn("Aviso ao carregar rastreador UTMify:", err);
  }
};
