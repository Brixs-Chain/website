import BrxFooter from "@/components/BrxFooter";
import { renderBlock } from "@/components/page-blocks";
import { getLayout } from "@/lib/layouts";
import type { SitePage } from "@/lib/site";

export function PageBody({
  page,
  siblings,
}: {
  page: SitePage;
  siblings: SitePage[];
}) {
  const recipe = getLayout(page.path.join("/"));
  return (
    <main className="brx-page" style={{ "--accent": page.accent } as React.CSSProperties}>
      {recipe.map((block, i) => renderBlock(block, page, siblings, i))}
      <BrxFooter />
    </main>
  );
}
