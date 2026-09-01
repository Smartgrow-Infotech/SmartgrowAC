import type { Thing, WithContext } from 'schema-dts'

/**
 * Emits a JSON-LD block.
 *
 * Typed against schema-dts so a malformed graph is a compile error rather than
 * something you discover in Search Console six weeks later.
 */
export function JsonLd<T extends Thing>({ data }: { data: WithContext<T> }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is not user input; escaping `<` guards the
      // </script> break-out case.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, '\\u003c'),
      }}
    />
  )
}
