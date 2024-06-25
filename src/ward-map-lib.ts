console.log('ward-map-lib loaded v1.0.2');

export function showHighlightedWardMap(categoryId: string): void {
    console.log('Opening custom page for category ID: %O', categoryId);

    Xrm.Navigation.navigateTo({
        pageType: 'custom',
        name: 'jda_wardmap_19638',
        entityName: 'jda_category',
        recordId: categoryId
    },{
        target: 2
    }).then(
        (msg) => {
            console.log('Opened the custom page successfully. msg: %O', msg);
        },
        (error) => {
            console.error('An error occurred while trying to open the custom page. %O', error);
        }
    );
}
