import { css } from "lit";

export const cardStyles = css`
  :host {
    --accent: var(--blower-knob-accent, var(--primary-color, #3d7bfd));
    --track: var(--blower-knob-track, rgba(0, 0, 0, 0.12));
    --bg: var(--ha-card-background, var(--card-background-color, #1e1e1e));
    --text: var(--primary-text-color, #e5e5e5);
    --muted: var(--secondary-text-color, rgba(229, 229, 229, 0.7));
    --shadow: var(--ha-card-box-shadow, 0 8px 24px rgba(0, 0, 0, 0.25));
    display: block;
  }

  ha-card {
    background: var(--bg);
    color: var(--text);
    box-shadow: var(--shadow);
    border-radius: 16px;
    padding: 16px;
    box-sizing: border-box;
  }

  .header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 12px;
  }

  .header ha-icon {
    color: var(--accent);
  }

  .title {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .name {
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.2;
  }

  .state {
    font-size: 0.85rem;
    color: var(--muted);
  }

  .knob {
    position: relative;
    width: 220px;
    height: 220px;
    margin: 0 auto;
    display: grid;
    place-items: center;
  }

  .dial {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    touch-action: none;
    background:
      conic-gradient(
        var(--accent) 0deg,
        var(--accent) var(--progress, 0deg),
        var(--track) var(--progress, 0deg)
      );
    display: grid;
    place-items: center;
    transition: background 120ms ease-out;
  }

  .dial::after {
    content: "";
    position: absolute;
    inset: 12px;
    border-radius: 50%;
    background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.08), transparent 45%),
      var(--ha-card-background, rgba(0, 0, 0, 0.35));
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.05);
  }

  .value {
    position: relative;
    z-index: 1;
    text-align: center;
  }

  .value .current {
    font-size: 2.4rem;
    font-weight: 700;
    letter-spacing: -0.02em;
  }

  .value .unit {
    font-size: 0.95rem;
    color: var(--muted);
  }

  .controls {
    margin-top: 14px;
    display: flex;
    justify-content: center;
    gap: 12px;
  }

  .pill {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 8px 12px;
    border-radius: 12px;
    background: rgba(0, 0, 0, 0.08);
    color: var(--text);
    font-size: 0.95rem;
    cursor: pointer;
    user-select: none;
    transition: transform 120ms ease, background 120ms ease;
  }

  .pill:hover {
    transform: translateY(-1px);
    background: rgba(255, 255, 255, 0.06);
  }

  .pill ha-icon {
    color: var(--accent);
  }

  .row {
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-top: 12px;
  }

  button {
    background: var(--accent);
    color: #fff;
    border: none;
    padding: 10px 14px;
    border-radius: 10px;
    font-weight: 600;
    cursor: pointer;
    min-width: 46px;
    transition: transform 120ms ease, box-shadow 120ms ease, background 120ms ease;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);
  }

  button:hover {
    transform: translateY(-1px);
    box-shadow: 0 10px 22px rgba(0, 0, 0, 0.35);
  }

  button.secondary {
    background: rgba(255, 255, 255, 0.07);
    color: var(--text);
    box-shadow: none;
  }

  .unavailable {
    text-align: center;
    padding: 8px 0;
    color: #ffb3b3;
  }

  @media (max-width: 480px) {
    .knob {
      width: 180px;
      height: 180px;
    }
    .value .current {
      font-size: 2rem;
    }
  }
`;
