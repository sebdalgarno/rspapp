<script>
    import { getContext } from "svelte";
    import Tips from "./Tips.svelte";
    import ButtonTips from "./ButtonTips.svelte";
    import { tips_lh_year, tips_lh_map } from "../tips";
  
    const { open } = getContext("simple-modal");
  
    const showTipsLh = () => {
      open(Tips, {
        tips1: tips_lh_year,
        tips2: tips_lh_map
      },
        {styleWindow: {'z-index': 100}}
      );
    };
  </script>

<ButtonTips on:open-modal={showTipsLh} class="text-xs font-semibold inline-block py-1 px-2 rounded text-indigo-800 hover:text-indigo-900 bg-indigo-200 hover:bg-opacity-100 bg-opacity-80 last:mr-0 mr-1">
Tips
</ButtonTips>  